import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

const fontSize = ({ height }) => `${height / 35.5555555556}rem`

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp(
    { type: 'textarea' },
    '0.4444444444em',
    '0 0.4444444444em'
  )};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: '#2c3e50';
  background-color: '#ecf0f1';
  border: 1px solid ${ifProp('invalid', '#c0392b', '#ecf0f1')};
  border-radius: 2px;

  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const StyledTextarea = styled.textarea`
  ${styles}
`
const StyledSelect = styled.select`
  ${styles}
`
const StyledInput = styled.input`
  ${styles}
`

const Input = ({ ...props }) => {
  const { type } = props
  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  }
  if (type === 'select') {
    return <StyledSelect {...props} />
  }
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  height: 40,
  invalid: false,
}

export default Input
