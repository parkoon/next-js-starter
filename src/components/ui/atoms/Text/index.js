import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '@/components/themes/default'

const fontSize = ({ height }) => `${height / 40}rem`

const StyledText = styled.span`
  display: inline-block;
  color: ${({ type }) => theme.palette[type][0]};
  font-size: ${fontSize};
`

function Text(props) {
  return <StyledText {...props} />
}

Text.propTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
}

Text.defaultProps = {
  type: 'primary',
  height: 40,
}

export default Text
