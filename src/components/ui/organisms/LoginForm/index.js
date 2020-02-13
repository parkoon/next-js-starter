import React from 'react'

import styled from 'styled-components'
import Heading from '@/components/UI/atoms/Heading'
import Button from '../../atoms/Button'

import InputField from '../../molecules/InputField'

const StyledLoginFormWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  width: 320px;
  padding: 42px 20px;
  margin: 0 auto;
  margin-top: 320px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const StyleInputFieldWrapper = styled.div`
  margin-top: 32px;
`

const StyledButtonWrapper = styled.div`
  text-align: right;
`

const LoginForm = () => {
  return (
    <form>
      <StyledLoginFormWrapper>
        <Heading>Login Form</Heading>

        <StyleInputFieldWrapper>
          <InputField label="email" placeholder="email..." type="text" />
          <InputField
            label="password"
            placeholder="password..."
            type="password"
          />
        </StyleInputFieldWrapper>

        <StyledButtonWrapper>
          <Button>Login</Button>
        </StyledButtonWrapper>
      </StyledLoginFormWrapper>
    </form>
  )
}

export default LoginForm
