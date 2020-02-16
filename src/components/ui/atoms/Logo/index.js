import React from 'react'

import styled from 'styled-components'
import logo from './logo.png'

const StyledImage = styled.img``

const LogoImage = props => <StyledImage alt="Logo" {...props} src={logo} />

export default LogoImage
