import { useState } from 'react'
import './App.css'
import Texto from './components/1º TextoSimples'
import Paragrafo from './components/2º Paragrafo'
import ListaOrdenada from './components/3º ListaOrdenada'
import Imagem from './components/4º Imagem'
import Botao from './components/5º Botao'
import Link from './components/6º Link'
import TituloESubtitulo from './components/7º TítuloESubtítulo'
import Booleana from './components/8º BooleanaDiaOuNoite'
import DivEstiloInline from './components/9º DivEstiloInline'
import ElementosFragmentos from './components/10º ElementosComFragmentos'

function App() {

  return (
    <>
    <h1 id='titulo'>2º Lista de exercícios</h1>
    <Texto />
    <Paragrafo />
    <ListaOrdenada />
    <Imagem />
    <Botao />
    <Link />
    <TituloESubtitulo />
    <Booleana />
    <DivEstiloInline />
    <ElementosFragmentos />
    </>
  )
}

export default App
