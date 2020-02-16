import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavField from '../../molecules/NavField'
import LogoImage from '../../atoms/Logo'
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

function AppHeader(props) {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <Heading level="2">Lets coding</Heading>
      </StyledLogoWrapper>

      <NavField />
    </StyledHeader>
  )
}

// AppHeader.propTypes = {}

export default AppHeader
