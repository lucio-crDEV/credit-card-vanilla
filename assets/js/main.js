// capturando elementos
const boton         = document.getElementById('btn-abrir-formulario');
const formulario    = document.getElementById('formulario-tarjeta');
const logoMarca     = document.getElementById('logo-marca');
const tarjeta       = document.getElementById('tarjeta');
const numeroTarjeta = document.getElementById('numero');
const nombreTarjeta = document.getElementById('nombre');
const yearExp       = document.getElementById('year')
const mesExp        = document.getElementById('mes')
const cvv           = document.getElementById('codigo')
const cvvInput      = document.getElementById('ccv')


// Volteamos la tarjeta 
const mostrarFrente = () => {
    if( tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active')
    }
}

// rotacion
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active')
})

// girando boton y desplegando formulario
boton.addEventListener('click', () => {
    boton.classList.toggle('active')
    formulario.classList.toggle('active')
})

// Seleccion de mes dinamica
for(let i = 1; i<= 12; i++){
    let opcion = document.createElement('option');
    opcion.value        = i;
    opcion.innerText    = i;
    formulario.selectMes.appendChild(opcion)
}

// Definiendo opciones de años dinamicamente
const yearActual = new Date().getFullYear();
for( let i = yearActual; i <= yearActual + 8 ; i++){
    let opcion          = document.createElement('option');
    opcion.value        = i;
    opcion.innerText    = i;
    formulario.selectYear.appendChild(opcion)
}

// Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e)=>{
    let inputValue = e.target.value;
    formulario.inputNumero.value = inputValue
        // Eliminando espacios en blanco
        .replace(/\s/g, '')
        // Elimina las letras
        .replace(/\D/g, '')
        // Agregar espacio cada cuatro números
        .replace(/([0-9]{4})/g, '$1 ')
        // Eliminando últimos espaciados
        .trim()

    numeroTarjeta.textContent = inputValue

    // Devolviendo estado default
    if ( inputValue == '' ) {
        numeroTarjeta.textContent = "#### #### #### ####"
        logoMarca.innerHTML = ''
    }
    
    console.log(inputValue[0])

    switch (inputValue[0]) {
        case "4":
            logoMarca.innerHTML = ''
            let imagen = document.createElement('img')
            imagen.src= '/assets/img/logos/visa.png'
            logoMarca.appendChild(imagen)
            break;
        case "5": 
            logoMarca.innerHTML = ''
            let imagen1 = document.createElement('img')
            imagen1.src= '/assets/img/logos/mastercard.png'
            logoMarca.appendChild(imagen1)
            break;
        case "3":
            logoMarca.innerHTML = ''
            let imagen2 = document.createElement('img')
            imagen2.src= '/assets/img/logos/americanexpress.png'
            logoMarca.appendChild(imagen2)
            break;
        case "6" :
            logoMarca.innerHTML = ''
            let imagen3 = document.createElement('img')
            imagen3.src= '/assets/img/logos/discover.png'
            logoMarca.appendChild(imagen3)
            break;
    }

    // Voltear la tarjeta para usuario
    mostrarFrente()
})


// Input número del nombre
formulario.inputNombre.addEventListener('keyup', ( e ) => {
    let inputValue = e.target.value

    formulario.inputNombre.value = inputValue
        // Quitando numeros con expresion regular
        .replace(/[0-9]/g, '')
    nombreTarjeta.textContent = inputValue

    if ( inputValue == '' ) {
        nombreTarjeta.textContent = "Jhon Doe"
    }
})

// Cargando mes dinamicamente
formulario.selectMes.addEventListener('change', ( e ) => {
    mesExp.textContent = e.target.value
    mostrarFrente()
})

// Cargando años dinamicamente
formulario.selectYear.addEventListener('change', ( e ) => {
    // slice para dejar ultimos dos dígitos del año
    yearExp.textContent = e.target.value.slice(2)
    mostrarFrente()
 })

//  CVV
cvvInput.addEventListener('click', () => {
    mostrarFrente()
})

// Rellenando codigo de seguridad posterior
formulario.inputCCV.addEventListener( 'keyup' , () => {
    if( !tarjeta.classList.contains('active') ){
        tarjeta.classList.toggle('active')
    }

    formulario.inputCCV.value    
    //Eliminar espacios en blanco 
    .replace(/\s/g, '')
    // Eliminar letras
    .replace(/\D/g, '')

    cvv.textContent = formulario.inputCCV.value
})
