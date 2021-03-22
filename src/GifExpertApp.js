import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    return (
        <>
            <h2 className='titulo'>Buscador De Gifs<span>Nicolas Aparicio</span> </h2>
            <AddCategory setcategories={setcategories} categories={categories} />
            <hr />

            <ol>
                {

                    categories.map(category => 
                      <GifGrid
                      key={category} 
                      category={category}/>
                      
                    )


                }

            </ol>
        </>)
}
