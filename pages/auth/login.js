import React from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from '@/components/ui/organisms/LoginForm'
import { loginValidationSchema } from '@/helper/validation'
import { LOGIN_REQUEST } from '@/state/modules/user/types'
import BaseAppLayout from '@/components/ui/templates/BaseAppLayout'

const initialValue = {
  email: 'bubble_e@naver.com',
  password: '1234',
}

function Login() {
  const dispatch = useDispatch()

  const handleLogin = async values => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: values,
    })
  }
  return (
    <BaseAppLayout>
      <LoginForm
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
        initialValue={initialValue}
      />
    </BaseAppLayout>
  )
}

export default Login
