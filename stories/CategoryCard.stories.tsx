import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import CategoryCard from '../components/CategoryCard'

export default {
  title: 'Category Card',
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>

const Template: ComponentStory<typeof CategoryCard> = (args) => (
  <CategoryCard {...args} />
)

// ๐ฒ๐โญ๏ธ๐น๏ธ๐๐๐จ
export const not_started = Template.bind({})
not_started.args = {
  variant: 'notStarted',
  title: '๐ UX ์ ๋ต ์ค๊ณ ์ญ๋',
  description:
    'ํ๋ก๋ํธ์ ๋ฐฉํฅ์ฑ์ ๋ง๋ UX ์ ๋ต์ ์ค๊ณํ๊ณ  ์ด์ ๋ง๋ User Flow ๋ฐ IA, ํ๋ฉด ๊ตฌ์กฐ๋ฅผ ์ค๊ณํฉ๋๋ค.',
  skillSet: ['UID', 'UXD', 'BXD', 'GRD'],
}

export const not_started_all = Template.bind({})
not_started_all.args = {
  variant: 'notStarted',
  title: '๐ฒ ์์ด์ดํ๋ ์ ์ ์ ๋ฅ๋ ฅ',
  description:
    '์ฌ์ฉ์์ ๋ฐ์ดํฐ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋ค์ํ ์ ๋/์ ์ฑ์ ์ธ ์ ๊ทผ ๋ฐฉ์์ ํ์ฉํ์ฌ ์ ์๋ฏธํ ์ธ์ฌ์ดํธ๋ฅผ ๋์ถํฉ๋๋ค.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD'],
}

export const in_progress = Template.bind({})
in_progress.args = {
  variant: 'inProgress',
  title: '๐ ์ํํ ํ์ ์ญ๋',
  description:
    '๊ฐ๋ฐ ๋ฐ ๋์์ธ ๋ฑ ๋ค์ํ ๋ถ์ผ์ ์ดํด๋๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํ์ ๋ฐ ํ ๋ถ์์ ์ํํ๊ฒ ์ปค๋ฎค๋์ผ์ด์ํ๋ฉฐ ๋ชจ๋๊ฐ ๊ฐ์ ์งํฅ์ ์ ๋ฐ๋ผ๋ณผ ์ ์๋๋ก ๋์ต๋๋ค.',
  skillSet: ['UXR'],
  missionsDone: 3,
  numOfMissions: 5,
}

export const in_progress_all = Template.bind({})
in_progress_all.args = {
  variant: 'inProgress',
  title: '๐จ ์ต์  ๋์์ธ ํธ๋ ๋ ๋ถ์ ์ญ๋',
  description:
    '์ต์  ๋์์ธ ๋ฐ ์ฐ์ ํธ๋ ๋๋ฅผ ๋น ๋ฅด๊ฒ ํ์ํ๊ณ  ์ด๋ฅผ ์ ์ ํ๊ฒ ํ์ํ์ฌ ๋์์ธ์ ๋ฐ์ํฉ๋๋ค.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD'],
  missionsDone: 1,
  numOfMissions: 7,
}

export const done = Template.bind({})
done.args = {
  variant: 'done',
  title: '๐ ๋ธ๋๋ ์ ๋ต ๊ตฌ์ถ ์ญ๋',
  description:
    '๋ชจ๋ฐ์ผ/์น ๋ฑ ๋์งํธ ํ๋ซํผ์ ๋ํ ์ดํด๋์ ์ฐ์์ ๋ํ ์ดํด๋๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋ธ๋๋ฉ ์ ๋ต์ ๊ตฌ์ถํ๊ณ  ๊ฐ์ ํฉ๋๋ค.',
  skillSet: ['BXD'],
  missionsDone: 3,
  numOfMissions: 3,
}

export const done_all = Template.bind({})
done_all.args = {
  variant: 'done',
  title: '๐ฒ UX ๊ฐ์ด๋๋ผ์ธ ์ ์ ์ญ๋',
  description:
    '์ฌ์ฉ์์๊ฒ ์ผ๊ด๋ ์ฌ์ฉ ๊ฒฝํ์ ์ ๊ณตํ๊ธฐ ์ํด ์์ฌ ์๋น์ค๋ง์ UX ์์น๊ณผ ์ ๋ต์ ์ ์ํ์ฌ ๊ฐ์ด๋๋ผ์ธ์ ์ค๊ณํฉ๋๋ค.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD', 'UXR'],
  missionsDone: 6,
  numOfMissions: 6,
}
