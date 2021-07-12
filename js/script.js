let boton= document.querySelector("button")

function cargarCuidad(){
    let ciudad = document.querySelector("input").value
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=` + ciudad + `&appid=95176c8edea30e33338e0eaddd53a916`,
    function(data){
        console.log(data.name)
        console.log(data) //para ver toda la info de la ciudad ingresada
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("#ciudad").textContent= data.name
        // document.querySelector("#temperatura").textContent=parseInt(data.main.temp-273.15) + "<sup>°C</sup>"
        document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp-273.15) + "<sup>°C</sup>"
        //   document.querySelector("#wicon").src="http://openweathermap.org/img/w /01n.png.
          document.querySelector("#wicon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
          document.querySelector("#descripcion").textContent = data.weather[0].description 

    }).fail(function(jqXHR, textStatus, errorThrown){
        if (jqXHR.status == '404') {
            
            alert('Ciudad no encontrada');
        }
        else if (jqXHR.status == '400') {
            
            alert('Por favor, ingrese una ciudad');
        }
    });
    document.querySelector("input").value = "" 
}
boton.addEventListener("click",cargarCuidad)



// let boton = document.querySelector("button").addEventListener("click", cargarCiudad)

// function cargarCiudad () {
//     let ciudad = document.querySelector('input').value //porque en html el 'input' pide ingrese ciudad
//     $.getJSON ("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916", function (data) {
//         console.log(data.name) //porque esa api en name dice:San Francisco
//         console.log(data) //para ver toda la info de la ciudad ingresada
//         document.querySelector(".container").style.visibility = "visible" //punto 3.
//         document.querySelector("#ciudad").textContent = data.name //punto 4
//         // document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp-273.15) + "<sup>°C</sup>"//punto 5
//         document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp-273.15) + "<sup>°C</sup>"//punto 5
//         document.querySelector("#wicon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" //punto 6
//         document.querySelector("#descripcion").textContent = data.weather[0].description //punto 6 bis
        
//     }).fail(function (jqXHR, textStatus, errorThrown) { //Extra 3
        
//         if (jqXHR.status == '404') {
            
//             alert('Ciudad no encontrada');
//         }
//         else if (jqXHR.status == '400') {
            
//             alert('Por favor, ingrese una ciudad');
//         }
//     });
//     document.querySelector("input").value = "" 
//     }

