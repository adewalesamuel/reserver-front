import { Components } from "..";

export function ItemForm(props) {
    return (
        <form onSubmit={props.handleSbumit ?? null} className="flex items-center flex-wrap">
            <div className="w-8/12 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="name" className="uppercase block">
                    Article
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="name" name="name" type="text" 
                placeholder="Saisissez le nom de l'article" />
            </div>
            <div className="w-3/12 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="name" className="uppercase block">
                    Qté
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="name" name="name" type="text" 
                placeholder="Saisissez la quantité" />
            </div>
            <div className="w-1/12 px-4 py-2 mt-7">
                <button className="bi bi-trash-fill text-lg text-black cursor-pointer"></button>
            </div>
            <div className="w-8/12 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="name" className="uppercase block">
                    Article
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="name" name="name" type="text" 
                placeholder="Saisissez le nom de l'article" />
            </div>
            <div className="w-3/12 px-4 py-2 mt-2 md:mt-0">
                <label htmlFor="name" className="uppercase block">
                    Qté
                </label>
                <input required className="w-full border border-gray-300 rounded-xl px-6 py-3 
                focus:outline-none focus:border-primary mt-2" id="name" name="name" type="text" 
                placeholder="Saisissez la quantité" />
            </div>
            <div className="w-1/12 px-4 py-2 mt-7">
                <button className="bi bi-trash-fill text-lg text-black cursor-pointer"></button>
            </div>
            <div className="w-full px-4 py-2 mt-3 text-center">
                <button className="font-bold text-red-400 uppercase">
                    <span className="bi bi-plus font-bold align-middle text-5xl"></span>
                    <span className="align-middle text-sm">Ajouter un autre article</span>
                </button>
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