const apiKey='ddM335DlMsK1A2R5kyKeBdHs9Tz9m4mA';

const peticion=fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp=>{
//     // console.log(resp)
//     resp.json().then(data=>{
//         console.log(data)
//     });
// })
peticion.then(resp=>resp.json())
.then(({data})=>{
    const {url}=data.images.original;

    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
    // console.log(url);
})
.catch(console.warn);