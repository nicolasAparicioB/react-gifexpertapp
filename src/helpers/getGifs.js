export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${category}&limit=20&api_key=dChCeBsVt77qmQCwdSm55Gi9crmDDJOT`;
 const respuesta=await fetch(url);
 const {data}=await respuesta.json();
 const gift=data.map(img=>{
    return { id: img.id,
     title: img.title,
     url: img.images.downsized_medium.url}
 })
 return gift;
}