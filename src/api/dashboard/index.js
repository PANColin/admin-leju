import request from '@/api/request'

// 统计数据 header:token
function baseData(start, limit) {
  return request({
    url: `/lejuAdmin/dashboard/baseData`
  })
}

export { baseData }
