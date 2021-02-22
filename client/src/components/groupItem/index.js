import React from 'react'
import PropTypes from 'prop-types'

import { GroupContent, LinkGroup, Label, Info } from './index.styles'

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
    <LinkGroup alt={group.link}>Entrar no grupo</LinkGroup>
  </GroupContent>
)

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupItem