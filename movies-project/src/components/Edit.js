import React from 'react'

export const Edit = ({movie}) => {
    const component_title = 'Editar pelicula'
  return (
    <div className='edit_form'>
        <h3 className='title'>{component_title}: {movie.title}</h3>
        <form>
            <input 
            type='text'
            name='title'
            className='titulo_editado'
            defaultValue={movie.title} />
            <textarea 
            name='description'
            defaultValue={movie.description}
            className='descripcion_editada' />
            <input type='submit'
            className='editar'
            value='Actualizar'/>
        </form>
        
    </div>
  )
}
