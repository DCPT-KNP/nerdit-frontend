import { useCallback, useEffect, useState } from 'react'

import { AppTheme } from '../foundation'
/**
 * 테마 정보를 가져오는 Hook
 * @returns 최종 테마 정보
 */
export const useAppTheme = (): [typeof curTheme, typeof toggleTheme] => {
  /**
   * 초기 테마 정보를 가져오는 함수.
   */
  const getInitialTheme = useCallback(() => {
    // 로컬스토리지 테마정보
    let loTheme = window.localStorage.getItem('theme') as AppTheme

    // light, dark가 아니면 invalid
    const INVALID_THEME = loTheme !== 'light' && loTheme !== 'dark'

    if (!loTheme || INVALID_THEME) {
      // 값을 저장하고 있는 값이 없다면 os 다크모드 확인
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
      loTheme = matches ? 'dark' : 'light'
    }

    // 최초 로컬 테마정보
    return loTheme
  }, [])

  /**
   * 현재 태마
   */
  const [curTheme, setCurTheme] = useState<AppTheme>('light')

  /**
   * 테마 토클함수
   */
  const toggleTheme = useCallback(() => {
    setCurTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])

  /**
   * 초기테마 설정
   */
  useEffect(() => {
    setCurTheme(getInitialTheme())
  }, [getInitialTheme])

  /**
   * 테마가 변할때마다 로컬스토리지에 저장
   */
  useEffect(() => {
    window.localStorage.setItem('theme', curTheme)
  }, [curTheme])

  return [curTheme as AppTheme, toggleTheme]
}
