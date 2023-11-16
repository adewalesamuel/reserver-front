export function EventForm(props) {
    return (
        <form onSubmit={props.handleSubmit ?? null} className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="name" className="uppercase block">
                    Titre de l'évènement <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="name" name="name" type="text" 
                placeholder="Saisissez le titre de votre évènement" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="organizer" className="uppercase block">
                    Organisateur(-trice )<sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="organizer" name="organizer" 
                type="text"  placeholder="Maeva Kone"   />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="phone_number" className="uppercase block">
                    Numéro de téléphone
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="phone_number" name="phone_number" 
                type="text"  placeholder="+225 XX XX XX XX XX"  />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="start_date" className="uppercase block">
                    Date <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="start_date" 
                name="start_date" type="date" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="time" className="uppercase block">
                    Heure <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="time" name="time" type="time" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="timezone" className="uppercase block">
                    Fuseau Horraire <sup className="text-red-600">*</sup>
                </label>
                <select required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="timezone" name="timezone">
                    <option hidden>Heure Côte d'Ivoire (Afrique de l'ouest)</option>
                </select>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="type" className="uppercase block">
                    Localisatiù <sup className="text-red-600">*</sup>
                </label>
            <label htmlFor="offline" className="block cursor-pointer mt-1">
                <input type="radio" name="type" id="offline" className=""/> En personne (surplace)
            </label>
            <label htmlFor="online" className="block cursor-pointer mt-1">
                <input type="radio" name="type" id="online"/> Lieu virtuel (en ligne)
            </label>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="adresse" className="uppercase block">
                    Lien ou adresse du lieu <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="adresse" name="adresse" 
                type="adresse" placeholder="La rue ou le quartier" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="city" className="uppercase block">
                    Ville <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="city" name="city" type="text"
                placeholder="Nom de la ville"/>
            </div>
            <div className="w-full sm:w-1/2 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="note" className="uppercase block">Note de l'organisateur</label>
                <textarea className="w-full border border-gray-300 rounded-xl px-6 py-3 focus:outline-none 
                focus:border-primary mt-2" id="note" name="note" type="note" rows={4}
                placeholder="La rue ou le quartier"></textarea>
            </div>
            <div className="w-full sm:w-1/2 px-4 py-2 mt-2 md:mt-7">
                <label htmlFor="note" className="uppercase block">
                    Liste de ce qu'il faut apporter
                </label>
                <div className="border border-gray-300 rounded-lg p-4 flex flex-nowrap items-center">
                    <div className="w-9/12 text-gray-400 pr-8">
                        Organisez la les contributiosn et desser la liste des articles à
                        apporter à l'évènement
                    </div>
                    <div className="w-3/12 relative custom-checkbox">
                        <input type="checkbox" className="w-full h-full absolute cursor-pointer" 
                        style={{opacity: '0', zIndex: 10}} onChange={props.handleItemClick}/>
                        <div className="w-full rounded-full bg-gray-500 h-9 relative custom-checkbox-bg" 
                        style={{padding: "2px"}}>
                            <div className="h-8 absolute w-8 bg-white rounded-full custom-checkbox-fg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}