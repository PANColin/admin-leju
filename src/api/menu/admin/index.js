import request from '@/api/request'

// 查询所有菜单
function findAllPermissions() {
  return request({
    url: '/admin/sysAuth/permission/findAllPermissions'
  })
}
// 初始化菜单权限 data:permissionList
function saveInitMenus(data) {
  return request({
    url: `/admin/sysAuth/permission/saveInitMenus`,
    method: 'post',
    data
  })
}
// 修改菜单权限 data:permission
function update(data) {
  return request({
    url: `/admin/sysAuth/permission/update`,
    method: 'put',
    data
  })
}
// 删除菜单权限
function remove(id) {
  return request({
    url: `/admin/sysAuth/permission/remove/${id}`,
    method: 'delete'
  })
}
// 新增菜单权限 data:permission
function save(data) {
  return request({
    url: `/admin/sysAuth/permission/save`,
    method: 'POST',
    data
  })
}

export { findAllPermissions, saveInitMenus, update, remove, save }
