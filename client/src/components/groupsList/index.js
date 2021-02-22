import React from 'react'
import PropTypes from 'prop-types'
import GroupItem from '../groupItem'

import { GroupsListContent, Label, List } from './index.styles'

const GroupsList = ({ groups }) => {
  return (
    <GroupsListContent>
      <Label>Grupos próximos a você</Label>
      <List>
        {
          groups.map((item, index) => {
            return (
              <li><GroupItem group={item} /></li>
            )
          })
        }
      </List>
    </GroupsListContent>
  )
}

GroupsList.propTypes = {
  groups: PropTypes.array.isRequired,
}

export default GroupsList