import styled from 'styled-components'

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

function Home() {
  return (
    <>
      <Center>
        <Display>2</Display>
        <ButtonGroup>
          <Button color="#00b894">+</Button>
          <Button color="#ffeaa7">-</Button>
        </ButtonGroup>
      </Center>
    </>
  )
}

export default Home
