import React from 'react'

import { LoadingContent, Container, Label, Spinner } from './index.styles'

const Loading = () => (
  <LoadingContent>
    <Container>
      <Label>Obtendo localização...</Label>
      <Spinner />
    </Container>
  </LoadingContent>
)

export default Loading