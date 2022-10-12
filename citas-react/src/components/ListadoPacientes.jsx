import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <div>
          <h2 className="font-black text-xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-2 mb-5 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
          {
            pacientes.map(
              (paciente) => 
                 (<Paciente key={paciente.id} 
                  paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />)
            )
          }
        </div>
      ) : (
        <div>
          <h2 className="font-black text-xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-12 mb-5 text-center">
            Comienza agregando tus {''}
            <span className="text-indigo-600 font-bold">pacientes</span>
          </p>
        </div>
      )}
            
    </div>
  )
}

export default ListadoPacientes