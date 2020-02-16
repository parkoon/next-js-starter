import React from 'react'
import styled from 'styled-components'
import AppHeader from '../../organisms/AppHeader'

const StyledBaseAppLayout = styled.div``

function BaseAppLayout({ children, ...props }) {
  return (
    <StyledBaseAppLayout {...props}>
      <AppHeader />
      {children}
    </StyledBaseAppLayout>
  )
}

export default BaseAppLayout
