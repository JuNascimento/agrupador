import styled from 'styled-components'

export const GroupsListContent = styled.section`
  padding: 15px;
`

export const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

export const List = styled.ul`
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
`