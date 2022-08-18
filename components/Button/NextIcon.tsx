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
        d="M16.7782 12L9 4.22183L10.4142 2.80762L19.6066 12L10.4142 21.1924L9 19.7782L16.7782 12Z"
        fill={color}
      />
    </svg>
  )
}

export default NextIcon
