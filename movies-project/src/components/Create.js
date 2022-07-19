import React, {useState} from 'react'

export const  Create = () => {

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
        saveStorage(movie)

    }

    const saveStorage = movie =>{
        //Conseguir los elementos que ya tenemos en el Local Storage

        let elements = JSON.parse(localStorage.getItem('movies'))

        console.log(elements)

        //Comprobar si es un array
        if(Array.isArray(elements)){
            // Añadir dentro del array un elemento nuevo
            elements.push(movie)

        }else{
            //Crear un array con la nueva peli
            elements = [movie]

        }

        //Guardar en el local storage

        localStorage.setItem('movies', JSON.stringify(elements))

        //Devolver un objeto guardado
        return movie
        
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
