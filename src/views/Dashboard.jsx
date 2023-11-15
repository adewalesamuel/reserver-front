import React from 'react'
import Sidebar from '../components/headers/Sidebar'

export default function Dashboard({component, activeSideBarText}) {
  return (
    <div className='flex bg-gray-200 w-full'>
        <div className={`h-full ${activeSideBarText ? 'w-[25%]' : 'w-[10%]'}`}>
            <Sidebar activeSideBarText={activeSideBarText} />
        </div>
        <div className='w-full px-6 py-8 bg--200 h-full relative'>
            <div className='absolute z-50 text-2xl bg-white px-2 py-1 rounded-full bottom-4 right-10 shadow-xl shadow-gray-500'>
                <i className="bi bi-question-circle"></i>
            </div>
            {component}
        </div>
    </div>
  )
}
