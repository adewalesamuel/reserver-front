import React from 'react'
import { Components } from '../..'

export default function Details() {
  return (
    <div className='container p-0 sm:p-10'>
      <div className='shadow-xl shadow-gray-300 bg-white rounded-xl px-5 py-7 flex flex-wrap'>
        <div className='sm:w-full md:w-9/12 px-3'>
          <Components.EventForm />
        </div>
        <div className='sm:w-full md:w-3/12 px-3 mt-10 md:mt-0'>
          <label className='uppercase block'>Ajouter</label>
          <button className='rounded-xl block bg-gradient-to-t from-tertiaire to-secondary 
          uppercase px-4 text-white w-full mt-3 text-left'>
            <i className='bi bi-plus text-6xl align-middle'></i> 
            <span className='text-sm'>Co-organisateur</span>
          </button>
          <label className='uppercase block mt-6'>Fin prévue</label>
          <button className='rounded-xl block bg-gradient-to-t from-tertiaire to-secondary 
          uppercase px-4 text-white w-full mt-3 text-left'>
            <i className='bi bi-plus text-6xl align-middle'></i> 
            <span className='text-sm'>Date et Heure</span>
          </button>
        </div>
      </div>
    </div>
  )
}
