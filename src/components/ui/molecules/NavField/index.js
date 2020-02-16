import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppLink from '../../atoms/Link'

const StyledNavWrapper = styled.ul`
  li {
    display: inline;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
`

function NavField(props) {
  return (
    <StyledNavWrapper>
      <li>
        <AppLink route="/auth/login" color="white">
          로그인
        </AppLink>
      </li>
      <li>
        <AppLink route="/auth/signup" color="white">
          회원가입
        </AppLink>
      </li>
    </StyledNavWrapper>
  )
}

// NavField.propTypes = {}

export default NavField
