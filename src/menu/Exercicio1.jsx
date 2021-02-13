import React, { Component } from 'react'

export default class Exercicio1 extends Component {
    render() {
        //Dinâmica Aula 03 - Mergulhando no JSX
// Escolha um cliente do objeto abaixo e retorne um componenete com seu nome, sua idade e a soma total das compras

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: '2500' },
      { nome: 'Geladeira', preco: '3000' },
      { nome: 'Smartphone', preco: '1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: '2500' },
      { nome: 'Geladeira', preco: '3000' },
      { nome: 'Smartphone', preco: '1500' },
      { nome: 'Guitarra', preco: '3500' },
    ],
    ativa: false,
  };

const dados = mario

const total = dados.compras
.map((item)=>{return Number(item.preco)})
.reduce((aux, preco)=>{
return aux+preco
})
console.log(total)
        return (
        <div>
          <p>Nome: {dados.cliente}</p>
          <p>Idade: {dados.idade}</p>
          <p style={{color: total>1000 ? "green" : "red"}}>Total: {total}</p>
        </div>
        )
    }
}
