import request from '@/utils/request'
const path = '/agreement'

export function delShipped(data) {
  return request({
    url: `${path}/delShipped`,
    method: 'post',
    data
  })
}

export function delReturn(data) {
  return request({
    url: `${path}/delReturn`,
    method: 'post',
    data
  })
}