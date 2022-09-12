import { CSSProperties, HTMLAttributes, ReactNode } from 'react'

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  flexDirection?: CSSProperties['flexDirection']
}

const Flex = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
  ...rest
}: FlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexDirection,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Flex
