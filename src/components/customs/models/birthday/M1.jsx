import React from 'react'
import M1Min from '../../../../assets/models/M1min.png'

export default function M1() {
  return (
    <div className="h-full w-full relative">
        <img src={M1Min} alt="" className='' />
        <div className='flex flex-col jusftify-center z-50 text-white absolute top-0 w-full text-center'>
            <div className='text-center mt-36 font-light'>You ara invited</div>
            <div className='my-16 text-center text-2xl'>
                Bithday <br />
                Celebration
            </div>
            <div>
                Maria Smith
            </div>
            <div className='my-4'>
                <div>Please Join Us To Celebrate</div>
            </div>
            <div className="flex mt-3 gap-4 justify-center" style={{fontSize: '0.6em'}}>
                <div className=''>
                    23 October<br />
                    saturday
                </div>
                <div className=''>
                    123 PARTY STREET. NY <br />
                    LOREM IPSUM
                </div>
                <div className=''>
                    FROM 7 PM  <br />
                    TO 11 PM
                </div>
            </div>
            <div className='text-center text-xs mt-10'>
                Call of Text (123) 456-78-90
            </div>
        </div>
    </div>
  )
}
