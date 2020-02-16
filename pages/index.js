import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/state/modules/counter/actions'

import { withTranslation, i18n } from '@server/helpers/i18n'
import withAuth from '@/hoc/withAuth'
import { LOGOUT_REQUEST } from '@/state/modules/user/types'

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  color: #fff;
  font-size: 2rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
`

const ButtonGroup = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2d3436;
  width: 320px;
  height: 120px;
  border-radius: 3px;
  margin-bottom: 12px;
  font-size: 3rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: #2c3e50;
  letter-spacing: 2px;
  margin-bottom: 52px;
`

const FloatingButton = styled(Button)`
  text-transform: uppercase;
  font-size: 1rem;
  position: fixed;
  right: 20px;
  top: 20px;
`

function Home({ t }) {
  const dispatch = useDispatch()
  const count = useSelector(({ counter }) => counter.count)

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')
  }

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  }

  return (
    <>
      <Center>
        <Title>{t('title')}</Title>
        <Display>{count}</Display>

        <ButtonGroup>
          {/* <Button color="#00b894" onClick={() => dispatch(incrementAsync())}>
            +
          </Button> */}
          <Button color="#00b894" onClick={() => dispatch(increment())}>
            +
          </Button>
          {/* <Button color="#ffeaa7" onClick={() => dispatch(decrementAsync())}>
            -
          </Button> */}
          <Button color="#ffeaa7" onClick={() => dispatch(decrement())}>
            -
          </Button>
        </ButtonGroup>

        <FloatingButton onClick={changeLanguage} color="black">
          {i18n.language === 'en' ? 'ko' : 'en'}
        </FloatingButton>

        <Button color="#ffeaa7" onClick={handleLogout}>
          X
        </Button>
      </Center>
    </>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(withAuth(Home))
