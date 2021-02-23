import React from 'react'
import PropTypes from 'prop-types'

import { GroupContent, Button, Label, Info } from './index.styles'

const GroupItem = ({ group }) => (
  <GroupContent>
    <Info>
      <Label>Nome:</Label>
      <span>{group.name}</span>
    </Info>
    <Info>
      <Label>Descrição:</Label>
      <span>{group.descricao}</span>
    </Info>
    <Button alt={group.link}>Entrar no grupo</Button>
  </GroupContent>
)

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem