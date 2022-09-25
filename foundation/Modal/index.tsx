import styled from '@emotion/styled'
import React, { useEffect } from 'react'

import pxToRem from '../../utils/pxToRem'
import Backdrop, { BACKDROP_Z_INDEX } from './Backdrop'

export interface ModalProps {
  isOpen: boolean
  children: React.ReactNode
  onClose?: () => void
  contentStyle?: React.CSSProperties
}

const Modal = ({ isOpen, children, onClose, contentStyle }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) onClose?.()
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <Container style={contentStyle}>{children}</Container>
    </>
  )
}

const Container = styled.div`
  z-index: ${BACKDROP_Z_INDEX + 100};
  max-width: ${pxToRem(472)}rem;
`

export default Modal
