import styled from 'styled-components' 

export const GroupContent = styled.article`
  border: 2px solid rgba(7, 94, 84, 1);
  margin: 0 10px 20px 10px;
  padding: 10px;
`

export const Info = styled.div`
  padding: 5px;

  &:nth-last-child(2) {
    margin-bottom: 20px
  }
`

export const Label = styled.span`
  font-weight: 700;
  margin-right: 5px;
`

export const Button = styled.div`
  background-color: rgba(37, 211, 102, 1);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  width: 130px;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 15px;
  }
`
