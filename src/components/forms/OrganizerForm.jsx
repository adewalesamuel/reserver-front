import { Components } from "..";

export function OrganizerForm(props) {
    return (
        <form onSubmit={props.handleSubmit ?? null} className="flex flex-wrap">
            <div className="w-full px-4 py-2 mt-2 md:mt-4">
                <label htmlFor="fullname" className="uppercase block">
                    Nom <sup className="text-red-600">*</sup>
                </label>
                <input className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="fullname" name="fullname" 
                type="text" placeholder="Nom du Co-organisateur" />
            </div>
            <div className="w-full px-4 py-2 mt-2 md:mt-4">
                <label htmlFor="email" className="uppercase block">
                    Email <sup className="text-red-600">*</sup>
                </label>
                <input className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="email" name="email" 
                type="email" placeholder="E-mail du Co-organisateur" />
            </div>
            <div className="w-full px-4 py-2 mt-2 text-center">
                <Components.PrimaryButton classNames={'px-10 py-4'}>
                    <div className="w-full text-center">
                        Sauvegarder
                    </div>
                </Components.PrimaryButton>
            </div>
        </form>
    )
}