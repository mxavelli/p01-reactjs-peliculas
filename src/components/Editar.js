import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula"

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        // Conseguir el target del event

        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const peliculas_almacenadas = conseguirPeliculas();
        const indice = peliculas_almacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese id de ese indice, con el titulo y descripcion del Formulario
        let peli_actualizada = {
          id,
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
        };

        // Actualizar el elemento con ese indice
        peliculas_almacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

        // y actualizar estados
        setListadoState(peliculas_almacenadas);
        setEditar(0);


    }


  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>

        <form onSubmit={ e => guardarEdicion(e,peli.id)}>
          <div className='comp-titulo'>
            <input 
            type="text"
            name="titulo"
            className='titulo_editado'
            defaultValue={peli.titulo} />
          </div>

          <div className='comp-descrip'>
            <textarea 
                    name="descripcion"
                    defaultValue={peli.descripcion}
                    className="descripcion_editada" />
          </div>

            <input type="submit" className='editar' value="Actualizar" />
          

        </form>
    </div>
  )
}
