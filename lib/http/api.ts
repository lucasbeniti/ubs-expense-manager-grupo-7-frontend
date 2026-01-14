import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'))
    const token = match ? match[2] : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})
