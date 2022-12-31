<template>
  <div class="app-container">
    <el-table
      v-loading="loading"
      :data="list"
      style="width: 100%;"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="公司名称" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系人" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ contacts[row.contact].name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话" width="140px" align="center">
        <template slot-scope="{row}">
          <span>{{ contacts[row.contact].phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" align="center">
        <template slot-scope="{row}">
          <span>{{ row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="220" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button type="danger" size="mini" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getGroupList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogVisible">
      <el-form :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="temp.contactPhone" />
        </el-form-item>
        <div style="width: 100%;margin-bottom:10px;">提示：请填写联系人手机，系统会自动查询联系人信息。</div>
        <el-form-item label="联系人" prop="contact">
          <el-input v-model="temp.contactName" :disabled="true" />
        </el-form-item>
        <el-form-item label="公司地址" prop="address">
          <el-input v-model="temp.address" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '@/components/Pagination'
import { getGroupList, addGroup, delGroup, setGroup } from '@/api/group'
import { getUserInfoByPhone } from '@/api/user'

export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      contacts: null, // 联系人列表
      total: 0,
      loading: false, // 改为不加载
      listQuery: {
        id: 0,
        page: 1,
        limit: 20,
        search: null
      },
      temp: {
        id: 0,
        name: '',
        address: '',
        contactId: 0,
        contactName: '',
        contactPhone: ''
      },
      dialogVisible: false,
      dialogStatus: '',
      textMap: {
        update: '修改公司信息',
        create: '新增公司'
      }
    }
  },
  computed: {
    ...mapState({
      search: state => state.header.search,
      create: state => state.header.create
    })
  },
  watch: {
    search(newVal, oldVal) {
      this.listQuery.search = newVal
      this.getGroupList()
    },
    create() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogVisible = true
    }
  },
  created() {
    this.listQuery.id = this.$store.getters.userdata.user.id
    this.getGroupList()
  },
  methods: {
    getGroupList() {
      this.loading = true
      getGroupList(
        this.listQuery
      ).then(response => {
        this.list = response.data.data.list
        this.total = response.data.data.total
        this.contacts = response.data.data.contacts
        this.loading = false
      }).catch(error => {
        this.loading = false
        Promise.reject(error)
      })
    },
    resetTemp() {
      this.temp = {
        id: 0,
        name: '',
        address: '',
        contactId: 0,
        contactName: '',
        contactPhone: ''
      }
    },
    createData() {
      // 先从手机号获取联系人信息
      getUserInfoByPhone({
        id: this.listQuery.id,
        phone: this.temp.contactPhone
      }).then(response => {
        // 正式新增
        addGroup({
          //id: this.listQuery.id,
          contact: response.data.data.id,
          name: this.temp.name,
          address: this.temp.address
        }).then(response => {
          this.$message({ type: 'success', message: '新增成功!' })
          this.getGroupList()
          this.dialogVisible = false
        })
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.contactId = this.contacts[row.contact].id
      this.temp.contactName = this.contacts[row.contact].name
      this.$set(this.temp, 'contactPhone', this.contacts[row.contact].phone)
      this.dialogStatus = 'update'
      this.dialogVisible = true
    },
    updateData() {
      // 先判断手机号有没改
      if (this.temp.contactPhone !== this.contacts[this.temp.contactId].phone) {
        // 先从手机号获取联系人信息
        getUserInfoByPhone({
          id: this.listQuery.id,
          phone: this.temp.contactPhone
        }).then(response => {
          this.setGroup(response.data.data.id)
        })
      } else {
        this.setGroup(this.temp.contactId)
      }
    },
    setGroup(id) {
      setGroup({
        id: this.listQuery.id,
        gid: this.temp.id,
        contact: id,
        name: this.temp.name,
        address: this.temp.address
      }).then(response => {
        this.$message({ type: 'success', message: '修改成功!' })
        this.getGroupList()
      })
      this.dialogVisible = false
    },
    handleDelete(row, index) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delGroup({
          id: this.listQuery.id,
          gid: row.id
        }).then(response => {
          this.$message({ type: 'success', message: '删除成功!' })
          this.getGroupList()
        })
      })
      this.dialogVisible = false
    }
  }
}
</script>