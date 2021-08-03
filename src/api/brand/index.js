import request from '@/api/request'

// 添加品牌 header:token data:PmsBrand对象
function addBrand(data) {
  return request({
    url: `/lejuAdmin/brand/addBrand`,
    method: 'post',
    data
  })
}
// 删除品牌 header:token
function delBrand(id) {
  return request({
    url: `/lejuAdmin/brand/delBrand/${id}`,
    method: 'delete'
  })
}
// 品牌列表 header:token
function findAllBrand() {
  return request({
    url: `/lejuAdmin/brand/findAllBrand`
  })
}
// 品牌列表分页 header:token
function findBrandByPage(start, limit) {
  return request({
    url: `/lejuAdmin/brand/findBrandByPage/${start}/${limit}`
  })
}
// 显示隐藏 header:token data:map:id,status     是否展示: 0-> 否 , 1-> 是
function switchShowStatus(data) {
  return request({
    url: `/lejuAdmin/brand/switchShowStatus`,
    method: 'post',
    data
  })
}
// 更新品牌  header:token data:PmsBrand对象
function updateBrand(data) {
  return request({
    url: `/lejuAdmin/brand/updateBrand`,
    method: 'post',
    data
  })
}

export {
  addBrand,
  delBrand,
  findAllBrand,
  findBrandByPage,
  switchShowStatus,
  updateBrand
}
