import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { Router } from '@server/routes'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'
import InputField from '../../molecules/InputField'
import LogoImage from '../../atoms/Logo'
import AppLink from '../../atoms/Link'

const StyledLoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`

const StyleInputFieldWrapper = styled.div`
  width: 320px;
  padding: 42px 20px;
  margin: 0 auto;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
`

const StyledForgotWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`

const StyledButtonWrapper = styled.div`
  /* text-align: right; */
`

const LoginForm = ({ onSubmit, initialValue, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props

        return (
          <form onSubmit={handleSubmit}>
            <StyledLoginFormWrapper>
              <LogoImage width="42" />
              <Heading level="2" style={{ marginTop: '12px' }}>
                Sign in
              </Heading>
              <Heading level="3" style={{ marginTop: '7px' }}>
                로그인
              </Heading>
              <StyleInputFieldWrapper>
                <InputField
                  label="email"
                  name="email"
                  type="text"
                  placeholder="이메일"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.email && touched.email}
                />

                <InputField
                  label="password"
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  password={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.password && touched.password}
                />

                <StyledForgotWrapper>
                  <AppLink
                    route="/auth/login"
                    underline="always"
                    color="default"
                    block
                    height={30}
                  >
                    가입한 이메일을 잃어버리셨나요?
                  </AppLink>
                  <AppLink
                    route="/auth/login"
                    underline="always"
                    color="default"
                    height={30}
                    block
                  >
                    비밀번호를 잃어버리셨나요?
                  </AppLink>
                </StyledForgotWrapper>
                <StyledButtonWrapper>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    block
                    color="primary"
                  >
                    로그인
                  </Button>
                  <Button
                    onClick={() => Router.pushRoute('/auth/signup')}
                    type="button"
                    block
                    color="white"
                  >
                    회원가입
                  </Button>
                </StyledButtonWrapper>
              </StyleInputFieldWrapper>
            </StyledLoginFormWrapper>
          </form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
