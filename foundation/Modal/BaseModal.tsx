import styled from '@emotion/styled'
import React, { useEffect } from 'react'

import Backdrop, { BACKDROP_Z_INDEX } from './Backdrop'

export interface BaseModalProps {
  isOpen: boolean
  children: React.ReactNode
  onClose?: () => void
  containerStyle?: React.CSSProperties
  className?: string
  closeOnBackdropClick?: boolean
}

const BaseModal = ({
  isOpen,
  children,
  onClose,
  containerStyle,
  className,
  closeOnBackdropClick = true,
}: BaseModalProps) => {
  useEffect(() => {
    if (!isOpen) onClose?.()
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={closeOnBackdropClick ? onClose : undefined}
      />
      <Container style={containerStyle} className={className}>
        {children}
      </Container>
    </>
  )
}

const Container = styled.div`
  z-index: ${BACKDROP_Z_INDEX + 100};
  box-sizing: border-box;
  width: calc(100vw - 48px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
`

export default BaseModal
