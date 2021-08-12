import request from '@/api/request'

// 订单列表 header:token data:orderQueryVo(可选)
function findOrdersByPage(start, limit, data) {
  return request({
    url: `/lejuAdmin/order/findOrdersByPage/${start}/${limit}`,
    method: 'post',
    data
  })
}
// 关闭订单 header:token
function finishOrder(orderId) {
  return request({
    url: `/lejuAdmin/order/finishOrder/${orderId}`,
    method: 'post'
  })
}
// 查询订单明细 header:token data:map
function orderDetail(orderId) {
  return request({
    url: `/lejuAdmin/order/orderDetail/${orderId}`
  })
}
// 强制确认收货 header:token
function receiveProductsForce(orderId) {
  return request({
    url: `/lejuAdmin/order/receiveProductsForce/${orderId}`,
    method: 'post',
  })
}
// 确认发货 header:token data:map:orderId,deliverySn,deliveryCompany
function sendDone(data) {
  return request({
    url: `/lejuAdmin/order/sendDone`,
    method: 'post',
    data
  })
}

export {
  findOrdersByPage,
  finishOrder,
  orderDetail,
  receiveProductsForce,
  sendDone
}
