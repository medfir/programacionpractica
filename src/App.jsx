import Listado from './componentes/Listado.jsx';
import Formulario from './componentes/Formulario.jsx';
import './App.css';
import { useState } from 'react';
const personasDefault = [ 
  {
    documento: '11182998',
    nombres: 'Thiago',
    apellidos: 'Aguero',
    alumno: true,
    curso: '7',
    divicion: '2'
  },
  {
    documento: '48354503',
    nombres: 'Kevin',
    apellidos: 'Ariaudo',
    alumno: true,
    curso: '7',
    divicion: '2'
  },
  {
    documento: '2214112',
    nombres: 'Ezequiel',
    apellidos: 'Suarez',
    alumno: false,
    curso: '7',
    divicion: '2'
  },
  
]

export default function App (){

  const [personas, setPersonas] = useState(personasDefault)
  const guardar = (persona) => {
    console.log(persona)
    
    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }
  
  return (
    <div className='App'>
      
      <h1>hola eze, soy app punto jota ese equis</h1>
      
      <div className="contenedor">
        
        <Formulario 
          guardar={(persona) => guardar(persona)}
        />
        
        <Listado
          personas={personas}
        />
        
      </div>
      
    </div>
  )
  
}