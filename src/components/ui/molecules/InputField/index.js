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
  const { invalid, errorMessage } = props
  console.log(invalid, errorMessage)
  return (
    <StyledInputWrapper>
      {/* <Label>{label}</Label> */}
      <Input height={42} {...props} />
      {invalid && (
        <Text type="danger" height={30}>
          {errorMessage}
        </Text>
      )}
    </StyledInputWrapper>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
}

export default InputField
