

export default function Tarjeta({documento,apellidos,nombres, alumno, curso, divicion}) {
  
  return ( 
    <div
      className="tarjeta"
      style={{
        backgroundColor: alumno ? "red" : "blue",
        color: alumno ? "white" : "yellow"
      }}
    >
      <span className="eliminar" onClick={() => alert("eliminar")} >x</span>
      <h2>{documento}</h2>
      <h3>{apellidos}, {nombres}</h3>
      <h3>{curso}, {divicion}</h3>
      
    </div>
  )
}