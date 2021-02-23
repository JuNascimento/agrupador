import React from 'react'
import PropTypes from 'prop-types'

import { HeaderContent, Logo, Button } from './index.styles'

const Header = ({ createGroup, toggle, showButton }) => {
  const label = createGroup ? 'Ver grupos' : 'Criar grupo'
  
  return (
    <HeaderContent>
      <Logo pt2={false}>AGRUPA<Logo pt2={true}>DOR</Logo></Logo>
      {showButton && <div>
        <Button onClick={() => toggle()}>{label}</Button>
      </div>}
    </HeaderContent>
  )
}

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  createGroup: PropTypes.bool.isRequired,
  showButton: PropTypes.bool.isRequired,
}

export default Header