import styled from '@emotion/styled'
import React, { useCallback, useEffect } from 'react'

export const BACKDROP_Z_INDEX = 1000

interface Props {
  onClick?: () => void
  isOpen: boolean
}

const Backdrop = ({ isOpen, onClick }: Props) => {
  useEffect(() => {
    // 스크롤 비활성화
    const bodyPrevStyle = document.body.style.overflowY
    document.body.style.overflowY = 'hidden'

    return () => {
      // 스크롤 비활성화 해제
      document.body.style.overflowY = bodyPrevStyle
    }
  }, [])

  const handleClick = useCallback(() => {
    onClick?.()
  }, [onClick])

  if (!isOpen) return null

  return <Container onClick={handleClick} />
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${BACKDROP_Z_INDEX};
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.125rem);
`

export default Backdrop
