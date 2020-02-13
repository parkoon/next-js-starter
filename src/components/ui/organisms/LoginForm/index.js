import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'
import InputField from '../../molecules/InputField'

const StyledLoginFormWrapper = styled.div`
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
              <Heading>Login Form</Heading>

              <StyleInputFieldWrapper>
                <InputField
                  label="email"
                  name="email"
                  type="text"
                  placeholder="email..."
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.email && touched.email}
                />

                <InputField
                  label="password"
                  name="password"
                  type="password"
                  placeholder="passowrd..."
                  password={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.password && touched.password}
                />
              </StyleInputFieldWrapper>

              <StyledButtonWrapper>
                <Button type="submit" disabled={isSubmitting}>
                  Login
                </Button>
              </StyledButtonWrapper>
            </StyledLoginFormWrapper>
          </form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
