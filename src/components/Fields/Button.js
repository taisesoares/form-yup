import styled from 'styled-components'

const Button = styled.button`
  margin-top: 15px;
  font-size: 14px;
  text-transform: uppercase;
  background: transparent;
  width: 100%;
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
        cursor: pointer;
      }

    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
`

export default Button