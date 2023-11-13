import React from 'react'
import Face from '../Face'
import CustomsOptions from '../CustomsOptions'
import { useDashBoardContext } from '../../../context/DashboardContext'

export default function Design({model}) {
    const {textColor} = useDashBoardContext();
    return (
        <div className='grid grid-cols-2 mt-6 overflow-y-auto px-14 relative'>
            <div className='flex'>
                <div className='w-[80%]'>
                    <Face />
                    <div className='py-4  pb-14'>
                        <img src={model} className='object-contain h-[40em]' alt=""/>
                    </div>
                </div>
                <div className='flex flex-col w-[20%] gap-10'>
                    <button>
                        <i className="bi bi-arrow-counterclockwise text-4xl"></i>
                        <div className='font-bold'>Annuler</div>
                    </button>
                    <button>
                        <i className="bi bi-arrow-clockwise text-4xl"></i>
                        <div className='font-bold'>Rétablir</div>
                    </button>
                </div>
            </div>
            <div>
                <CustomsOptions />
            </div>
        </div>
    )
}
