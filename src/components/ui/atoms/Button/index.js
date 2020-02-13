import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import Link from 'next/link'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : disabled ? '#ecf0f1' : '#16a085'

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? (disabled ? '##2c3e50' : 'red') : '#fff'

const hoverBackgroundColor = ({ disabled, transparent }) =>
  !disabled && !transparent && '#1abc9c'
const hoverForegroundColor = ({ disabled, transparent }) =>
  !disabled && transparent && '#e74c3c'

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none;
  }
`

const StyledLink = styled(({ disabled, transparent, height, ...props }) => (
  <Link {...props} />
))`
  ${styles}
`

const Anchor = styled.a`
  ${styles}
`
const StyledButton = styled.button`
  ${styles}
`

const Button = ({ type, ...props }) => {
  const { to, href } = props
  if (to) {
    return <StyledLink {...props} />
  }
  if (href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  height: 40,
  disabled: false,
  transparent: false,
  to: '',
  href: '',
}

export default Button
