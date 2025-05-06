// 请求方法类型
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

// 请求配置类型
export interface RequestConfig {
  url: string
  method?: RequestMethod
  data?: any
  params?: any
  headers?: Record<string, string>
}

// 响应数据类型
export interface ResponseData<T = any> {
  code: number
  message: string
  data: T
}

// 分页请求参数
export interface PaginationParams {
  page: number
  pageSize: number
}

// 分页响应数据
export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
