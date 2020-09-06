import request from '@/utils/request'

const api_name = '/cms/book'

export default {
  // ## 动态条件查询带分页
  findPageBook(pageNo, pageSize, bookQuery) {
    return request({
      url: `${api_name}/${pageNo}/${pageSize}`,
      method: 'post',
      data: bookQuery
    })
  },
  // ## 添加书籍
  saveBook(book) {
    return request({
      url: `${api_name}/saveBook`,
      method: 'post',
      data: book
    })
  },
  // ## 回显
  getBookById(bookId) {
    return request({
      url: `${api_name}/getBookById/${bookId}`, // ${api_name}/{bookId}
      method: 'get'
    })
  },
  // ## 修改书籍
  updateBook(book) {
    return request({
      url: `${api_name}/updateBook`,
      method: 'put',
      data: book
    })
  },
  // ## 删除书籍
  deleteByBookId(bookId) {
    return request({
      url: `${api_name}/deleteById/${bookId}`,
      method: 'delete'
    })
  },
  upOrDownBook(bookId, status) {
    return request({
      url: `${api_name}/${bookId}/${status}`,
      method: 'put'
    })
  }
}
