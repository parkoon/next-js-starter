import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { Router } from '@server/routes'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'
import InputField from '../../molecules/InputField'
import LogoImage from '../../atoms/Logo'

const StyledSignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`

const StyleInputFieldWrapper = styled.div`
  width: 320px;
  padding: 42px 20px;
  margin: 0 auto;
`

const StyledButtonWrapper = styled.div``

const RegisterForm = ({ onSubmit, initialValue, validationSchema }) => {
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
            <StyledSignupFormWrapper>
              <LogoImage width="42" />
              <Heading level="2" style={{ marginTop: '12px' }}>
                Sign up
              </Heading>
              <Heading level="3" style={{ marginTop: '7px' }}>
                회원가입
              </Heading>

              <StyleInputFieldWrapper>
                <InputField
                  label="email"
                  name="email"
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.email && touched.email}
                />

                <InputField
                  label="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  password={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.password && touched.password}
                />
                <InputField
                  label="password"
                  name="passwordConfirm"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요."
                  password={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.passwordConfirm && touched.passwordConfirm}
                />
                <StyledButtonWrapper>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    block
                    color="primary"
                  >
                    회원가입
                  </Button>
                </StyledButtonWrapper>
              </StyleInputFieldWrapper>
            </StyledSignupFormWrapper>
          </form>
        )
      }}
    </Formik>
  )
}

export default RegisterForm
