import request from '@/api/request'

// 新增文章 data:ProductArticle对象
function addArticle(data) {
  return request({
    url: `/lejuAdmin/productArticle/addArticle`,
    method: 'post',
    data
  })
}

// 更新文章显示状态 data:statusJson 文章显示状态:0 隐藏; 1 显示
function changeShowStatus(data) {
  return request({
    url: `/lejuAdmin/productArticle/changeShowStatus`,
    method: 'post',
    data
  })
}
// 删除文章
function del(id) {
  return request({
    url: `/lejuAdmin/productArticle/del/${id}`,
    method: 'delete'
  })
}
// 文章明细
function productArticle(id) {
  return request({
    url: `/lejuAdmin/productArticle/productArticle/${id}`
  })
}
// 查找文章列表 data:ProductArticle对象(可选) 查询
function findArticles(start, limit, data) {
  return request({
    url: `/lejuAdmin/productArticle/findArticles/${start}/${limit}`,
    method: 'post',
    data
  })
}

// 更改文章  data:ProductArticle对象
function updateArticle(data) {
  return request({
    url: `/lejuAdmin/productArticle/updateArticle`,
    method: 'post',
    data
  })
}

export {
  addArticle,
  changeShowStatus,
  del,
  productArticle,
  findArticles,
  updateArticle
}
