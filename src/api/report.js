import request from '@/utils/request'
const path = '/report'

export function getTodayReport(data) {
  return request({
    url: `${path}/getTodayReport`,
    method: 'post',
    data
  })
}

export function getMarketReport(data) {
  return request({
    url: `${path}/getMarketReport`,
    method: 'post',
    data
  })
}

export function getAgreementReport(data) {
  return request({
    url: `${path}/getAgreementReport`,
    method: 'post',
    data
  })
}

export function getProductReport(data) {
  return request({
    url: `${path}/getProductReport`,
    method: 'post',
    data
  })
}

export function getStorageReport(data) {
  return request({
    url: `${path}/getStorageReport`,
    method: 'post',
    data
  })
}

export function getStockReport(data) {
  return request({
    url: `${path}/getStockReport`,
    method: 'post',
    data
  })
}