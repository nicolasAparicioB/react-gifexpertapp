import React from 'react'

export const GifGridItem = ({img}) => {
    return (
        <div className='items'>
            <img src={img.url} alt='imagen'/>
            <p>{img.title}</p>
        </div>
    )
}
