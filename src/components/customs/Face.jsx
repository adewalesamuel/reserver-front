import React from 'react'

export default function Face() {
  return (
    <div className='max-w-xs'>
        <div className='flex justify-between items-center'>
            <button className='text-tertiaire flex items-center gap-4 border-b-4 border-tertiaire pr-4'>
                <i className="bi bi-card-image text-xl"></i>
                <span className='text-xl'>Carte</span>
            </button>
            <button className='flex gap-4 items-center border-b-4 border-black w-full pl-4'>
                <i className="bi bi-images text-xl"></i>
                <span className='text-xl'>Arrière plan</span>
            </button>
        </div>
    </div>
  )
}
