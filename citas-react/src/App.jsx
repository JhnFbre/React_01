import Header from "./components/Header"
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import {useState, useEffect} from 'react'

function App() {
  const [pacientes, setPacientes] =useState([]);
  const [paciente, setPaciente] =useState({});
  
  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log("P->", pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) =>{
      //console.log(`Eliminando paciente:  ${id}`) 
      const pacientesActualizados = pacientes.filter((paciente)=>paciente.id !== id)
      setPacientes(pacientesActualizados)
  }
  
  return (
    <div className="App container mx-auto mt-5 ">
     <Header
      title={'Seguimiento pacientes'}
     />
     <div className="flex mt-5">
        <Formulario
          pacientes = {pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}          
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente ={setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
     </div>
    </div>
  )
}

export default App
