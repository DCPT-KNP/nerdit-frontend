import axios from 'axios'
import { useEffect, useState } from 'react'

import { StyledTest } from './Test.styled'
export const testUrl = 'https://jsonplaceholder.typicode.com'

export const httpClient = axios.create({
  baseURL: testUrl,
})

export const Test = () => {
  const [userData, setUserData] = useState<Array<any>>()

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

  return (
    <div>
      <StyledTest>
        hi
        {userData?.map(({ id, username }) => {
          return <div key={id}>{username}</div>
        })}
      </StyledTest>
    </div>
  )
}
