import styled from 'styled-components'

const Form = styled.form`
  background: rgba(255,255,255,0.3);
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Form