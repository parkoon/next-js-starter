import React from 'react'
import LoginForm from '@/components/ui/organisms/LoginForm'
import BaseAppLayout from '@/components/ui/templates/BaseAppLayout'
import LoginFormContainer from '@/container/LoginFormContainer'

function Login() {
  return (
    <BaseAppLayout>
      <LoginFormContainer />
    </BaseAppLayout>
  )
}

export default Login
