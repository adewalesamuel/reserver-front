import React from 'react'
import NormalDropdown from '../dropdown/NormalDropdown'

export default function Header(props) {
    const dropdownItems = [
        {
            label: 'Anniversaire',
            link: '#'
        },
        {
            label: 'Mariage',
            link: '#'
        },
        {
            label: 'Soirées',
            link: '#'
        },
        {
            label: 'Salutations',
            link: '#'
        },
        {
            label: 'Propectus',
            link: '#'
        }
    ]
    return (
        <div className='font-bodoni'>
            <div className='flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    Hello, Maeva
                </div>
                <div className=''>
                    <NormalDropdown label='Créer une nouvelle' items={dropdownItems}/>
                </div>
                <div className='flex justify-right items-center gap-4'>
                    <button className='relative'>
                        <i className="bi bi-chat-left text-3xl"></i>
                        <span className='w-4 text-xs h-4 bg-red-400 rounded-full absolute -right-1 -top-1 text-white'>1</span>
                    </button>
                    <button className='relative'>
                        <i className="bi bi-bell text-3xl"></i>
                        <span className='w-4 text-xs h-4 bg-red-400 rounded-full absolute -right-1 -top-1 text-white'>0</span>
                    </button>
                </div>
            </div>
            {
                props.pageTitle  && (
                    <div className='mt-10 mb-6 text-3xl text-secondary'>
                        {props.pageTitle}
                    </div>
                )
            }
        </div>
    )
}
