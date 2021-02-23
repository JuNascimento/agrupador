import styled from 'styled-components'

export const HeaderContent = styled.header`
  background-color: rgba(18, 140, 126, 1);
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.span`
  font-size: 25px;
  color: ${p => p.pt2 ? `rgba(255, 0, 0, 1)` : `rgba(0, 0, 0, 1)`};

  @media (min-width: 450px) {
    font-size: 50px;
  }
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
