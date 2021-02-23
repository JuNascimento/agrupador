import styled from 'styled-components'

export const LoadingContent = styled.section`
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: block;
`

export const Label = styled.div`
  margin-bottom: 40px;
  font-weight: 700;
`

export const Spinner = styled.div`
  border: 5px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  border-left-color: rgba(37, 211, 102, 1);
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`