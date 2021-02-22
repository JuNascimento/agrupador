import React from 'react'

import { CreateGroupContent, Form, Input, InputElement, Create } from './index.styles'

const CreateGroup = () => {
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

export default CreateGroup