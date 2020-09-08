import request from '@/utils/request'

const api_name = '/cms/copyright'

export default {
  // ## 动态条件查询带分页
  findPageCopyright(pageNo, pageSize, CopyrightQuery) {
    return request({
      url: `${api_name}/${pageNo}/${pageSize}`,
      method: `post`,
      data: CopyrightQuery
    })
  }
}
