import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, ResponseData } from '../types/api'

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在这里可以添加 token 等认证信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    const { data } = response
    // 根据业务状态码处理
    if (data.code === 200) {
      return response
    } else {
      // 处理业务错误
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error) => {
    // 处理 HTTP 错误
    const message = error.response?.data?.message || error.message
    return Promise.reject(new Error(message))
  },
)

// 封装请求方法
export const request = <T = any>(config: RequestConfig): Promise<ResponseData<T>> => {
  return service
    .request({
      url: config.url,
      method: config.method || 'GET',
      data: config.data,
      params: config.params,
      headers: config.headers,
    })
    .then((response) => response.data)
}

// 封装常用请求方法
export const get = <T = any>(url: string, params?: any) => {
  return request<T>({ url, method: 'GET', params })
}

export const post = <T = any>(url: string, data?: any) => {
  return request<T>({ url, method: 'POST', data })
}

export const put = <T = any>(url: string, data?: any) => {
  return request<T>({ url, method: 'PUT', data })
}

export const del = <T = any>(url: string, params?: any) => {
  return request<T>({ url, method: 'DELETE', params })
}

export default service
