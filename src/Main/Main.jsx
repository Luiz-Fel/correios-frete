import React from 'react';
import './main.css';

export default function Main() {

const [frete, setFrete] = React.useState(null);


const submitHandler =   (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

     fetch(`http://localhost:3001/frete/?tracking=${data.tracking}`)
    .then(response => response.json())
    .then(data => setFrete(data))
    .catch(err => console.log(err))

    console.log(frete);
}


  return (
    <>
        <form className='form-group' onSubmit={submitHandler}>
            <input type="text" 
            name='tracking' 
            className='form-control'/>
            <button className='btn btn-primary' 
            type='submit'
            >Buscar</button>
        </form>
        <div>
          {
            frete != null ? <p>Frete: {frete.logradouro}</p> : null
          }
        </div>
    </>
  )
}
