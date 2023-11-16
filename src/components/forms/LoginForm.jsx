export function LoginVForm(props) {
    return (
        <form name="loginForm" onSubmit={props.handleSubmit}>
            <div className="md:grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-6 mt-8">
                <div className="mb-4 md:mb-0">
                    <label className="" htmlFor="email">Email</label><br />
                    <input disabled={props.isDisabled} type="email" id="email" name='email'
                    className="w-full py-4 focus:outline-none border focus:border-secondary 
                    bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                    placeholder-gray-500" placeholder="Votre Email" required value={props.email} 
                    onChange={e => props.setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="" htmlFor="password">Mot de passe</label><br />
                    <input disabled={props.isDisabled} type="password" id="password" name='password'
                    className="w-full py-4 focus:outline-none border focus:border-secondary 
                    bg-transparent border border-gray-500 rounded-full mt-2 px-4 
                    placeholder-gray-500" placeholder="Votre mot de passe" required 
                    value={props.password} onChange={e => props.setPassword(e.target.value)}/>
                </div>
                <div className="col-span-2">
                    <button className="rounded-xl bg-secondary text-primary py-4 w-full 
                    uppercase" id="submit_button" disabled={props.isDisabled}>
                        {props.isDisabled ? "Chargements..." : "Se connecter"}
                    </button>
                </div>
            </div>
        </form>
    )
}