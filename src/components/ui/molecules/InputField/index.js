import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../../atoms/Input'
import Text from '../../atoms/Text'

const StyledInputWrapper = styled.div`
  width: 320px;
  margin-bottom: 17px;
`

const InputField = ({ label, ...props }) => {
  const { invalid } = props
  return (
    <StyledInputWrapper>
      {/* <Label>{label}</Label> */}
      <Input height={42} {...props} />
      {invalid && <Text type="danger">zz</Text>}
    </StyledInputWrapper>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputField
