import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export const setSession = token => {
  Cookies.set('jwt', token)
}

export const delSession = () => {
  Cookies.remove('jwt')
}

export const verifyToken = token => {
  if (token) {
    const decodedToken = jwt.decode(token)

    if (!decodedToken) return false

    const expiresAt = decodedToken.exp * 1000
    if (decodedToken && new Date().getTime() < expiresAt) {
      return decodedToken
    }
    return false
  }
  return false
}

export const clientAuth = () => {
  console.log('### check client auth')

  const token = Cookies.getJSON('jwt')

  if (!token) return false

  const verifiedToken = verifyToken(token)
  return verifiedToken
}

export const serverAuth = req => {
  console.log('### check server auth')

  const { cookie } = req.headers
  if (cookie) {
    const jwtCookie = cookie.split(';').find(c => c.trim().startsWith('jwt'))

    if (!jwtCookie) return false

    const token = jwtCookie.split('=')[1]
    const verifiedToken = verifyToken(token)

    // return new Date().getTime() < expiresAt ? decodedToken : false
    return verifiedToken
  }
  return false
}
