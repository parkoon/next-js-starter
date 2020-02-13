import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: '#d35400';
`

const Heading = styled(({ level, children, reverse, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  level: 1,
}

export default Heading
