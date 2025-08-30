import styled from 'styled-components'

export const FilterContainer = () => {
  return ( 
    <Container>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
    </Container>
    
  )
}

const Button = styled.button`
  all:unset;
  cursor: pointer;
  height: fit-content;
  padding: 6px 12px;
  border-radius: 5px;
  background-color: #FF4343;
  color: white;
  &:hover{
    background: white;
    color: #FF4343;
  }
`
const Container = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;  
  min-height: 62px;
`
