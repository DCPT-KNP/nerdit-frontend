import styled from '@emotion/styled'
import React, { HTMLAttributes } from 'react'

import pxToRem from '../../utils/pxToRem'
import arrowDownImage from './images/arrow_down.svg'
import arrowLeftImage from './images/arrow_left.svg'
import arrowRightImage from './images/arrow_right.svg'
import arrowUpImage from './images/arrow_up.svg'
import checkImage from './images/check.svg'
import closeImage from './images/close.svg'
import deleteImage from './images/delete.svg'
import editImage from './images/edit.svg'
import helpImage from './images/help.svg'
import infoImage from './images/info.svg'
import menuImage from './images/menu.svg'
import plusImage from './images/plus.svg'
import resetImage from './images/reset.svg'
import settingImage from './images/setting.svg'

export type IconType =
  | 'setting'
  | 'close'
  | 'check'
  | 'plus'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_down'
  | 'arrow_up'
  | 'delete'
  | 'reset'
  | 'edit'
  | 'info'
  | 'menu'
  | 'help'

export const iconImageMap: Record<IconType, string> = {
  arrow_down: arrowDownImage,
  arrow_left: arrowLeftImage,
  arrow_right: arrowRightImage,
  arrow_up: arrowUpImage,
  check: checkImage,
  close: closeImage,
  delete: deleteImage,
  edit: editImage,
  info: infoImage,
  menu: menuImage,
  plus: plusImage,
  reset: resetImage,
  setting: settingImage,
  help: helpImage,
}

interface IconProps extends HTMLAttributes<HTMLImageElement> {
  icon: IconType
}

const Icon = ({ icon, ...rest }: IconProps) => {
  return <Img src={iconImageMap[icon]} {...rest} />
}

const Img = styled.img`
  width: ${pxToRem(32)}rem;
  height: ${pxToRem(32)}rem;
`

export default Icon
