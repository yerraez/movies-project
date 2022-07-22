import React, { useEffect, useState } from 'react'
import { Edit } from './Edit'
//Reciviendo props
export const List = ({listState, setListState}) => {

 // const [listState, setListState] = useState([])

 const [edit, setEdit] = useState(0)
  
  useEffect(() => {
    console.log('Componente del listado de peliculas cargado')
    getMovies()
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'))
    setListState(movies)

    return movies
  }

  const deleteMovie = (id) => {
    //Conseguir las peliculas almacenadas
    let saved_movies = getMovies()
    

    //Filtrar esas peliculas para que elimine del array la que no quiero

    let newListMovies = saved_movies.filter(movie => movie.id !== parseInt(id))

    //Actualizar el estado del listado

    setListState(newListMovies)

    //Actualizar los datos en el localStorage

    localStorage.setItem('movies', JSON.stringify(newListMovies))

  }


  return (
    <>
    {listState != null ? listState.map(movie => {
      return(
        <article key={movie.id} className="movie-item">
        <h3 className="title">{movie.title}</h3>
        <p className="description">{movie.description}</p>
        <button className="edit" onClick={() => {setEdit(movie.id)}}>Editar</button>
        <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
        {/*aparece formulario de editar */}
        {edit === movie.id && (
          <Edit movie={movie} 
          getMovies={getMovies}
          setEdit={setEdit}
          setListState={setListState}/>
        )}
        </article>
      )
    })
  : <h2>No hay peliculas por mostrar</h2>}

    </>
  )
}
