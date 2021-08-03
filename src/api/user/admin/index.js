import request from '@/api/request'

// 获取初始化用户菜单及权限
function getInitMenus() {
  return request({
    url: '/admin/sysAuth/index/getInitMenus'
  })
}

// 获取管理用户分页列表
function findUsersByPage(start, limit, data) {
  return request({
    url: `/admin/sysAuth/user/findUsersByPage/${start}/${limit}`,
    method: 'post',
    data
  })
}
// 删除管理用户
function removeUser(id) {
  return request({
    url: `/admin/sysAuth/user/removeUser/${id}`,
    method: 'delete'
  })
}
// 新增用户
function saveUserRoles(data) {
  return request({
    url: `/admin/sysAuth/user/saveUserRoles`,
    method: 'post',
    data
  })
}
// 更新用户
function updateUserRoles(data) {
  return request({
    url: `/admin/sysAuth/user/updateUserRoles`,
    method: 'put',
    data
  })
}
// 获取用户明细
function user(id) {
  return request({
    url: `/admin/sysAuth/user/${id}`
  })
}

export {
  getInitMenus,
  findUsersByPage,
  removeUser,
  saveUserRoles,
  updateUserRoles,
  user
}
