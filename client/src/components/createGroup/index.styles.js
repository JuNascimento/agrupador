import styled from 'styled-components'

export const CreateGroupContent = styled.section`
  padding: 100px 15px;
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  width: 90%;
`

export const Input = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
`

export const InputElement = styled.input`
  &[type="text" i] {
    background-color: rgba(37,211, 102, 0.5);
    border: none;
    width: 100%;
    padding: 5px 0;
    margin-top: 5px;
    border-radius: 5px;
  }
`

export const Create = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 40px;
  padding: 5px 0;
  background-color: #25d366;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 700;
`