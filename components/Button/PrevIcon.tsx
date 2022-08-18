import React from 'react'

import { ColorToken } from '../Palette'

interface Props {
  color: ColorToken
}

const NextIcon = ({ color }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.32843 12L15.1066 19.7782L13.6924 21.1924L4.5 12L13.6924 2.80762L15.1066 4.22183L7.32843 12Z"
        fill={color}
      />
    </svg>
  )
}

export default NextIcon
