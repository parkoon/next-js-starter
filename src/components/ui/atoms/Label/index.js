import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  color: '#2c3e50';
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
