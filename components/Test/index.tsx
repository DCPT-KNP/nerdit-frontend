import axios from 'axios'
import { useEffect, useState } from 'react'

export const testUrl = 'https://jsonplaceholder.typicode.com'

export const httpClient = axios.create({
  baseURL: testUrl,
})

export const Test = () => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = (await httpClient.get('/users')).data
      console.log(response)

      setUserData(response)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('userData::', userData)
  }, [userData])

  return <div>hi</div>
}
