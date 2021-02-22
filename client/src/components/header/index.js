import React from 'react'

import { HeaderContent, Logo } from './index.styles'

const Header = () => (
  <HeaderContent>
    <Logo pt2={false}>AGRUPA<Logo pt2={true}>DOR</Logo></Logo>
  </HeaderContent>
)

export default Header