//@ts-expect-error
import Logo from "../../assets/svgs/logo"

const Header = () => {

    return (
        <div className="w-full flex flex-column justify-center">
            <nav className="w-[85%] flex items-center justify-between flex-wrap bg-darkPurple p-4">
                <div className="flex items-center flex-shrink-0 text-white">
                    <Logo />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            PARA VOCÊ
                        </a>
                        <a href="/empresas" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            PARA EMPRESAS
                        </a>
                        <a href="/escolas" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            PARA ESCOLAS
                        </a>
                        <a href="/sobre" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            SOBRE
                        </a>
                        <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            BLOG
                        </a>
                        <a href="/faq" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white mr-4">
                            FAQ
                        </a>
                        <a href="/contato" className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium hover:text-white">
                            CONTATO
                        </a>
                    </div>
                </div>
                <div>
                    <a href="/perfil" className="inline-block text-sm px-4 py-2 bg-golden leading-none rounded-[100px] border rounded text-black font-bold border-darkGolden hover:bg-darkGolden mt-4 lg:mt-0">LOGIN</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;