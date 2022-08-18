import { Theme, ThemeProvider } from '@emotion/react'
import React from 'react'

import {
  AppTheme,
  themeGroup,
  ThemeType,
  typography,
  TypographyType,
} from '../foundation'
import { useAppTheme } from '../hooks/useAppTheme'

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    // 텍스트
    typography: TypographyType
  }
}

export const getFoundation = (curTheme: AppTheme) => {
  const foundation: Theme = {
    // 기본 테마
    ...themeGroup[curTheme],
    // 텍스트(폰트크기, 굵기, 행간)
    typography,
  }

  return foundation
}

const useGetAppTheme = () => {
  // light or dark
  const [curTheme] = useAppTheme()

  return getFoundation(curTheme)
}

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = useGetAppTheme()

  return (
    <ThemeProvider theme={theme}>
      {children}
      <div id="_modal"></div>
    </ThemeProvider>
  )
}
