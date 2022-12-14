import request from '@/utils/request'
const path = '/original'

export function addOriginal(data) {
  return request({
    url: `${path}/addOriginal`,
    method: 'post',
    data
  })
}

export function setOriginal(data) {
  return request({
    url: `${path}/setOriginal`,
    method: 'post',
    data
  })
}

export function delOriginal(data) {
  return request({
    url: `${path}/delOriginal`,
    method: 'post',
    data
  })
}

export function getGroupOriginal(data) {
  return request({
    url: `${path}/getGroupOriginal`,
    method: 'post',
    data
  })
}
