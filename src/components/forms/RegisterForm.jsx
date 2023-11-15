export function RegisterVForm(props) {
    return (
        <form className="md:grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-6" 
        id="register-form" onSubmit={props.handleSubmit}>
            <div className="mb-4 md:mb-0">
                <label htmlFor="fullname">Nom complet</label> <br />
                <input disabled={props.isDisabled} value={props.useUser.fullname} onChange={e => 
                props.useUser.setFullname(e.target.value)} id="fullname" name="fullname" type="text" 
                className="w-full py-4 focus:outline-none border focus:border-secondary 
                bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                placeholder-gray-500" placeholder="Votre nom complet"  required/>
            </div>
            <div className="mb-4 md:mb-0">
                <label htmlFor="email">Email</label> <br />
                <input disabled={props.isDisabled} value={props.useUser.email} onChange={e => 
                props.useUser.setEmail(e.target.value)} id="email" name="email" type="text" 
                className="w-full py-4 focus:outline-none border focus:border-secondary 
                bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                placeholder-gray-500" placeholder="Votre Email"  required/>
            </div>
            <div className="mb-4 md:mb-0 col-span-2">
                <label htmlFor="phone_number">Numéro de téléphone</label> <br />
                <input disabled={props.isDisabled} value={props.useUser.phone_number} onChange={e => 
                props.useUser.setPhone_number(e.target.value)} id="phone_number" name="phone_number" 
                type="text" className="w-full py-4 focus:outline-none border focus:border-secondary 
                bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                placeholder-gray-500" placeholder="Votre numéro de téléphone"  required/>
            </div>
            <div className="mb-4 md:mb-0">
                <label htmlFor="password">Mot de passe</label> <br />
                <input disabled={props.isDisabled} value={props.useUser.password} onChange={e => 
                props.useUser.setPassword(e.target.value)} id="password" name="password" type="password" 
                className="w-full py-4 focus:outline-none border focus:border-secondary 
                bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                placeholder-gray-500" placeholder="Votre mot de passe"  required/>
            </div>
            <div className="mb-4 md:mb-0">
                <label  htmlFor="confirm_password">Mot de passe</label> <br />
                <input disabled={props.isDisabled} value={props.useUser.confirm_password} onChange={e => 
                props.useUser.setConfirm_password(e.target.value)} id="confirm_password" 
                name="confirm_password" type="password" className="w-full py-4 focus:outline-none border 
                focus:border-secondary bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                placeholder-gray-500" placeholder="Votre mot de passe"  required/>
            </div>
            <div className="col-span-2 my-6 md:my-0 text-center">
                <label className="cursor-pointer">
                    <input disabled={props.isDisabled} value={props.useUser.condition} onChange={() => 
                    props.useUser.setCondition(!props.useUser.condition)} id="condition" name="condition" 
                    type="checkbox" className="focus:accent-tertiaire cursor-pointer mr-3" /> 
                    <span className="select-none">J'ai lu et j'accepte les conditions générales.</span>
                </label>
            </div>
            <div className="col-span-2">
                <button id="submit_button" className="rounded-xl bg-secondary text-primary py-4 w-full" 
                disabled={props.isDisabled}>
                    {props.isDisabled ? "Chargemets..." : "CRÉER UN COMPTE"}
                </button>
            </div>
        </form>
    )
}