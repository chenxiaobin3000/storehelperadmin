<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="Name">
        <el-input v-model.trim="user.name" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model.trim="user.email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">Update</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: ''
        }
      }
    }
  },
  methods: {
    submit() {
      // this.$message({
      //   message: 'User information has been updated successfully',
      //   type: 'success',
      //   duration: 5 * 1000
      // })
    }
  }
}
</script>
