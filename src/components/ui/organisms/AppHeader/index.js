import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavContainer from '@/container/NavContainer'
import Heading from '../../atoms/Heading'

const StyledHeader = styled.header`
  height: 60px;
  background-color: #222;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  /* padding-right: 60px; */
`

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`

function AppHeader() {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Heading level="2">Lets coding</Heading>
      </StyledLogoWrapper>

      <NavContainer />
    </StyledHeader>
  )
}

// AppHeader.propTypes = {}

export default AppHeader
