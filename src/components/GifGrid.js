import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

  const {data: imagenes, loading} = useFetchGifs(category);

  return (
    <>
    <h3 className='animate__animated animate__bounce'>{category}</h3>

    {loading && <p className='animate__animated animate__bounce'>Cargando...</p>}

    <div className="card-grid">
            {
                imagenes.map((img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
        
    </div>
    </>
  )
}
