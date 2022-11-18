import styled from 'styled-components'

export const ButtonSubmit = styled.button`
  font-family: inherit;
  width: 100%;
  background-color: hsl(223, 87%, 63%);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  padding: 0.8rem 0;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: hsl(223, 87%, 70%);
  }
`
