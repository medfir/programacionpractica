import Tarjeta from './Tarjeta';
export default function Listado ({personas}){
  
  return (
    <div style={{flex:3}}> 
    
      <h1>Listado we :V</h1>
      <div className="listado">
        {
          personas.map((persona) =>
            <Tarjeta
              documento={persona.documento}
              apellidos={persona.apellidos}
              nombres={persona.nombres}
              alumno={persona.alumno}
            />
        )}
      </div>
    </div>
  )
}