import React, {useEffect, useState} from 'react'
import Header from '../components/headers/Header'
import { usePageActive } from '../context/PageActiveContext'
import { Link } from 'react-router-dom';


export default function List() {
    const {setPage, models} = usePageActive();
    const [current_category, setCurrentCategory] = useState('birthday');

    useEffect(() => {
        setPage('List');
    }, [])

    const [categories, setCategories] = useState([
        {
            label: 'Anniversaire',
            value: 'birthday'
        },
        {
            label: 'Mariage',
            value: 'wedding'
        },
        {
            label: 'Entreprise',
            value: 'company'
        },
        {
            label: 'Bébé et enfants',
            value: 'babyc'
        },
        {
            label: 'Soirée',
            value: 'night'
        },
        {
            label: 'Prospectus',
            value: 'leaflet'
        },
        {
            label: 'Salutations',
            value: 'greeting'
        },
    ])


    return (
        <div className='font-bodoni'>
            <Header pageTitle='Vos Invitations'/>
            <div className='flex justify-between items-center'>
                {categories.map((category, index)=>{
                    return (
                        <div key={index} className={`text-primary text-lg uppercase cursor-pointer  border-b-2 ${current_category === category.value ? 'text-tertiaire border-primary' : 'hover:text-tertiaire hover:border-primary border-tertiaire'} duration-300`} onClick={()=>setCurrentCategory(category.value)}>
                            <span>{category.label}</span>
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
                    <label className='text-xl capitalize hover:text-tertiaire cursor-pointer duration-300' htmlFor="basic">Modèle basique <i className="bi bi-pencil-square"></i></label>
                </div>
                <div className='flex gap-2 items-center hover:text-tertiaire cursor-pointer duration-300 select-none'>
                    <input type="checkbox" className='' id='exclu'/>
                    <label className='text-xl capitalize hover:text-tertiaire cursor-pointer duration-300' htmlFor="exclu">Modèles exclusif <i className="bi bi bi-currency-exchange"></i></label>
                </div>
            </div>
            <div className='overflow-y-auto h-[35em] pb-10'>

                <div className='grid grid-cols-4 gap-6 items'>
                    {
                        models.map((model, index)=>{
                            return (
                                model.category === current_category && (
                                    <Link to={`/app/customs/${model.id}`} className='h-88 flex flex-col justify-between mt-4' key={index}>
                                        <img src={model.model} className='rounded-lg object' alt="" />
                                        <div className='text-bottom pt-4'>{model.label}</div>
                                    </Link>
                                )
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
