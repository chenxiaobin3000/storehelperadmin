import request from '@/utils/request'
const path = '/agreement'

export function shipped(data) {
  return request({
    url: `${path}/shipped`,
    method: 'post',
    data
  })
}

export function setShipped(data) {
  return request({
    url: `${path}/setShipped`,
    method: 'post',
    data
  })
}

export function delShipped(data) {
  return request({
    url: `${path}/delShipped`,
    method: 'post',
    data
  })
}
export function reviewShipped(data) {
  return request({
    url: `${path}/reviewShipped`,
    method: 'post',
    data
  })
}

export function revokeShipped(data) {
  return request({
    url: `${path}/revokeShipped`,
    method: 'post',
    data
  })
}

export function returnc(data) {
  return request({
    url: `${path}/returnc`,
    method: 'post',
    data
  })
}

export function setReturn(data) {
  return request({
    url: `${path}/setReturn`,
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

export function reviewReturn(data) {
  return request({
    url: `${path}/reviewReturn`,
    method: 'post',
    data
  })
}

export function revokeReturn(data) {
  return request({
    url: `${path}/revokeReturn`,
    method: 'post',
    data
  })
}
