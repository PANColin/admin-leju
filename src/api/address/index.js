import request from '@/api/request'

// 地址列表 header:token
function addressList() {
  return request({
    url: '/lejuAdmin/companyAddress/addressList'
  })
}
// 新增地址 header:token data:address对象
function save(data) {
  return request({
    url: '/lejuAdmin/companyAddress/save',
    method: 'post',
    data
  })
}
// 设置收货默认 header:token data:map
function setReceiveOne() {
  return request({
    url: `/lejuAdmin/companyAddress/setReceiveOne`,
    method: 'post',
    data
  })
}
// 设置发货默认 header:token data:map 默认发货地址：0->否；1->是
function setSendOne() {
  return request({
    url: `/lejuAdmin/companyAddress/setSendOne`,
    method: 'post',
    data
  })
}
// 更新收货地址 header:token data:address对象
function update() {
  return request({
    url: `/lejuAdmin/companyAddress/update`,
    method: 'post',
    data
  })
}
// 删除收货地址 header:token
function deleteAddress(id) {
  return request({
    url: `/lejuAdmin/companyAddress/${id}`,
    method: 'delete'
  })
}
// 地址明细 header:token
function addressDetail(id) {
  return request({
    url: `/lejuAdmin/companyAddress/${id}`
  })
}

export {
  addressList,
  save,
  setReceiveOne,
  setSendOne,
  update,
  deleteAddress,
  addressDetail
}
