//Async
//Await espera a que la peticion termine para la aplicacion sea sincronica 
//Debe de estar dentro de una funcion async
const getImagen=async()=>{
    try{
        const apiKey='ddM335DlMsK1A2R5kyKeBdHs9Tz9m4mA';
        const resp=await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}=await resp.json();
        const {url}=data.images.original;
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
        console.log(url);
    }
    catch(error){
        console.warn(error)
    }
}

getImagen();//.then(console.log)
