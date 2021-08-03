import request from '@/api/request'

// 添加分类 header:token data:category对象
function addCategory(data) {
  return request({
    url: `/lejuAdmin/category/addCategory`,
    method: 'post',
    data
  })
}
// 删除分类 header:token 删除一级分类的前提是先删除所有二级分类
function delCategory(id) {
  return request({
    url: `/lejuAdmin/category/delCategory/${id}`,
    method: 'delete'
  })
}
// 查询所有一二级分类 header:token
function getAllCategory(orderId) {
  return request({
    url: `/lejuAdmin/category/getAllCategory`
  })
}
// 更新分类 header:token data:category对象
function updateCategory(data) {
  return request({
    url: `/lejuAdmin/category/updateCategory`,
    method: 'post',
    data
  })
}

export { addCategory, delCategory, getAllCategory, updateCategory }
