import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from '@server/routes'

import LoginForm from '@/components/ui/organisms/LoginForm'
import { loginValidationSchema } from '@/helper/validation'
import { LOGIN_REQUEST } from '@/state/ducks/user/types'
import AppHeader from '@/components/ui/organisms/AppHeader'
import AppLink from '@/components/ui/atoms/Link'
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
