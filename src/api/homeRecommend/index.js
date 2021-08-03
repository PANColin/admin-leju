import request from '@/api/request'

// 添加限时活动 data:RecommendVo对象
function addRecommend(data) {
  return request({
    url: `/lejuAdmin/homeRecommend/addRecommend`,
    method: 'post',
    data
  })
}
// 删除限时活动 data:RecommendVo对象
function delRecommend(datrecommendIda) {
  return request({
    url: `/lejuAdmin/homeRecommend/delRecommend/${recommendId}`,
    method: 'delete'
  })
}
// 活动列表
function findAllRecommends() {
  return request({
    url: `/lejuAdmin/homeRecommend/findAllRecommends`
  })
}
// 修改限时活动 data:RecommendVo对象
function updateRecommend(data) {
  return request({
    url: `/lejuAdmin/homeRecommend/updateRecommend`,
    method: 'post',
    data
  })
}
// 活动明细
function homeRecommend(recommendId) {
  return request({
    url: `/lejuAdmin/homeRecommend/${recommendId}`
  })
}

export {
  addRecommend,
  delRecommend,
  findAllRecommends,
  updateRecommend,
  homeRecommend
}
