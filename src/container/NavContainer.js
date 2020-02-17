import React from 'react'

import NavField from '@components/ui/molecules/NavField'
import { isAuthenticated } from '@/helper/auth'
import { useDispatch } from 'react-redux'
import { LOGOUT_REQUEST } from '@/state/modules/user/types'

function NavContainer() {
  const dispatch = useDispatch()
  const auth = isAuthenticated()
  const handleLogout = () => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  }
  return <NavField auth={auth} handleLogout={handleLogout} />
}

export default NavContainer
