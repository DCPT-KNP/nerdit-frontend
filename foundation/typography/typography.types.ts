import { SerializedStyles } from '@emotion/react'

/**
 * 텍스트 레벨 대한 타입 정의
 */
export type Headline = 'headline'
export type Title1 = 'title1'
export type Title2 = 'title2'
export type Title3 = 'title3'

export type SubTitle1 = 'subtitle1'
export type SubTitle2 = 'subtitle2'

export type Body1 = 'body1'
export type Body2 = 'body2'
export type Body3 = 'body3'
export type Caption = 'caption'

export type SubHeadline = 'subheadline'
export type Label1 = 'label1'
export type Label2 = 'label2'

export type TypographyTypeKey =
  | Body1
  | Body2
  | Body3
  | Headline
  | Label1
  | Label2
  | SubHeadline
  | SubTitle1
  | SubTitle2
  | Title1
  | Title2
  | Title3
  | Caption

export type TypographyType = Record<TypographyTypeKey, SerializedStyles>
