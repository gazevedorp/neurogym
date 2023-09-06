import logoGolden from "../../assets/images/logoGolden.png"
import logoBlue from "../../assets/images/logoBlue.png"
import logoPurple from "../../assets/images/logoPurple.png"

interface HeaderProps {
    color?: 'blue' | 'purple',
}

const Footer = ({ color }: HeaderProps) => {
    return (
        <footer className="bg-darkPurple">
            <div className="mx-auto w-full max-w-screen-xl border-t border-golden p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img className="h-10" src={color === "purple" ? logoPurple : color === "blue" ? logoBlue : logoGolden} />
                        </a>
                        <p className="mt-4 font-medium w-[250px] text-golden">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="mt-4 flex">
                            <a href="#" className="text-golden hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6 mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-golden hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-[161px] h-[168px] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">Para Você</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">Para Empresas</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">Para EScolas</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">Certificado</div>
                        </div>
                    </div>
                    <div className="w-[161px] h-[168px] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">SOBRE</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">BLOG</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">FAQ</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-3 h-3 relative border-2 border-golden rounded-xl" />
                            <div className="text-white text-base font-normal uppercase tracking-tight">CONTATO</div>
                        </div>
                    </div>
                    <div className="w-[452px] h-[170px] relative">
                        <div className="w-[452px] h-12 px-6 py-4 left-0 top-[122px] absolute bg-golden rounded-[100px] shadow border-l-2 border-r-2 border-t border-b border-yellow-900 justify-center items-center gap-4 inline-flex">
                            <div className="text-slate-950 text-base font-bold uppercase tracking-tight">Inscrever-se</div>
                        </div>
                        <div className="w-[452px] h-12 px-4 left-0 top-[50px] absolute bg-white rounded border border-yellow-600 justify-start items-center gap-4 inline-flex">
                            <div className="opacity-50 text-slate-950 text-base font-normal">Seu E-mail</div>
                        </div>
                        <div className="left-0 top-0 absolute text-golden font-bold">Novidades e Promoções</div>
                    </div>
                </div>
                <hr className="my-6 border-t border-golden  sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">Termos e Condições <a href="https://flowbite.com/" className="hover:underline"> Política de Privacidade</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;