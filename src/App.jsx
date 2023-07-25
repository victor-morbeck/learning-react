import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
function App() {

  //Criando as cosntants

  const cars = [
    {id:1, brand:"Ferrari", color:"Aramarela", newCar: true, km:0},
    {id:2, brand:"Subaru", color:"Azul", newCar: true, km:0},
    {id:3, brand:"Mazda", color:"Vermelho", newCar: true, km:0}

  ]
  
  return (
    <>
    <h1>Avançando com react</h1>
    <img src="/carro.jpg" alt="carro esportivo cinza"  width={600}/>
    <ManageData/>
    <ListRender/>
    <ConditionalRender/>
    <ShowUsername name="Victor"/>
    <CarDetails brand="VW" km={1000000} color="Azul"/>
    {/* loop em array de objetos */}
    {cars.map((car) =>(
      <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
    ))}
    </>
  )
}

export default App
