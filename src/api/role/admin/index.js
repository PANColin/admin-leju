import request from '@/api/request'

// 查询所有角色
function findAllRoles() {
  return request({
    url: '/admin/sysAuth/role/findAllRoles'
  })
}
// 获取角色明细
function findRolePermissions(id) {
  return request({
    url: `/admin/sysAuth/role/findRolePermissions/${id}`
  })
}
// 获取角色分页列表
function findRolesByPage(start, limit) {
  return request({
    url: `/admin/sysAuth/role/findRolesByPage/${start}/${limit}`
  })
}
// 删除角色
function removeRole(id) {
  return request({
    url: `/admin/sysAuth/role/removeRole/${id}`,
    method: 'delete'
  })
}
// 新增角色
function saveRolePermissions(data) {
  return request({
    url: `/admin/sysAuth/role/saveRolePermissions`,
    method: 'POST',
    data
  })
}
// 修改角色和权限
function updateRolePermissions(data) {
  return request({
    url: `/admin/sysAuth/role/updateRolePermissions`,
    method: 'PUT',
    data
  })
}

export {
  findAllRoles,
  findRolePermissions,
  findRolesByPage,
  removeRole,
  saveRolePermissions,
  updateRolePermissions
}
