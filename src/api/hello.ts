import { get } from '@/utils/request'

export const getHello = () => {
  return get('/api/hello')
}
