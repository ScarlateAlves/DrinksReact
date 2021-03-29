import React from "react";
import Button from "../Button/Button";
import "./Drinks.css";
import CardImage from "../Card/Card"
function BuscaDrinks() {
const [requisicao, setRequisicao] = React.useState([]);
async function buscaDrinks() {
console.log("rodando o useEffect");
const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
const dados = await response.json();
return setRequisicao(dados.drinks.slice(0, 10));
}
    React.useEffect(() => buscaDrinks(), []);
    return (
        <>
        <div className="conatainerSize">
        <h1>Drinks Populares</h1>
        <div className="container"> 
            {requisicao.map(item =>(
               <div key={item.id} className="containerImg">
                   <CardImage img={item.strDrinkThumb}>{item.strDrink}</CardImage>
               </div>
            ))}
            {/* <button onClick={buscaDrinks}> Escolha outro drink </button> */}
        </div> 
        </div>
        </> 
    );
} 
export default BuscaDrinks;