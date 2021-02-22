import React from 'react'
import PropTypes from 'prop-types'

import { CreateGroupContent, Form, Input, InputElement, Create } from './index.styles'

const CreateGroup = ({ toggle }) => {
  return (
    <CreateGroupContent>
      <Form>
        <Input>
          <label>Nome</label>
          <InputElement type='text' />
        </Input>
        <Input>
          <label>Descrição</label>
          <InputElement type='text' />
        </Input>
        <Input>
          <label>Link</label>
          <InputElement type='text' />
        </Input>
        <Create>Criar</Create>
      </Form>
    </CreateGroupContent>
  )
}

CreateGroup.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default CreateGroup