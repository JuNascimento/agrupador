import styled from 'styled-components'

export const HeaderContent = styled.header`
  background-color: #128c7e;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.span`
  font-size: 25px;
  color: ${p => p.pt2 ? `red` : `#000`};

  @media (min-width: 450px) {
    font-size: 50px;
  }
`

