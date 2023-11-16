import clipImg from '../assets/images/Clip.png';
import googleicon from '../assets/images/Icon awesome-google.png'
import appleIcon from '../assets/images/Icon awesome-apple.png'
import facebookIcon from '../assets/images/Icon awesome-facebook.png'
import widgetMessageIcon from '../assets/images/Widgets-Message.png'
import giftInviitationIcon from '../assets/images/Cadeau et Invitation.png'
import { Components } from '../components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../services';
import { Utils } from '../utils';
import { Layouts } from '../layouts';

export function LoginView() {
    let abortController = new AbortController();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleLoginSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setErrorMessages([]);

        try {
            const payload = {
                email, password
            }

            const {user, token} = await Services.AuthService.login(
                JSON.stringify(payload), abortController.signal);

            Utils.Auth.setSessionToken(token);
            Utils.Auth.setUser(user);

            window.location.replace('/app');
        } catch (error) {
            const messages = await error.messages ?? error.message;
            setErrorMessages(messages);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }finally{
            setIsDisabled(false);
        }
    }

    return (
        <Layouts.AuthLayout>
            <div className="grid md:grid-cols-2 relative text-primary lg:h-screen 
            items-center">
                <div className="bg-gradient-to-t from-[#F97E8D] to-white hidden 
                md:block h-full">
                    <div className="pt-20 pl-20">
                        <h3 className="text-5xl max-w-sm leading-tight">
                            Des invitations en ligne qui célèbrent tout
                        </h3>
                    </div>
                </div>
                <div className="bg-[#8E5BDA] h-full">
                    <div style={{backgroundImage: `url('${clipImg}')`, backgroundSize: 'cover'}} 
                    className="px-1 md:px-8 py-5 h-full w-full lg:flex lg:items-center lg:justify-center">
                        <div className="backdrop-blur-sm bg-white/80 p-5 md:p-10 rounded-3xl">
                            <h3 className="text-4xl">Hey! Quoi de neuf ? <br /> Connectez-vous</h3>
                            <Components.ErrorMessages>
                                {errorMessages}
                            </Components.ErrorMessages>
                            <Components.LoginVForm email={email} password={password} isDisabled={isDisabled}
                            setEmail={setEmail} setPassword={setPassword} handleSubmit={handleLoginSubmit}/>
                            <div className="mb-10 items-center">
                                <div className="text-center my-6">
                                    <span className="">ou continuer avec :</span>
                                </div>
                                <div className="flex justify-center items-center gap-6">
                                    <div className="bg-white p-2 rounded-lg">
                                        <img src={googleicon} className="h-6" alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-lg px-2.5">
                                        <img src={appleIcon}className="h-6" alt="" />
                                    </div>
                                    <div className="bg-white p-2 rounded-lg">
                                        <img src={facebookIcon}className="h-6" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <span className="text-gray-500">
                                    <span className="text-red-500 underline">Mot de passe oublié ? </span> 
                                    ou <Link to="/inscription">
                                        <span className="text-red-500 underline">Créer un nouveau compte</span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-40 lg:right-[53em] left-56 ">
                    <img src={widgetMessageIcon} className="h-64" alt="" />
                </div>
                <div className="hidden md:block absolute bottom-16 right-[41em] lg:left-96">
                    <img src={giftInviitationIcon} className="h-[30em]" alt="" />
                </div>
            </div>
        </Layouts.AuthLayout>
    )
}