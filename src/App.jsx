import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import ShowUsername from './components/ShowUsername'

function App() {
  
  return (
    <>
    <h1>Avançando com react</h1>
    <img src="/carro.jpg" alt="carro esportivo cinza"  width={600}/>
    <ManageData/>
    <ListRender/>
    <ConditionalRender/>
    <ShowUsername name="Victor"/>
    </>
  )
}

export default App
