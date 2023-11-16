import React from 'react'
import { Components } from '../..'

export default function Guest() {
  return (
    <>
      <div className='container p-0 sm:p-5 flex flex-wrap'>
        <div className='w-full lg:w-5/12 p-5'>
            <div className='shadow-xl shadow-gray-300 bg-white rounded-xl p-5'>
              <h2 className='text-2xl font-bold text-center mb-3'>Configuration RSVP</h2>
              <div className='w-full flex flex-wrap mb-3'>
                <div className='w-1/2 p-2'>
                  <button className='border border-grey-800 rounded-xl p-3 text-left w-full'>
                    <i className='bi text-2xl bi-envelope-check'></i>
                    <p className='pt-2'>
                      Utliser les listes d'anciens invités
                    </p>
                  </button>
                </div>
                <div className='w-1/2 p-2'>
                  <button className='border border-grey-800 rounded-xl p-3 text-left w-full'>
                    <i className='bi bi-person-vcard-fill text-2xl'></i>
                    <p className='pt-2'>
                      Rechercher dans le répertoire d'adresse
                    </p>
                  </button>
                </div>
                <div className='w-1/2 p-2'>
                  <button className='border border-grey-800 rounded-xl p-3 text-left w-full'>
                    <i className='bi bi-google text-2xl'></i>
                    <p className='pt-2'>
                      Importer depuis Google
                    </p>
                  </button>
                </div>
                <div className='w-1/2 p-2'>
                  <button className='border border-grey-800 rounded-xl p-3 text-left w-full'>
                    <i className='bi bi-upload text-2xl'></i>
                    <p className='pt-2'>
                      Télécharger votre fichier (csv, xls)
                    </p>
                  </button>
                </div>
              </div>
              <Components.GuestForm />
            </div>
        </div>
        <div className='w-full lg:w-7/12 p-5'>
            <div className='shadow-xl shadow-gray-300 bg-white rounded-xl p-5'>
              <h2 className='text-2xl font-bold uppercase text-center mb-3'>
                Invités ajoutés
              </h2>
              <div className='w-full mt-2 flex items-center gap-3'>
                <div className='' style={{flexBasis: '70%'}}>
                  <input required className="w-full px-6 py-3 border border-gray-300 rounded-xl 
                  px-2 focus:outline-none focus:border-primary" id="search" name="search" 
                  type="search" placeholder="Rechercher des invites"/>
                </div>
                <div className=''>
                  <div className=' border border-gray-300 rounded-xl flex items-center 
                  justify-center w-12 h-12'>
                    <button className='bi bi-filter text-2xl'></button>
                  </div>
                </div>
                <div className=''>
                  <div className='flex items-center justify-center w-12 h-12 border 
                  border-gray-300 rounded-xl'>
                    <button className='bi bi-trash-fill text-lg'></button>
                  </div>
                </div>
                <div className='' style={{flexBasis: "10%"}}>
                  <div className='p-3 text-center uppercase text-xs'>
                    Total invites <br /> (0)
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
