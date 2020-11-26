import React from 'react'
import { Bth } from './Style'

type Props = {
  onClick(): void
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <Bth onClick={onClick}>{children}</Bth>
}

export default Button
