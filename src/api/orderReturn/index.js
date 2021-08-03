import request from '@/api/request'

// 查看退单列表 data:OrderReturnQueryVo(可选)
function findReturnApply(start, limit, data) {
  return request({
    url: `/lejuAdmin/orderReturn/findReturnApply/${start}/${limit}`,
    method: 'post',
    data
  })
}
// 同意退货 data:map:id,handleMan,handleNote,returnAmount
function agreeApply(id, map) {
  return request({
    url: `/lejuAdmin/orderReturn/agreeApply/${id}`,
    method: 'post',
    data: map
  })
}
// 收到退货  data:map:id,receiveMan,receiveNote
function receiveProduct(id, map) {
  return request({
    url: `/lejuAdmin/orderReturn/receiveProduct/${id}`,
    method: 'post',
    data: map
  })
}
// 拒绝收货  data:map:id,handleMan,handleNote
function rejectApply(id, map) {
  return request({
    url: `/lejuAdmin/orderReturn/rejectApply/${id}`,
    method: 'post',
    data: map
  })
}
// 退单明细
function orderReturn(id) {
  return request({
    url: `/lejuAdmin/orderReturn/${id}`
  })
}

export { findReturnApply, agreeApply, receiveProduct, rejectApply, orderReturn }
