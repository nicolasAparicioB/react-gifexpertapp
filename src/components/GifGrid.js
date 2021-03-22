
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem'; 
export const GifGrid = ({category}) => {
    const {images,loading}=useFetchGifs(category);
return(
    <>
    <h3>{category}</h3>
    {loading &&'loading...'}
  <div className='contenedor-items'>  
     {
     images.map(ima=>{  
        return <GifGridItem key={ima.id} img={ima}/>
     })
     }
    </div>
   </>
)
}
