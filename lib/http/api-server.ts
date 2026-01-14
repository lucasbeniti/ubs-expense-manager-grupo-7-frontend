import axios from 'axios'
import { cookies } from 'next/headers'

export const apiServer = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
}
