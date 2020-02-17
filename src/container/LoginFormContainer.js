import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '@/components/ui/organisms/LoginForm'
import { LOGIN_REQUEST } from '@/state/modules/user/types'
import { loginValidationSchema } from '@/helper/validation'
import { toast } from 'react-toastify'

function LoginFormContainer(props) {
  const dispatch = useDispatch()
  const { email } = useSelector(({ user }) => user.me)
  const loading = useSelector(state => state.loading['user/LOGIN'])
  const error = useSelector(state => state.error['user/LOGIN'])

  if (error) {
    const { message } = error
    toast.error(message)
  }

  const handleLogin = async values => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: values,
    })
  }

  const initialValue = {
    email,
    password: '',
  }

  return (
    <LoginForm
      {...props}
      loading={loading}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
      initialValue={initialValue}
    />
  )
}

export default LoginFormContainer
