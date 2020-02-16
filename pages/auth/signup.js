import React from 'react'
import RegisterForm from '@/components/ui/organisms/SignupForm'
import { registValidationSchema } from '@/helper/validation'
import { useDispatch } from 'react-redux'
import { SIGNUP_REQUEST } from '@/state/ducks/user/types'
import BaseAppLayout from '@/components/ui/templates/BaseAppLayout'

const initialValue = {
  email: 'test@qualson.com',
  password: '1234',
  passwordConfirm: '1234',
}
function Signup() {
  const dispatch = useDispatch()

  const handleSignup = data => {
    dispatch({
      type: SIGNUP_REQUEST,
      payload: data,
    })
  }
  return (
    <BaseAppLayout>
      <RegisterForm
        onSubmit={handleSignup}
        validationSchema={registValidationSchema}
        initialValue={initialValue}
      />
    </BaseAppLayout>
  )
}

export default Signup
