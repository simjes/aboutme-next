import cn from 'classnames'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Main = ({ children, className }: Props) => {
  return (
    <main
      className={cn(
        'flex-grow flex-shrink-0 w-full max-w-6xl mx-auto',
        className,
      )}
    >
      {children}
    </main>
  )
}

export default Main
