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

export const Button = styled.span`
  background-color: #25d366;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  @media (min-width: 450px) {
    padding: 15px;
  }
`
