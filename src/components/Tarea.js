import React from "react";
import '../style/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importando el ícono

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        //Se asignan dos clases si el prop es true, se asigna una clase si es false 
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className="tarea-texto"
                onClick={() => completarTarea(id)}>
                    {texto}
            </div>
            <div 
                className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
                    <AiOutlineCloseCircle className="tarea-icono"/> {/*Usando el ícono (componente) y se le asigna el prop className*/}
            </div>
        </div>
    );
}

export default Tarea;