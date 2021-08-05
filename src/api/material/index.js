import request from '@/api/request'

// 查询素材列表
function findMaterialByPage(start, limit) {
  return request({
    url: ` /lejuAdmin/material/findMaterialByPage/${start}/${limit}`
  })
}
// 通用素材上传接口
function uploadFileOss(data) {
  return request({
    url: `/lejuAdmin/material/uploadFileOss`,
    method: 'post',
    data
  })
}
// 素材上传接口 保存到数据库
function uploadFileOssSave(data) {
  return request({
    url: `/lejuAdmin/material/uploadFileOssSave`,
    method: 'put',
    data
  })
}
// 删除素材文件
function delMaterial(id) {
  return request({
    url: `/lejuAdmin/material/delMaterial/${id}`,
    method: 'delete'
  })
}

export { findMaterialByPage, uploadFileOss, uploadFileOssSave, delMaterial }
