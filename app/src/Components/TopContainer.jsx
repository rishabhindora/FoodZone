import styled from 'styled-components'
import Logo from '../assets/images/Logo.svg'

export const TopContainer = () => {
  return (
    <Container>
        <img src={Logo} alt="" />
        <input type="text" placeholder='Search Food...'/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto 0 auto;
    padding: 85px 0 54px 0;

    input{
        all: unset;
        border-radius: 5px;
        border: 1px solid #FF0909;
        background: transparent;
        height: 40px;
        width: 285px;
        padding-left: 15px;
        color: white;
    }
`