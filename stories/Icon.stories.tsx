import { ComponentMeta } from '@storybook/react'
import React, { useCallback } from 'react'

import Icon, { iconImageMap, IconType } from '../foundation/Icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

export const Icons = () => {
  const copyNameToClipboard = useCallback(async (name: string) => {
    await window.navigator.clipboard.writeText(name)
    alert(`아이콘 이름(${name})을 클립보드에 복사했습니다!`)
  }, [])

  return (
    <div>
      아이콘에 마우스를 올리면 아이콘 이름을 볼 수 있습니다.
      <br />
      아이콘을 클릭하면 아이콘 이름을 클립보드에 복사합니다.
      <br />
      {(Object.keys(iconImageMap) as IconType[]).map((icon, i) => {
        return (
          <span key={i} title={icon} onClick={() => copyNameToClipboard(icon)}>
            <Icon icon={icon} />
          </span>
        )
      })}
    </div>
  )
}
