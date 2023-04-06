import React, { useState } from "react";
import '../style/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); // Extrae el valor del campo de texto
    };

    const manejarEnvio = e => {
        e.preventDefault(); // Evita que se recargue la página al enviar el formulario

        const tareaNueva = {
            id: uuidv4(), // Genera un ID único para cada tarea
            texto: input, // Texto ingresado por el usuario
            completada: false
        }

        props.onSubmit(tareaNueva); // Se envía la tarea registrada
    }

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}> {/*Se ejecuta el evento cuando se envía el formulario*/}
            <input 
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio} // Cuando ocurre un cambio en el input se ejecuta la función
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;