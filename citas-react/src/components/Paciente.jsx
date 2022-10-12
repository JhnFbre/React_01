const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const handleEliminar = () =>{
        const respuesta = confirm("Deseas eliminar este paciente")
        if(respuesta){
            eliminarPaciente(paciente.id)
        }        
    }
  return (
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
        <p className="font-bold text-indigo-600 uppercase">
            Nombre : {''}
            <span className="font-normal normal-case text-black">{paciente.nombre}</span>
        </p>
        <p className="font-bold text-indigo-600 uppercase">
            Nombre Dueño: {''}
            <span className="font-normal normal-case text-black">{paciente.propietario}</span>
        </p>
        <p className="font-bold text-indigo-600 uppercase">
            Email : {''}
            <span className="font-normal normal-case text-black">{paciente.email}</span>
        </p>
        <p className="font-bold text-indigo-600 uppercase">
            Alta : {''}
            <span className="font-normal normal-case text-black">{paciente.fecha}</span>
        </p>
        <p className="font-bold text-indigo-600 uppercase">
            Sintomas : {''}
            <span className="font-normal normal-case text-black">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button type="buttom" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded" onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            <button type="buttom" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded" onClick={handleEliminar }>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente