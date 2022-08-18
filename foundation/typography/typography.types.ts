import { SerializedStyles } from '@emotion/react'

import {
  Body1,
  Body2,
  Body3,
  Caption,
  Headline,
  Label1,
  Label2,
  SubHeadline,
  SubTitle1,
  SubTitle2,
  Title1,
  Title2,
  Title3,
} from '../../types/textLevel.types'

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
