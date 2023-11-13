import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function NormalDropdown(props) {
    const [displayItems, setDisplayItems] = useState(false)
    const itemsBlock = useRef(null);
    const arrow = useRef(null);
    const toggleDropdown = ()=>{
        setDisplayItems(!displayItems);
    }
    useEffect(() => {
        if(displayItems){
            itemsBlock.current.style.maxHeight = '14em'
            arrow.current.style.transform ='rotate(-90deg)'
        }else{
            itemsBlock.current.style.maxHeight = '0'
            arrow.current.style.transform ='rotate(0deg)'
        }
    }, [displayItems])

    return (
        <div className=''>
            <div>
                <button className='bg-gradient-to-t from-tertiaire to-secondary py-2 px-4 rounded-xl flex items-center gap-2' onClick={()=>toggleDropdown()}>
                    <span>{props.label}</span>
                    <i className="bi bi-caret-down text-xl duration-300" ref={arrow}></i>
                </button>
            </div>

            <ul className=' divide-y bg-white rounded-lg mt-2 max-h-0 duration-300 w-52 transition-all overflow-hidden absolute' ref={itemsBlock}>
                { props.items.map((item, index)=>{
                    return (
                        <li className='py-2 pl-2 cursor-pointer hover:bg-gradient-to-t hover:from-tertiaire hover:to-secondary hover:text-white' key={index}>
                            {
                                item.link ? (
                                    <Link to={item.link}>
                                        {item.label}
                                    </Link>
                                ):(
                                    <span>{item.label}</span>
                                )
                            }
                        </li>
                    )
                }) }
            </ul>

        </div>
    )
}
