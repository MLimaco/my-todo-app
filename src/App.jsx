import Header from './components/Header'
import List from './components/List'
import Pendiente from './components/Pendiente'
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'

const tareasIniciales = [
  {
    id: 1,
    text: "Tarea 1",
    done: false,
  },
  {
    id: 2,
    text: "Tarea 2",
    done: false,
  }
]

function App() {
  const [tareaPendiente, setTareaPendiente] = useState(tareasIniciales);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: tareaPendiente.length + 1, // Incrementar el id
      text: texto,
      done: false,
    };
    setTareaPendiente([...tareaPendiente, nuevaTarea]); // Actualizar el estado
  };

  return (
    <>
      <Header />
      <Pendiente onAgregarTarea={agregarTarea} />
      <List tareas={tareaPendiente} />
      <Footer />
    </>
  )
}

export default App
