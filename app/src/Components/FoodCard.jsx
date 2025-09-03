import styled from "styled-components"
export const FoodCard = ({name, price, text, image, type,BASE_URL}) => {
    console.log(image)
  return (
    <Container>
        <img src={BASE_URL+image} alt={name} />
        <div className="card-info">
            <div className="card-title">{name}</div>
            <div className="card-description">{text}</div>
            <button className="card-price">${price}</button>
        </div>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(30px);
    border-radius: 12px;
    padding: 16px 7px;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 2px solid #444;
    max-width: 340px;
    min-height: 167px;
    gap:17px;
    
    img {
        width: 133px;
        height: 133px;
        border-radius: 50%;
    }
    .card-info {
        display: flex;
        flex-direction: column;
        color: white;
    }
    .card-title {
        font-weight: 600;
        color: white;
        margin-bottom: 8px;
    }

    .card-description {
        font-size: 12px;
        color: #cccccc;
        margin-bottom: 26px;
        max-width: 168px ;
    }

    .card-price {
        font-size: 14px;
        all:unset;
        background: #FF4343;
        color: white;
        height: 25px;
        width: 57px;
        text-align: center;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        align-self: end;
        justify-self: end;
        
        &:hover {
            background: white;
            color: #FF4343 ;
        }
    }
`