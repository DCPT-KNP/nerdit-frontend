import styled from '@emotion/styled'
import React from 'react'

import Icon from '../../components/Icon'
import palette from '../palette'
import Spacing from '../Spacing'
import BaseModal, { BaseModalProps } from './BaseModal'

interface ModalProps extends BaseModalProps {
  hasCloseButton?: boolean
}

const Modal = ({ children, hasCloseButton, ...rest }: ModalProps) => {
  return (
    <StyledModal hasCloseButton={hasCloseButton} {...rest}>
      {hasCloseButton && <StyledIcon icon="close" onClick={rest.onClose} />}
      {hasCloseButton && <Spacing rem={2} />}
      {children}
    </StyledModal>
  )
}

const StyledModal = styled(BaseModal)<{ hasCloseButton?: boolean }>`
  background-color: ${palette.Base.White};
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

export default Modal
