json = [{}]
posicionJson = null;
MIN = 0;
MAX = 4

function inicioAlbum(){

    img = [{
        'id': 0,
        'Nombre': 'honda-nsx-1.jpg'
        },
        {
        'id': 1,
        'Nombre': 'mazda-rx7-1.jpg'
        },
        {
        'id': 2,
        'Nombre': 'nissan-gtr34-1.jpg'
        },
        {
        'id': 3,
        'Nombre': 'subaru-impreza-1.jpg'
        },
        {
        'id': 4,
        'Nombre': 'toyota-Supra-1.jpg'
        }
    ]
    
    console.log(img);

    json = img;

    document.getElementById("img").src = "img/" + img[0].Nombre;

    posicionJson = 0;

}

inicioAlbum();

document.getElementById("siguiente").addEventListener("click", cambiarFotoSigueinte);

function cambiarFotoSigueinte(){

    if(posicionJson < MAX){
    posicionJson++;

    document.getElementById("img").src = "img/" + img[posicionJson].Nombre;
    }else{
        posicionJson = 0;

        document.getElementById("img").src = "img/" + img[posicionJson].Nombre;
    }
}

document.getElementById("anterior").addEventListener("click", cambiarFotoAnterior);

function cambiarFotoAnterior(){

    if(posicionJson > MIN){
    posicionJson--;

    document.getElementById("img").src = "img/" + img[posicionJson].Nombre;
    }else{
        posicionJson = 4;

        document.getElementById("img").src = "img/" + img[posicionJson].Nombre;
    }
}




