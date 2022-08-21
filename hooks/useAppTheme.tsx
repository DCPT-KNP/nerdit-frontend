import { useCallback, useEffect, useState } from 'react'

import { AppTheme } from '../foundation'

const getInitialTheme = () => {
  // 로컬스토리지 테마정보
  let localTheme = window.localStorage.getItem('theme') as AppTheme

  // light, dark가 아니면 invalid
  const INVALID_THEME = localTheme !== 'light' && localTheme !== 'dark'

  if (INVALID_THEME) {
    // 값을 저장하고 있는 값이 없다면 os 다크모드 확인
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    localTheme = matches ? 'dark' : 'light'
  }

  // 최초 로컬 테마정보
  return localTheme
}
/**
 * 테마 정보를 가져오는 Hook
 * @returns 최종 테마 정보
 */
export const useAppTheme = (): [typeof currentTheme, typeof toggleTheme] => {
  /**
   * 초기 테마 정보를 가져오는 함수.
   */
  const getCallbackInitialTheme = useCallback(() => getInitialTheme(), [])

  /**
   * 현재 태마
   */
  const [currentTheme, setCurrentTheme] = useState<AppTheme>('light')

  /**
   * 테마 토클함수
   */
  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])

  /**
   * 테마가 변할때마다 로컬스토리지에 저장
   */
  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  /**
   * 초기테마 설정
   */
  // TODO: useLayoutEffect로 수정하기!
  useEffect(() => {
    setCurrentTheme(getCallbackInitialTheme())
  }, [getCallbackInitialTheme])

  return [currentTheme as AppTheme, toggleTheme]
}
