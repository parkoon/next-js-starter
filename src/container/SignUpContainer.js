import React from 'react'
import RegisterForm from '@/components/ui/organisms/SignupForm'
import { registValidationSchema } from '@/helper/validation'
import { useDispatch, useSelector } from 'react-redux'
import { SIGNUP_REQUEST } from '@/state/modules/user/types'
import { toast } from 'react-toastify'

const initialValue = {
  email: 'admin01@qualson.com',
  password: '',
  passwordConfirm: '',
}
function SignUpContainer() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading['user/SIGNUP'])
  const error = useSelector(state => state.error['user/SIGNUP'])

  if (error) {
    const { message } = error
    toast.error(message)
  }

  const handleSignup = data => {
    dispatch({
      type: SIGNUP_REQUEST,
      payload: data,
    })
  }

  return (
    <RegisterForm
      onSubmit={handleSignup}
      validationSchema={registValidationSchema}
      initialValue={initialValue}
      loading={loading}
    />
  )
}

export default SignUpContainer
