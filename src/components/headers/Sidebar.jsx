import React, {useEffect} from 'react'
import MainLogo from '../../assets/images/MainLogo.png'
import unknowProfile from '../../assets/images/unknowProfile.png'
import { Link } from 'react-router-dom'
import { usePageActive } from '../../context/PageActiveContext'

export default function Sidebar(props) {
    const {page, active} = usePageActive();

    return (
        <div className='h-full bg-white shadow-2xl shadow-gray-300'>
            <ul className='flex flex-col justify-between items-center py-5 font-bodoni text-primary text-lg'>
                <li>
                    <Link>
                        <img src={MainLogo} className='h-20' alt="" />
                    </Link>
                </li>
                <li className={`mt-10 ${props.activeSideBarText && 'w-3/4'}`}>
                    <Link className={`${page === 'Invitations' && active} px-4 duration-300 hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white py-3 rounded-xl flex justify-center gap-2 font-semibold items-center`}>
                        <i className={`bi bi-envelope ${props.activeSideBarText ? 'w-1/6 text-xl' : 'text-2xl'}`}></i>
                        { props.activeSideBarText && <span className='w-full'>Mes invitations</span> }
                    </Link>
                </li>
                <li className={`mt-10 ${props.activeSideBarText && 'w-3/4'}`}>
                <Link className={`${page === 'List' && active} px-4 duration-300 hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white py-3 rounded-xl flex justify-center gap-2 font-semibold items-center`}>
                        <i className={`bi bi-calendar-check ${props.activeSideBarText ? 'w-1/6 text-xl' : 'text-2xl'}`}></i>
                        { props.activeSideBarText && <span className='w-full'>Tous les Designs</span> }
                    </Link>
                </li>
                <li className={`mt-4 ${props.activeSideBarText && 'w-3/4'}`}>
                    <Link className={`${page === 'Events' && active} px-4 duration-300 hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white py-3 rounded-xl flex justify-center gap-2 font-semibold items-center`}>
                        <i className={`bi bi-search ${props.activeSideBarText ? 'w-1/6 text-xl' : 'text-2xl'}`}></i>
                        { props.activeSideBarText && <span className='w-full'>Mes évènements</span> }
                    </Link>
                </li>
                <li className={`mt-4 ${props.activeSideBarText && 'w-3/4'}`}>
                    <Link className={`${page === 'Mailings' && active} px-4 duration-300 hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white py-3 rounded-xl flex justify-center gap-2 font-semibold items-center`}>
                        <i className={`bi bi-calendar-check ${props.activeSideBarText ? 'w-1/6 text-xl' : 'text-2xl'}`}></i>
                        { props.activeSideBarText && <span className='w-full'>Mailings reçus</span> }
                    </Link>
                </li>
                <li className={`mt-4 ${props.activeSideBarText && 'w-3/4'}`}>
                    <Link className={`${page === 'NoteBook' && active} px-4 duration-300 hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white py-3 rounded-xl flex justify-center gap-2 font-semibold items-center`}>
                        <i className={`bi bi-file-person ${props.activeSideBarText ? 'w-1/6 text-xl' : 'text-2xl'}`}></i>
                        { props.activeSideBarText && <span className='w-full'>Carnet d'adresse</span> }
                    </Link>
                </li>
            </ul>
            <div className='font-bodoni mt-10 text-primary'>
                <div>
                    <img src={unknowProfile} className={`${props.activeSideBarText ? 'h-36' : 'h-20'}  mx-auto rounded-full border border-primary`} alt="" />
                </div>
                <div className='flex justify-center items-center mt-10 gap-3'>
                    <i className="bi bi-sliders"></i>
                    { props.activeSideBarText && <span className='text-lg font-bold'>Maeva Koné</span> }
                </div>
                <div className='flex justify-center items-center mt-3 gap-3'>
                    <i className="bi bi-box-arrow-left"></i>
                    { props.activeSideBarText && <span className='text-lg font-bold'>Déconnecter</span> }
                </div>
            </div>
        </div>
    )
}
