import React, {useEffect, useState} from 'react'

export default function CustomsNavigationBar({menu, setMenu}) {
    const [active, setActive] = useState({
        class: 'text-white bg-tertiaire',
        item: menu.find((item)=> item.active === true),
        index: 0
    })
    const changePage = (item_index)=>{
        setMenu((menu)=>{
            return menu.map((_, index)=>{
                return {
                    ..._,
                    active: index === item_index
                }
            })
        })
    }
    useEffect(() => {
        setActive({
            class: 'text-white bg-tertiaire',
            item: menu.find((_) => _.active),
            index: menu.findIndex((_) => _.active)
        })
    }, [menu])

    return (
        <div>
            {
                active.index > 0 && (
                    <button className='absolute z-50 text-2xl bg-white px-2 py-1 rounded-full bottom-1/2' onClick={()=>changePage(active.index - 1)}>
                        <i className="bi bi-arrow-left-circle"></i>
                    </button>
                )
            }
            {
                active.index < menu.length - 1 && (
                    <button className='absolute z-50 text-2xl bg-white px-2 py-1 rounded-full bottom-1/2 right-0' onClick={()=>changePage(active.index + 1)}>
                        <i className="bi bi-arrow-right-circle"></i>
                    </button>
                )
            }

            <div className='flex items-center text-gray-600 border border-gray-500 rounded-xl divide-x divide-gray-500'>
                {
                    menu.map((section, index)=>{
                        return (
                            <div key={index} className={`${section.active && active.class} w-1/6 flex text-gray-500 bg-gray-200 duration-300 justify-center items-center gap-3 text-lg py-2 px-4 hover:text-white hover:bg-tertiaire cursor-pointer ${index === 0 && 'rounded-l-xl'} ${index === menu.length -1 && 'rounded-r-xl'}`} onClick={()=>{changePage(index)}}>
                                <i className={`bi ${section.icon}`}></i>
                                <span>{section.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}
