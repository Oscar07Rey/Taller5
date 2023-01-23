function Especiales(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijlmnñopqrstuvwxyz0123456789";
    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 &&!tecla_especial){
        alert("No se permiten los caracteres especiales")
        return false;
    }
}

    function validarUsuario(){
        usuario1 = document.getElementById('usuarioInput')
        usuario2 = document.getElementById('validarusuInput')
        pass1 = document.getElementById('contraInput')
        pass2 = document.getElementById('validarcontraInput')
    
        if (usuario1.value != usuario2.value) {
        alert("Los usuarios no coinciden")
        
        }else{
        
            
        }

        if (pass1.value != pass2.value) {
            alert("Las claves no coinciden")
            
            }else{
            
                
            }
    }

    var enfermedades = document.getElementById('enfermedades');
    document.getElementById('habilitarSi').addEventListener('click', function(e){
        console.log('input text habilitados');
        enfermedades.disabled = false;
    });

    document.getElementById('habilitarNo').addEventListener('click', function(e){
        console.log('Deshabilitado');
        enfermedades.disabled = true;
    });



    function ajax_get_json(){
        var resultado=document.getElementById("info");
        var xmlhttp;
        if(window.XMLHttpRequest){
             xmlhttp=new XMLHttpRequest();
         }else{
             xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
         }
         xmlhttp.onreadystatechange=function(){
                 if(xmlhttp.readyState==4&&xmlhttp.status==200){
                        var datos= JSON.parse(xmlhttp.responseText);
                        console.log(datos);
                        if(resultado.innerHTML==""){
                                 for(var i in datos){
                                         resultado.innerHTML += i + ": " + datos[i] + "<br/>";
                                  }
                        }
                  }
            }
            xmlhttp.open("GET","datos.json",true);
             xmlhttp.send();
       }