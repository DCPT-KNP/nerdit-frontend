import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'

import Button from '../components/Button'
import Modal from '../foundation/Modal/Modal'
import Spacing from '../foundation/Spacing'
import Typo from '../foundation/typography'

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

export const Preview = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpen2, setIsOpen2] = useState<boolean>(false)

  return (
    <>
      <Button variant="Filled" onClick={() => setIsOpen(true)}>
        닫기 버튼 없는 모달!
      </Button>
      <Spacing rem={1} />
      <Button variant="Outlined" onClick={() => setIsOpen2(true)}>
        닫기 버튼 있는 모달!
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typo type="header2">I-Shaped Designer</Typo>
        <Spacing rem={1} />
        <Typo type="body2">
          I자형 인재는 한가지 분야에 전문성을 가진 디자이너입니다. 일명
          ‘Specialist’로 다른 분야에 대해 많이 알지 못하지만 특정 분야의 뛰어난
          전문성을 가집니다.
        </Typo>
      </Modal>
      <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)} hasCloseButton>
        <Typo type="header2">I-Shaped Designer</Typo>
        <Spacing rem={1} />
        <Typo type="body2">
          I자형 인재는 한가지 분야에 전문성을 가진 디자이너입니다. 일명
          ‘Specialist’로 다른 분야에 대해 많이 알지 못하지만 특정 분야의 뛰어난
          전문성을 가집니다.
        </Typo>
      </Modal>
    </>
  )
}
