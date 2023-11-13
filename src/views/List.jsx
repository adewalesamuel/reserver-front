import React, {useEffect, useState} from 'react'
import Header from '../components/headers/Header'
import { usePageActive } from '../context/PageActiveContext'
import M1 from '../assets/models/M1.jpg'
import M2 from '../assets/models/M2.jpg'
import M3 from '../assets/models/M3.jpg'
import M4 from '../assets/models/M4.jpg'


export default function List() {
    const {setPage} = usePageActive();
    useEffect(() => {
        setPage('List');
    }, [])

    const [categories, setCategories] = useState([
        'Anniversaire',
        'Mariage',
        'Entreprise',
        'Bébé et enfants',
        'Soirée',
        'Salutations',
        'Prospectus'
    ])

    const models = [
        {
            model: M1,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M2,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M3,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M4,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M1,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M2,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M3,
            label: 'Lorem Ipsum',
            free: true
        },
        {
            model: M4,
            label: 'Lorem Ipsum',
            free: true
        },
    ]

    return (
        <div className='font-bodoni'>
            <Header pageTitle='Vos Invitations'/>
            <div className='flex justify-between items-center'>
                {categories.map((category, index)=>{
                    return (
                        <div key={index} className='text-primary text-lg uppercase cursor-pointer hover:text-tertiaire border-b-2 border-tertiaire hover:border-primary duration-300'>
                            <span>{category}</span>
                        </div>
                    )
                })}
            </div>
            <div className='mt-6 mb-2 flex gap-16 text-primary'>
                <div className='flex gap-2 items-center hover:text-tertiaire cursor-pointer duration-300 select-none'>
                    <i className="bi bi-filter text-3xl"></i>
                    <span className='text-xl capitalize'>Filtre</span>
                </div>
                <div className='flex gap-2 items-center select-none'>
                    <input type="checkbox" className='' id='basic'/>
                    <label className='text-xl capitalize hover:text-tertiaire cursor-pointer duration-300' for="basic">Modèle nasique <i className="bi bi-pencil-square"></i></label>
                </div>
                <div className='flex gap-2 items-center hover:text-tertiaire cursor-pointer duration-300 select-none'>
                    <input type="checkbox" className='' id='exclu'/>
                    <label className='text-xl capitalize hover:text-tertiaire cursor-pointer duration-300' for="exclu">Modèles exclusif <i className="bi bi bi-currency-exchange"></i></label>
                </div>
            </div>
            <div className='overflow-y-auto h-[35em] pb-10'>

                <div className='grid grid-cols-4 gap-6 items'>
                    {
                        models.map((model, index)=>{
                            return (
                                <div className='h-88 flex flex-col justify-between mt-4' key={index}>
                                    <img src={model.model} className='rounded-lg object' alt="" />
                                    <div className='text-bottom pt-4'>{model.label}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
