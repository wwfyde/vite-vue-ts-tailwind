import { get, post, put, del } from '../utils/request'
import type { PaginationParams, PaginationResponse } from '../types/api'

// 用户信息接口
export interface User {
  id: number
  username: string
  email: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

// 登录请求参数
export interface LoginParams {
  username: string
  password: string
}

// 登录响应数据
export interface LoginResponse {
  token: string
  user: User
}

// 用户列表请求参数
export interface UserListParams extends PaginationParams {
  keyword?: string
}

// 用户列表响应数据
export type UserListResponse = PaginationResponse<User>

// 用户 API
export const userApi = {
  // 登录
  login: (data: LoginParams) => {
    return post<LoginResponse>('/auth/login', data)
  },

  // 获取用户信息
  getUserInfo: () => {
    return get<User>('/user/info')
  },

  // 获取用户列表
  getUserList: (params: UserListParams) => {
    return get<UserListResponse>('/user/list', params)
  },

  // 创建用户
  createUser: (data: Partial<User>) => {
    return post<User>('/user/create', data)
  },

  // 更新用户
  updateUser: (id: number, data: Partial<User>) => {
    return put<User>(`/user/${id}`, data)
  },

  // 删除用户
  deleteUser: (id: number) => {
    return del<void>(`/user/${id}`)
  },
}
