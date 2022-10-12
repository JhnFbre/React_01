import {useState, useEffect} from 'react'
import Error from './Error'

function Formulario({pacientes, setPacientes, paciente, setPaciente}){
    const [nombre, setNombre]           = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail]             = useState('')
    const [fecha, setFecha]             = useState('')
    const [sintomas, setSintomas]       = useState('')

    const [error, setError]             = useState(false)

    useEffect( () =>{
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])
    
    const generarId = () =>{
        const random = Math.random().toString(36).substr(2)
        const fecha  = Date.now().toString(36)
        const resultId = random + fecha
        return resultId
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            //alert("Hay un campo vacio")
            setError(true)
        }
        else{
            setError(false)
            const objPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas
            }

            if(paciente.id){
                //Editando
                objPaciente.id = paciente.id

                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState )
                
                setPacientes(pacientesActualizados)
                setPaciente({})
            }else{
                //Agregando
                objPaciente.id = generarId()
                setPacientes([...pacientes, objPaciente])
            }            
            
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('') 
        }        
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-xl text-center">
                Seguimiento de Pacientes    
            </h2>
            <p className="mt-2 mb-5 text-center text-lg">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>            
            <form   onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-5 px-5 mb-3">
                {error && 
                    (<Error mensaje={'Todos los campos son requeridos'} />)
                }
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">
                        Nombre mascota
                    </label>
                    <input  id="mascota" 
                            className="border-2 rounded-md w-full mt-2 p-2 placeholder-indigo-600" 
                            type="text" 
                            value={nombre}
                            onChange = {(e)=> setNombre(e.target.value)}
                            placeholder="Nombre mascota" />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">
                        Nombre del dueño
                    </label>
                    <input  id="owner" 
                            className="border-2 rounded-md w-full mt-2 p-2 placeholder-indigo-600" 
                            type="text" 
                            value={propietario}
                            onChange = {(e)=> setPropietario(e.target.value)}
                            placeholder="Nombre dueño" />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mail">
                        Email
                    </label>
                    <input  id="mail" 
                            className="border-2 rounded-md w-full mt-2 p-2 placeholder-indigo-600" 
                            type="email" 
                            value={email}
                            onChange = {(e)=> setEmail(e.target.value)}
                            placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
                        Alta
                    </label>
                    <input  id="alta" 
                            className="border-2 rounded-md w-full mt-2 p-2 placeholder-indigo-600" 
                            value={fecha}
                            onChange = {(e)=> setFecha(e.target.value)}
                            type="date"  />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
                        Sintomas
                    </label>
                    <textarea   id="sintomas" 
                        className="border-2 rounded-md w-full mt-2 p-2 placeholder-indigo-600" 
                        value={sintomas}
                        onChange = {(e)=> setSintomas(e.target.value)}
                        placeholder="Describe los sintomas"   />
                </div>
                <input type="submit" value={paciente.id ? 'Editar paciente' : 'Agregar Paciente'} className="w-full p-3 text-white uppercase font-bold bg-indigo-600 hover:bg-indigo-800 cursor-pointer transition-all" />
            </form>
        </div>
    )
}

export default Formulario