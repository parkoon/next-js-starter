import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    body{
        background-color: #ecf0f1
    }
`

export default globalStyles
