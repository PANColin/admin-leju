import request from '@/api/request'

// 登录接口
function login(data) {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'POST',
    data
  })
}
// 退出登录
function logout() {
  return request({
    url: '/admin/sysAuth/index/logout',
    method: 'post'
  })
}
// 查询用户注册信息列表
function findMembersByPage(start, limit) {
  return request({
    url: `/lejuAdmin/member/findMembersByPage/${start}/${limit}`,
    method: 'get'
  })
}

export { login, logout, findMembersByPage }
