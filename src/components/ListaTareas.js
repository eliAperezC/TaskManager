import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../style/ListaTareas.css'
import Tarea from "./Tarea";

function ListaTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()) { // Verifica que la cadena no está vacía
            tarea.texto = tarea.texto.trim(); // Se quitan espacios innecesarios
            const tareasActualizadas = [tarea, ...tareas]; // Arreglo con tareas anteriores y nueva
            setTareas(tareasActualizadas); // Actualiza el estado
        }
    };

    const eliminarTarea = id => {
        // Si se cumple la condición se agrega al arreglo
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <> {/*Fragmento*/}
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {/*Renderizar lista de componentes*/}
                {
                    tareas.map((tarea) => // Genera un componente por cada elemento en el arreglo tareas
                        <Tarea
                            // prop={valor/función}
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </> //Fin del fragmento
    );
}

export default ListaTareas;