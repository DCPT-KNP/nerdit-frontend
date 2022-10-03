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

// 🎲📈⭐️🕹️😈💎🎨
export const not_started = Template.bind({})
not_started.args = {
  variant: 'notStarted',
  title: '📈 UX 전략 설계 역량',
  description:
    '프로덕트의 방향성에 맞는 UX 전략을 설계하고 이에 맞는 User Flow 및 IA, 화면 구조를 설계합니다.',
  skillSet: ['UID', 'UXD', 'BXD', 'GRD'],
}

export const not_started_all = Template.bind({})
not_started_all.args = {
  variant: 'notStarted',
  title: '🎲 와이어프레임 제작 능력',
  description:
    '사용자의 데이터를 기반으로 다양한 정량/정성적인 접근 방식을 활용하여 유의미한 인사이트를 도출합니다.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD'],
}

export const in_progress = Template.bind({})
in_progress.args = {
  variant: 'inProgress',
  title: '💎 원활한 협업 역량',
  description:
    '개발 및 디자인 등 다양한 분야의 이해도를 기반으로 팀원 및 타 부서와 원활하게 커뮤니케이션하며 모두가 같은 지향점을 바라볼 수 있도록 돕습니다.',
  skillSet: ['UXR'],
  missionsDone: 3,
  numOfMissions: 5,
}

export const in_progress_all = Template.bind({})
in_progress_all.args = {
  variant: 'inProgress',
  title: '🎨 최신 디자인 트렌드 분석 역량',
  description:
    '최신 디자인 및 산업 트렌드를 빠르게 파악하고 이를 적절하게 활영하여 디자인에 반영합니다.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD'],
  missionsDone: 1,
  numOfMissions: 7,
}

export const done = Template.bind({})
done.args = {
  variant: 'done',
  title: '💎 브랜드 전략 구축 역량',
  description:
    '모바일/웹 등 디지털 플랫폼에 대한 이해도와 산업에 대한 이해도를 기반으로 브랜딩 전략을 구축하고 개선합니다.',
  skillSet: ['BXD'],
  missionsDone: 3,
  numOfMissions: 3,
}

export const done_all = Template.bind({})
done_all.args = {
  variant: 'done',
  title: '🎲 UX 가이드라인 제작 역량',
  description:
    '사용자에게 일관된 사용 경험을 제공하기 위해 자사 서비스만의 UX 원칙과 전략을 정의하여 가이드라인을 설계합니다.',
  skillSet: ['IXD', 'UID', 'UXD', 'BXD', 'GRD', 'UXR'],
  missionsDone: 6,
  numOfMissions: 6,
}
