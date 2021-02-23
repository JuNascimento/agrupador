import styled from 'styled-components'

export const CreateGroupContent = styled.section`
  padding: 100px 15px;
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  width: 90%;
  max-width: 450px;
`

export const Input = styled.div`
  margin-bottom: 10px;
  font-weight: 700;

  &:nth-last-child(2) {
    margin-bottom: 50px
  }
`

export const InputElement = styled.input`
  &[type="text" i] {
    background-color: rgba(37, 211, 102, 0.5);
    border: none;
    width: 100%;
    padding: 5px 0;
    margin-top: 5px;
    border-radius: 5px;
  }

  &:focus {
    outline: none;
  
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