import request from '@/api/request'

// 新增广告 header:token data:SmsHomeAdvertise对象
function addAds(data) {
  return request({
    url: `/lejuAdmin/advertise/addAds`,
    method: 'post',
    data
  })
}
// 删除广告 header:token
function delAds(adsId) {
  return request({
    url: `/lejuAdmin/advertise/delAds/${adsId}`,
    method: 'delete'
  })
}
// 查询广告列表 header:token
function adsList() {
  return request({
    url: `/lejuAdmin/advertise/adsList`
  })
}
// 更新分类 header:token data:SmsHomeAdvertise对象
function updateAds(data) {
  return request({
    url: `/lejuAdmin/advertise/updateAds`,
    method: 'post',
    data
  })
}

export { addAds, delAds, adsList, updateAds }
