import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../../atoms/Input'
import Label from '../../atoms/Label'

const StyledInputWrapper = styled.div`
  width: 320px;
  margin-bottom: 17px;
`

const InputField = ({ label, ...props }) => {
  return (
    <StyledInputWrapper>
      <Label>{label}</Label>
      <Input height={32} {...props} />
    </StyledInputWrapper>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputField
