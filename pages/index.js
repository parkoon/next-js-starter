import styled from 'styled-components'
import { withTranslation, i18n } from '@server/helpers/i18n'
import withAuth from '@/hoc/withAuth'
import BaseAppLayout from '@/components/ui/templates/BaseAppLayout'

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
  bottom: 20px;
`

function Home({ t }) {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')
  }

  return (
    <BaseAppLayout>
      <Center>
        <Title>{t('title')}</Title>

        <FloatingButton onClick={changeLanguage} color="black">
          {i18n.language === 'en' ? 'ko' : 'en'}
        </FloatingButton>
      </Center>
    </BaseAppLayout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default withTranslation('home')(withAuth(Home))
