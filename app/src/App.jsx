import './App.css'
import styled from 'styled-components'
import {TopContainer} from './Components/TopContainer'
import {FilterContainer} from './Components/FilterContainer'
import {CardsSection} from './Components/CardsSection'
function App() {
    return (
            <Container>
                <TopContainer />
                <FilterContainer />
                <CardsSection/>
            </Container>)
}

var Container = styled.div`
background-color: #323334 ;
min-height: 100vh;
`
export default App


