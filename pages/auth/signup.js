import React from 'react'
import RegisterForm from '@/components/ui/organisms/SignupForm'
import { registValidationSchema } from '@/helper/validation'
import { useDispatch } from 'react-redux'
import { SIGNUP_REQUEST } from '@/state/ducks/user/types'

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
    <>
      <RegisterForm
        onSubmit={handleSignup}
        validationSchema={registValidationSchema}
        initialValue={initialValue}
      />
    </>
  )
}

export default Signup
