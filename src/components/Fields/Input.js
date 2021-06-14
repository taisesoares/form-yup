import styled from 'styled-components'

const Input = styled.input`
  background: transparent;
  width: 200px;
  padding: 1em;
  margin-top: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &[type="email"],
  &[type="text"] {
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }
  }

  &[type=button] {
    margin-top: 15px;
    width: 100%;
    font-size: 14px;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
      }

    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &::placeholder {
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    color: #fff;
  }
`

export default Input