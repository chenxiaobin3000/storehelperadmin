import request from '@/utils/request'
const path = '/halfgood'

export function addHalfgood(data) {
  return request({
    url: `${path}/addHalfgood`,
    method: 'post',
    data
  })
}

export function setHalfgood(data) {
  return request({
    url: `${path}/setHalfgood`,
    method: 'post',
    data
  })
}

export function delHalfgood(data) {
  return request({
    url: `${path}/delHalfgood`,
    method: 'post',
    data
  })
}

export function getGroupHalfgood(data) {
  return request({
    url: `${path}/getGroupHalfgood`,
    method: 'post',
    data
  })
}

export function getStorageHalfgood(data) {
  return request({
    url: `${path}/getStorageHalfgood`,
    method: 'post',
    data
  })
}

export function setHalfgoodOriginal(data) {
  return request({
    url: `${path}/setHalfgoodOriginal`,
    method: 'post',
    data
  })
}

export function setHalfgoodStorage(data) {
  return request({
    url: `${path}/setHalfgoodStorage`,
    method: 'post',
    data
  })
}
