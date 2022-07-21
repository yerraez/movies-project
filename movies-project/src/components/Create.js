import React, {useState} from 'react'
import { SaveStorage } from '../helpers/SaveStorage'

export const  Create = ({setListState}) => {

    const titleComponent = 'Añadir pelicula'
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    })

    const {title, description} = movieState

    const getFormValues = e => {
        e.preventDefault()


        //Conseguir datos del formulario

        let target = e.target
        let title = target.title.value
        let description = target.description.value

        
        //Crear objeto de pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }


        //Guardar estado
        setMovieState(movie)

        //Actualizar el estado del listado principal
        setListState(elements => {
                    return [movie, ...elements];
        })
        SaveStorage('movies', movie)

    }



  return (
    <div className="add">
    <h3 className="title">{titleComponent}</h3>
    <strong>
        {(title && description ) && "Has creado la pelicula: "+title}
    </strong>
    <form onSubmit={getFormValues}>
        <input 
        type="text" 
        id='title'
        name='title'
        placeholder="Titulo"/>
        <textarea
        id='description'
        name='description' 
        placeholder="Descripcion"></textarea>
        <input 
        type="submit"
        id='save' 
        value="Guardar"/>
    </form>
</div>
  )
}
