import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const component_title = 'Editar pelicula'

    const saveEdit = (e, id) => {
        e.preventDefault()
        //Conseguir el target del evento

        let target = e.target
        //Buscar el indice del objeto de la pelicula a actualizar 
        const saved_movies = getMovies()
        const index = saved_movies.findIndex(movie => movie.id === id)
        //Crear un objeto con ese indice
        let update_movie = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        //Actualizar el elemento con ese indice 
        saved_movies[index] = update_movie
        console.log(saved_movies)
        //Guardar el nuevo array de objetos en el localstorage
        localStorage.setItem('movies', JSON.stringify(saved_movies))

        //actualizar estados
        setListState(saved_movies)
        setEdit(0)
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{component_title}: {movie.title}</h3>
        <form onSubmit={e => saveEdit(e, movie.id)}>
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
