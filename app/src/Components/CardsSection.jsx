import styled from "styled-components"
import FoodBG from '../assets/images/FoodBG.png'
import { useEffect, useState } from "react"
import {FoodCard} from './FoodCard'
const BASE_URL= 'http://localhost:9000'

export const CardsSection = () => {
    const [data,Setdata]=useState(null)
    const [error,Seterror]=useState(null)
    const [loading,Setloading]=useState(true)

   useEffect(()=>{
    let fetchData = async ()=>{
        try{
        let fetchData = await fetch(BASE_URL)
        if (!fetchData){
            throw new Error('Network failed!')
        }
        var Json = await fetchData.json()
        console.log(Json)
        Setdata(Json)
    }
        catch(err){
            alert('Error occured.')
        }  
        finally{
            Setloading(false)
        }      
    }
    fetchData();
},[])
    if (error) {
        return <p>Error fetching</p>
    }
    return (
    <Container>
        <CardsContainer>
            {loading ? <p >Loading....please wait!</p>: <div className="FoodCardWrapper">
                    {data?.map(
                        (card)=>{
                            return <FoodCard name={card.name} price={card.price} text={card.text} image={card.image} type={card.type} BASE_URL={BASE_URL}/>
                        }
                    )  
                    }
            </div>}
        </CardsContainer>
    </Container>
    )
}


const Container = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), /* overlay */
    url(${FoodBG});
    background-size: cover;
    background-repeat: no-repeat;
    
`
const CardsContainer = styled.div`
    margin: 0 auto;
    max-width: 1060px;
    min-height: 100vh;
    color: white;
    padding: 64px 0px;
    
    .FoodCardWrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        row-gap: 32px;
        column-gap: 20px;
    }
`