import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '@/components/themes/default'

const StyledText = styled.span`
  color: ${({ type }) => theme.palette[type][0]};
`

function Text(props) {
  return <StyledText {...props} />
}

Text.propTypes = {
  type: PropTypes.string,
}

Text.defaultProps = {
  type: 'primary',
}

export default Text
