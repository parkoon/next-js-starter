import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { Router } from '@server/routes'
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
            <StyledLoginFormWrapper>
              <Heading>SIGN UP FORM</Heading>

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
                <InputField
                  label="password"
                  name="passwordConfirm"
                  type="password"
                  placeholder="passowrd confirm..."
                  password={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.passwordConfirm && touched.passwordConfirm}
                />
              </StyleInputFieldWrapper>

              <StyledButtonWrapper>
                <Button type="submit">SIGN UP</Button>
              </StyledButtonWrapper>
            </StyledLoginFormWrapper>
          </form>
        )
      }}
    </Formik>
  )
}

export default RegisterForm
