import React from 'react'

export default function CustomsOptions() {
    const colors = [
        'white',
        'rgb(100 116 139)',
        'rgb(107 114 128)',
        'rgb(113 113 122)',
        'rgb(115 115 115)',
        'rgb(120 113 108)',
        'rgb(239 68 68)',
        'rgb(249 115 22)',
        'rgb(245 158 11)',
        'rgb(234 179 8)',
        'rgb(132 204 22)',
        'rgb(34 197 94)',
        'rgb(16 185 129)',
        'rgb(20 184 166)',
        'rgb(6 182 212)',
        'rgb(14 165 233)',
        'rgb(59 130 246)',
        'rgb(99 102 241)',
        'rgb(139 92 246)',
        'rgb(168 85 247)',
        'rgb(217 70 239)',
        'rgb(236 72 153)',
        'rgb(244 63 94)',
    ]
  return (
    <div className='bg-white px-6 py-4 rounded-xl shadow-xl shadow-gray-300 text-primary space-y-6'>
        <div>
            <label htmlFor="" className='text-lg uppercase'>Edition de text</label>
            <div className='pt-2'>
                <textarea name="" id="" rows="4" className='w-full border rounded-xl p-2 focus:outline-none focus:border-primary'></textarea>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
            <div>
                <label htmlFor="" className='uppercase'>Style de text</label>
                <div className='mt-1 col-span-2'>
                    <select name="" id="" className='bg-white border border-gray-300 w-full py-4 px-4 rounded-xl'>
                        <option value="">Lorem Ipsum</option>
                        <option value="">font 1</option>
                        <option value="">font 1</option>
                        <option value="">font 1</option>
                        <option value="">font 1</option>
                        <option value="">font 1</option>
                    </select>
                </div>
            </div>
            <div className='col-span-2'>
                <label htmlFor="" className='uppercase'>Taille du texte</label>
                <div className='flex mt-1 items-center gap-6 border py-2 pl-4 pr-2 rounded-xl border-gray-300'>
                    <input type="range" className='rounded-lg accent-tertiaire w-full'/>
                    <div className='border p-2 rounded-xl border-gray-300 text-sm'>
                        12px
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='flex items-center mb-2'>
                <div htmlFor="" className='w-1/2 uppercase'>Couleur du texte</div>
                <div className='w-full flex items-end justify-end gap-4'>
                    <div className=''>Ajouter un code couleur</div>
                    <div className='flex flex-col text-center items-'>
                        <span>A</span>
                        <div className='w-6 h-1 bg-tertiaire'></div>
                    </div>
                    <input type="text" className='border-b w-20 focus:outline-none focus:border-primary px-2 text-sm' placeholder='#2535636'/>
                </div>
            </div>
            <div className='border p-4 rounded-xl flex flex-wrap gap-3'>
                {
                    colors.map((color, index)=>{
                        return (
                            <div key={index} className={`h-8 w-8 border rounded-full cursor-pointer`} style={{'backgroundColor': color}}></div>
                        )
                    })
                }
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div>
                <label className='text-xl uppercase' htmlFor="">Format de texte</label>
                <div className='p-8 border rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <button className='border border-xl px-4 py-1 rounded-xl'>AA</button>
                        <button className='border border-xl px-4 py-1 rounded-xl'>aa</button>
                        <button className='border border-xl px-4 py-1 rounded-xl'>Aa</button>
                    </div>
                    <div className='flex justify-between items-center mx-10 mt-4'>
                        <button className='border w-10 text-center text-lg h-10 rounded-full'>
                            <i className="bi bi-text-left"></i>
                        </button>
                        <button className='border w-10 text-center text-lg h-10 rounded-full'>
                            <i className="bi bi-text-center"></i>
                        </button>
                        <button className='border w-10 text-center text-lg h-10 rounded-full'>
                            <i className="bi bi-text-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <label className='text-xl uppercase' htmlFor="">Espace de texte</label>
                <div className='p-4 border rounded-xl'>
                    <div className=''>
                        <label htmlFor="">Espace des lettres</label>
                        <div className='pl-4 flex gap-4 items-center'>
                            <input type="range" className='w-full accent-tertiaire' />
                            <div className='border p-2 rounded-xl border-gray-300 text-sm'>
                                8%
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Espace des Lignes</label>
                        <div className='pl-4 flex gap-4 items-center'>
                            <input type="range" className='w-full accent-tertiaire' />
                            <div className='border p-2 rounded-xl border-gray-300 text-sm'>
                                8%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
