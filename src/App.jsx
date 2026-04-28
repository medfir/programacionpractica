import Listado from './componentes/Listado.jsx';
import Formulario from './componentes/Formulario.jsx';
import './App.css';
const personas = [ 
  {
    documento: '11182998',
    nombres: 'Thiago',
    apellidos: 'Aguero',
    alumno: true
  },
  {
    documento: '48354503',
    nombres: 'Kevin',
    apellidos: 'Ariaudo',
    alumno: true
  },
  {
    documento: '2214112',
    nombres: 'Ezequiel',
    apellidos: 'Suarez',
    alumno: false
  },
  
]

export default function App (){
  
  return (
    <div className='App'>
      
      <h1>hola eze, soy app punto jota ese equis</h1>
      
      <div className="contenedor">
        
        <Formulario />
        
        <Listado
          personas={personas}
        />
        
      </div>
      
    </div>
  )
  
}