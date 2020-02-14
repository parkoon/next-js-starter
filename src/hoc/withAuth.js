import React from 'react'
import { Router } from '@server/routes'
import { serverAuth, clientAuth } from '@/helper/auth'

export default Component =>
  class withAuth extends React.PureComponent {
    static getInitialProps = async ctx => {
      const pageProps =
        Component.getInitialProps && (await Component.getInitialProps(ctx))

      const { req, res, isServer } = ctx

      const user = isServer ? serverAuth(req) : clientAuth()
      const login = '/auth/login?redirected=true'

      if (!user) {
        isServer ? res.redirect(login) : Router.pushRoute(login)
      }

      const auth = { user, isAuthenticated: !!user }

      return { ...pageProps, auth }
    }

    render() {
      return <Component {...this.props} />
    }
  }
