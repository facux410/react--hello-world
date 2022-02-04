
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 
  const [datos,setDatos] = useState('')
  useEffect(() =>  setDatos('akjsdnfkasjdnfkajsdnkfjanskdfjnaskjdfnkasjdnfkajsndfkjsnd'),[]);

  
  return (
    <>
    <h1>
      Hello World APP
    </h1>
<div className='container'>
    <div className='card'>
      <p>
        {datos}
        </p>
    </div>

</div>
    </>
  )
}
export default App;
