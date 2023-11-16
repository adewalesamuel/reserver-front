import React, { useState } from 'react'
import { Components } from '../..'

export default function Details() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsItemModalOpen(true);
  }
  return (
    <>
      <div className='container p-0 sm:p-10'>
        <div className='shadow-xl shadow-gray-300 bg-white rounded-xl px-5 py-7 
        flex flex-wrap'>
          <div className='sm:w-full md:w-9/12 px-3'>
            <Components.EventForm handleItemClick={handleItemClick}/>
          </div>
          <div className='sm:w-full md:w-3/12 px-3 mt-10 md:mt-0'>
            <label className='uppercase block'>Ajouter</label>
            <Components.PrimaryButton classNames='w-full' handleClick={() => 
              setIsOrganizerModalOpen(true)}>
              <i className='bi bi-plus text-6xl align-middle'></i> 
              <span className='text-sm'>Co-organisateur</span>
            </Components.PrimaryButton>
            <label className='uppercase block mt-6'>Fin prévue</label>
            <Components.PrimaryButton classNames='w-full'>
              <i className='bi bi-plus text-6xl align-middle'></i> 
              <span className='text-sm'>Date et Heure</span>
            </Components.PrimaryButton>
              <label htmlFor="comment" className="uppercase block mt-6">
                  Complémenttaires
              </label>
              <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
              focus:outline-none focus:border-primary mt-2" id="comment" name="comment" 
              type="text"  placeholder="Exemple: parking ase"  />
          </div>
        </div>
      </div>
      {isItemModalOpen ? 
        <Components.Modal closeClick={() => setIsItemModalOpen(false)}>
          <div className='text-center mx-auto' style={{maxWidth: "250px"}}>
            <h2 className='uppercase text-2xl'>Liste de ce qu'il faut apporter</h2>
            <p className='text-gray-500 mt-2'>
              Dressez la liste des articles et des quantités souhaitées ci-dessous
            </p>
          </div>
          <Components.ItemForm/>
        </Components.Modal>
      : null}
      {isOrganizerModalOpen ? 
        <Components.Modal closeClick={() => setIsOrganizerModalOpen(false)}>
          <Components.OrganizerForm />
        </Components.Modal>
      : null}
    </>
  )
}
