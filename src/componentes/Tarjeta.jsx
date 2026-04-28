

export default function Tarjeta({documento,apellidos,nombres, alumno}) {
  
  return ( 
    <div
      className="tarjeta"
      style={{
        backgroundColor: alumno ? "red" : "blue",
        color: alumno ? "white" : "yellow"
      }}
    >
      <h2>{documento}</h2>
      <h3>{apellidos}, {nombres}</h3>
      
    </div>
  )
}