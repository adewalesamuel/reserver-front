import React, {useState} from 'react'
import CustomsNavigationBar from '../components/customs/CustomsNavigationBar'
import Design from '../components/customs/sections/Design'
import Details from '../components/customs/sections/Details'
import Gift from '../components/customs/sections/Gift'
import Preview from '../components/customs/sections/Preview'
import Guest from '../components/customs/sections/Guest'
import SendingMethod from '../components/customs/sections/SendingMethod'
import Send from '../components/customs/sections/Send'
import M4 from '../assets/models/M4.jpg'
import { DashboardProvider } from '../context/DashboardContext'


export default function Customs() {
    const [menu, setMenu] = useState([
        {
            label: 'Design',
            icon: 'bi-pencil-square',
            active: true,
            component: <Design model={M4}/>
        },
        {
            label: 'Détails',
            icon: 'bi-film',
            active: false,
            component: <Details/>
        },
        {
            label: 'Cadeaux',
            icon: 'bi-gift-fill',
            active: false,
            component: <Gift/>
        },
        {
            label: 'Prévisualisé',
            icon: 'bi-eye',
            active: false,
            component: <Preview/>
        },
        {
            label: 'Invités',
            icon: 'bi-person-lines-fill',
            active: false,
            component: <Guest/>
        },
        {
            label: 'Mode d\'envoi',
            icon: 'bi-mailbox-flag',
            active: false,
            component: <SendingMethod/>
        },
        {
            label: '',
            icon: 'bi-send',
            active: false,
            component: <Send/>
        },
    ])
    return (
        <div className='font-bodoni relative'>
            <CustomsNavigationBar menu={menu} setMenu={setMenu}/>
            <DashboardProvider>
                {
                    menu.map((section, index)=>{
                        if(section.active){
                            return (
                                <div key={index}>
                                    {section.component}
                                </div>
                            )
                        }
                    })
                }
            </DashboardProvider>
        </div>
    )
}
