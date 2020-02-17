import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from '@server/routes'
import theme from '@/components/themes/default'

const fontSize = ({ height }) => `${height / 40}rem`

const styles = css`
  color: ${({ color }) => theme.palette[color][0]};
  font-size: ${fontSize};
  cursor: pointer;

  display: ${({ block }) => block && 'block'};

  text-decoration: ${({ underline }) => underline === 'always' && 'underline'};

  transition: all 0.2s;
  margin-bottom: 12px;
  margin-right: 8px;
  &:active,
  &:hover {
    text-decoration: ${({ underline }) => underline === 'hover' && 'underline'};
  }
`

const StyledAnchor = styled.a`
  ${styles}
`

const StyledButton = styled.button`
  position: relative;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  color: ${({ color }) => theme.palette[color][0]};
  font-size: ${fontSize};
`

const AppLink = ({ onClick, children, ...props }) => {
  const { href, route } = props

  if (typeof onClick === 'function') {
    console.log('함수임!')
    return (
      <StyledButton onClick={onClick} {...props}>
        {children}
      </StyledButton>
    )
  }
  if (href) return <StyledAnchor {...props} />
  if (route)
    return (
      <Link route={route}>
        <StyledAnchor {...props}>{children}</StyledAnchor>
      </Link>
    )
  return null
}

AppLink.defaultProps = {
  height: 40,
}

// AppLink.propTypes = {}

export default AppLink
