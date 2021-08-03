import request from '@/api/request'

// 添加商品信息 header:token data:productAndSkusVo
function addProductAndSkus(data) {
  return request({
    url: `/lejuAdmin/product/addProductAndSkus`,
    method: 'post',
    data
  })
}
// 删除商品信息 header:token 商品删除,会删除关联的sku,同时会影响购物车.
function del(productId) {
  return request({
    url: `/lejuAdmin/product/del/${productId}`,
    method: 'delete'
  })
}
// 查询商品明细，用于编辑 header:token
function productSkusDetail(productId) {
  return request({
    url: `/lejuAdmin/product/productSkusDetail/${productId}`
  })
}
// 强制确认收货 header:token data:productQueryVo(可选)
function productsByPage(start, limit, data) {
  return request({
    url: `/lejuAdmin/product/productsByPage/${start}/${limit}`,
    method: 'post',
    data
  })
}
// 更改是否最新 header:token data:statusVo对象 新品状态:0->不是新品；1->新品
function switchNewStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchNewStatus`,
    method: 'post',
    data
  })
}
// 更改是否预告 header:token data:statusVo对象 是否为预告商品：0->不是；1->是
function switchPreviewStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchPreviewStatus`,
    method: 'post',
    data
  })
}
// 更改发布状态 header:token data:statusVo对象 上架状态：0->下架；1->上架
function switchPublishStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchPublishStatus`,
    method: 'post',
    data
  })
}
// 更改是否推荐 header:token data:statusVo对象 推荐状态；0->不推荐；1->推荐
function switchRecommandStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchRecommandStatus`,
    method: 'post',
    data
  })
}
// 更改审核状态 header:token data:statusVo对象 审核状态：0->未审核；1->审核通过
function switchVerifyStatus(data) {
  return request({
    url: `/lejuAdmin/product/switchVerifyStatus`,
    method: 'post',
    data
  })
}
// 更改商品信息 header:token data:productAndSkusVo对象
function updateProductAndSkus(data) {
  return request({
    url: `/lejuAdmin/product/updateProductAndSkus`,
    method: 'post',
    data
  })
}

export {
  addProductAndSkus,
  del,
  productSkusDetail,
  productsByPage,
  switchNewStatus,
  switchPreviewStatus,
  switchPublishStatus,
  switchRecommandStatus,
  switchVerifyStatus,
  updateProductAndSkus
}
