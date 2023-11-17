import React, {useContext, createContext, useState} from 'react'
// import { useNavigate } from 'react-router-dom';


import M1 from '../assets/models/M1.jpg'
import M2 from '../assets/models/M2.jpg'
import M3 from '../assets/models/M3.jpg'
import M4 from '../assets/models/M4.jpg'

import BabyM1 from '../components/customs/models/babychild/M1';
import BabyM2 from '../components/customs/models/babychild/M2';
import BabyM3 from '../components/customs/models/babychild/M3';
import BabyM4 from '../components/customs/models/babychild/M4';
import BabyM5 from '../components/customs/models/babychild/M5';

import BirthM1 from '../components/customs/models/birthday/M1';
import BirthM2 from '../components/customs/models/birthday/M2';
import BirthM3 from '../components/customs/models/birthday/M3';
import BirthM4 from '../components/customs/models/birthday/M4';
import BirthM5 from '../components/customs/models/birthday/M5';

import CompanyM1 from '../components/customs/models/company/M1';
import CompanyM2 from '../components/customs/models/company/M2';
import CompanyM3 from '../components/customs/models/company/M3';
import CompanyM4 from '../components/customs/models/company/M4';
import CompanyM5 from '../components/customs/models/company/M5';

import GreetingM1 from '../components/customs/models/greeting/M1';
import GreetingM2 from '../components/customs/models/greeting/M2';
import GreetingM3 from '../components/customs/models/greeting/M3';
import GreetingM4 from '../components/customs/models/greeting/M4';
import GreetingM5 from '../components/customs/models/greeting/M5';

import LeafletM1 from '../components/customs/models/leaflet/M1';
import LeafletM2 from '../components/customs/models/leaflet/M2';
import LeafletM3 from '../components/customs/models/leaflet/M3';
import LeafletM4 from '../components/customs/models/leaflet/M4';
import LeafletM5 from '../components/customs/models/leaflet/M5';

import NightM1 from '../components/customs/models/night/M1';
import NightM2 from '../components/customs/models/night/M2';
import NightM3 from '../components/customs/models/night/M3';
import NightM4 from '../components/customs/models/night/M4';
import NightM5 from '../components/customs/models/night/M5';

import WeddingM1 from '../components/customs/models/wedding/M1';
import WeddingM2 from '../components/customs/models/wedding/M2';
import WeddingM3 from '../components/customs/models/wedding/M3';
import WeddingM4 from '../components/customs/models/wedding/M4';
import WeddingM5 from '../components/customs/models/wedding/M5';

const PageActiveContext = createContext();

export function PageActiveProvider({children}) {
    const [page, setPage] = useState('List');
    const active = 'duration-300 bg-gradient-to-t from-tertiaire to-secondary text-white';
    const models = [
        {
            id: 'model-1',
            model: M1,
            label: 'Lorem Ipsum',
            free: true,
            category: 'babyc',
            model_code: <BabyM1/>
        },
        {
            id: 'model-2',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'babyc',
            model_code: <BabyM2/>
        },
        {
            id: 'model-3',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'babyc',
            model_code: <BabyM3/>
        },
        {
            id: 'model-4',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'babyc',
            model_code: <BabyM4/>
        },
        {
            id: 'model-5',
            model: M1,
            label: 'Lorem Ipsum',
            free: true,
            category: 'babyc',
            model_code: <BabyM5/>
        },
        //Birthday
        {
            id: 'model-6',
            model: M1,
            label: 'Lorem Ipsum',
            free: true,
            category: 'birthday',
            model_code: <BirthM1/>
        },
        {
            id: 'model-7',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'birthday',
            model_code: <BirthM2/>
        },
        {
            id: 'model-8',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'birthday',
            model_code: <BirthM3/>
        },
        {
            id: 'model-9',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'birthday',
            model_code: <BirthM4/>
        },
        {
            id: 'model-10',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'birthday',
            model_code: <BirthM5/>
        },

        //Company
         {
            id: 'model-11',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'company',
            model_code: <CompanyM1/>
        },
        {
            id: 'model-12',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'company',
            model_code: <CompanyM2/>
        },
        {
            id: 'model-13',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'company',
            model_code: <CompanyM3/>
        },
        {
            id: 'model-14',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'company',
            model_code: <CompanyM4/>
        },
        {
            id: 'model-15',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'company',
            model_code: <CompanyM5/>
        },

        //Greeting
        {
            id: 'model-16',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'greeting',
            model_code: <GreetingM1/>
        },
        {
            id: 'model-17',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'greeting',
            model_code: <GreetingM2/>
        },
        {
            id: 'model-18',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'greeting',
            model_code: <GreetingM3/>
        },
        {
            id: 'model-19',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'greeting',
            model_code: <GreetingM4/>
        },
        {
            id: 'model-20',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'greeting',
            model_code: <GreetingM5/>
        },

        //Leaflet
         {
            id: 'model-21',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'leaflet',
            model_code: <LeafletM1/>
        },
        {
            id: 'model-22',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'leaflet',
            model_code: <LeafletM2/>
        },
        {
            id: 'model-23',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'leaflet',
            model_code: <LeafletM3/>
        },
        {
            id: 'model-24',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'leaflet',
            model_code: <LeafletM4/>
        },
        {
            id: 'model-25',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'leaflet',
            model_code: <LeafletM5/>
        },

        //Night
         {
            id: 'model-26',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'night',
            model_code: <NightM1/>
        },
        {
            id: 'model-27',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'night',
            model_code: <NightM2/>
        },
        {
            id: 'model-28',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'night',
            model_code: <NightM3/>
        },
        {
            id: 'model-29',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'night',
            model_code: <NightM4/>
        },
        {
            id: 'model-30',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'night',
            model_code: <NightM5/>
        },

        //Wedding
         {
            id: 'model-31',
            model: M2,
            label: 'Lorem Ipsum',
            free: true,
            category: 'wedding',
            model_code: <WeddingM1/>
        },
        {
            id: 'model-32',
            model: M3,
            label: 'Lorem Ipsum',
            free: true,
            category: 'wedding',
            model_code: <WeddingM2/>
        },
        {
            id: 'model-33',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'wedding',
            model_code: <WeddingM3/>
        },
        {
            id: 'model-34',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'wedding',
            model_code: <WeddingM4/>
        },
        {
            id: 'model-35',
            model: M4,
            label: 'Lorem Ipsum',
            free: true,
            category: 'wedding',
            model_code: <WeddingM5/>
        }

    ]

    return (
        <PageActiveContext.Provider value={{page, setPage, active, models}}>
            {children}
        </PageActiveContext.Provider>
  )
}
export const usePageActive = ()=>{
    return useContext(PageActiveContext);
}
