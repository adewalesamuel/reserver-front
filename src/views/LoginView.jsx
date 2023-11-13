export function LoginView() {
    return (
        <>
            <div class="grid md:grid-cols-2 relative text-primary lg:h-screen items-center">
                <div class="bg-gradient-to-t from-[#F97E8D] to-white hidden md:block h-full">
                    <div class="pt-20 pl-20">
                        <h3 class="text-5xl max-w-sm leading-tight">Des invitations en ligne qui célèbrent tout</h3>
                    </div>
                </div>
                <div class="bg-[#8E5BDA] h-full">
                    <div style="background-image: url('{{asset('assets/images/Clip.png')}}') background-size: cover;" class="px-1 md:px-8 py-5 h-full w-full lg:flex lg:items-center lg:justify-center">
                        <div class="backdrop-blur-sm bg-white/80 p-5 md:p-10 rounded-3xl">
                            <h3 class="text-4xl">Hey! Quoi de neuf ? <br> Connectez-vous</h3>
                            <form name="loginForm">
                                <div class="md:grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-6 mt-8">
                                    <div class="mb-4 md:mb-0">
                                        <label class="" for="">Email</label></br>
                                        <input type="email" id="email" class="w-full py-4 focus:outline-none border focus:border-secondary bg-transparent border border-gray-500 rounded-full mt-2 px-4 placeholder-gray-500" placeholder="Votre Email">
                                    </div>
                                    <div class="mb-4">
                                        <label class="" for="">Mot de passe</label></br>
                                        <input type="password" id="password" class="w-full py-4 focus:outline-none border focus:border-secondary bg-transparent border border-gray-500 rounded-full mt-2 px-4 placeholder-gray-500" placeholder="Votre mot de passe">
                                    </div>
                                    <div class="col-span-2">
                                        <button class="rounded-xl bg-secondary text-primary py-4 w-full uppercase" id="submit_button">
                                            Se connecter
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="mb-10 items-center">
                                <div class="text-center my-6">
                                    <span class="">ou continuer avec :</span>
                                </div>
                                <div class="flex justify-center items-center gap-6">
                                    <div class="bg-white p-2 rounded-lg">
                                        <img src="{{asset('assets/images/Icon awesome-google.png')}}" class="h-6" alt="">
                                    </div>
                                    <div class="bg-white p-2 rounded-lg px-2.5">
                                        <img src="{{asset('assets/images/Icon awesome-apple.png')}}" class="h-6" alt="">
                                    </div>
                                    <div class="bg-white p-2 rounded-lg">
                                        <img src="{{asset('assets/images/Icon awesome-facebook.png')}}" class="h-6" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-8">
                                <span class="text-gray-500"><span class="text-red-500 underline">Mot de passe oublié ?</span> ou <a href="{{route('register')}}"><span class="text-red-500 underline">Créer un nouveau compte</span></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block absolute bottom-40 lg:right-[53em] left-56 ">
                    <img src="{{asset('assets/images/Widgets-Message.png')}}" class="h-64" alt="">
                </div>
                <div class="hidden md:block absolute bottom-16 right-[41em] lg:left-96">
                    <img src="{{asset('assets/images/Cadeau et Invitation.png')}}" class="h-[30em]" alt="">
                </div>
            </div>
        </>
    )
}