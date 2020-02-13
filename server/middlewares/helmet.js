const helmet = require('helmet')
const hpkp = require('hpkp')
const ms = require('ms')

module.exports = app => {
  // X-Frame-Options 헤더를 설정하여 clickjacking에 대한 보호를 제공합니다.
  app.use(helmet.frameguard({ action: 'deny' }))

  // X-XSS-Protection을 설정하여 대부분의 최신 웹 브라우저에서 XSS(Cross-site scripting) 필터를 사용하도록 합니다.
  app.use(helmet.xssFilter())

  // // 서버에 대한 안전한(SSL/TLS를 통한 HTTP) 연결을 적용하는 Strict-Transport-Security 헤더를 설정합니다.
  app.use(
    helmet.hsts({
      maxAge: ms('90 days') / 1000,
      includeSubDomains: true,
      preload: true,
    })
  )

  // X-Powered-By 헤더를 제거합니다.
  app.disable('x-powered-by')

  // IE8 이상에 대해 X-Download-Options를 설정합니다.
  app.use(helmet.ieNoOpen())

  // X-Content-Type-Options 를 설정하여, 선언된 콘텐츠 유형으로부터 벗어난 응답에 대한 브라우저의 MIME 가로채기를 방지합니다.
  app.use(helmet.noSniff())

  // /* eslint-disable quotes */
  // Content-Security-Policy 헤더를 설정하여 XSS(Cross-site scripting) 공격 및 기타 교차 사이트 인젝션을 예방합니다.
  // app.use(helmet.contentSecurityPolicy({
  //     directives: {
  //         defaultSrc: ["'self'"],
  //         scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
  //         styleSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
  //         baseUri: ["'self'"],
  //         connectSrc: ["'self'", 'wss:'],
  //         frameAncestors: ["'none'"],
  //     },
  //     setAllHeaders: false,
  //     reportOnly: false,
  //     browserSniff: false
  // }));

  // // Public Key Pinning 헤더를 추가하여, 위조된 인증서를 이용한 중간자 공격을 방지합니다.
  app.use(
    hpkp({
      maxAge: ms('90 days') / 1000,
      sha256s: [
        'ENbaVbZki8BGBCq0jIUE8SJqvBnWf6CL8hkf4GYsg0A=',
        'E+nXO/0USWdc+uY6Q9iK9lfS99qFMgwk30N4vRV2XHI=',
      ],
      includeSubDomains: true, // optional
      reportOnly: false, // optional
    })
  )

  // // X-DNS-Prefetch-Control: https://github.com/helmetjs/dns-prefetch-control
  app.use(helmet.dnsPrefetchControl({ allow: false }))

  // // https://github.com/helmetjs/referrer-policy
  app.use(helmet.referrerPolicy({ policy: 'origin' }))

  // // https://helmetjs.github.io/docs/expect-ct/
  app.use(
    helmet.expectCt({
      enforce: true,
      maxAge: ms('1 days') / 1000,
    })
  )
}
