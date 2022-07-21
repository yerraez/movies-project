export const SaveStorage = (key, element) =>{
    //Conseguir los elementos que ya tenemos en el Local Storage

    let elements = JSON.parse(localStorage.getItem(key))

    console.log(elements)

    //Comprobar si es un array
    if(Array.isArray(elements)){
        // Añadir dentro del array un elemento nuevo
        elements.push(element)

    }else{
        //Crear un array con el nuevo elemento
        elements = [element]

    }

    //Guardar en el local storage

    localStorage.setItem(key, JSON.stringify(elements))

    //Devolver un objeto guardado
    return element
    
}  
