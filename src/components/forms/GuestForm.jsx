import { Components } from "..";

export function GuestForm(props) {
    return (
        <form onSubmit={props.handleSubmit ?? null} className="flex flex-wrap">
            <div className="w-full px-2 py-2 mt-2 md:mt-0">
                <label htmlFor="fullname" className="uppercase block">
                    Nom
                </label>
                <input className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="fullname" 
                name="fullname" type="text" placeholder="Nom complet" />
            </div>            
            <div className="w-full sm:w-1/2 px-2 py-2 mt-2 md:mt-0">
                <label htmlFor="email" className=" block">
                    Email <sup className="text-red-600">*</sup>
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="email" name="email" type="email" 
                placeholder="Adresse e-mail" />
            </div>            
            <div className="w-full sm:w-1/2 px-2 py-2 mt-2 md:mt-0">
                <label htmlFor="phone_number" className=" block">
                    Numéro de téléphone
                </label>
                <input className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="phone_number" 
                name="phone_number" type="text" placeholder="XX XX XX XX" />
            </div>            
            <div className="w-full px-2 py-2 mt-2 text-center">
                <Components.PrimaryButton classNames={'px-10 py-4 w-full'}>
                    <div className="w-full text-center">
                        Ajouter un invité
                    </div>
                </Components.PrimaryButton>
            </div>
        </form>
    )
}