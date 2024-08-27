import corgi from '../../assets/corgi-log.png'
const Header = () => {
  return (
    <nav>
       <header className="bg-customWhite text-gray-800 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
     
                <div className="flex items-center space-x-6">
                    <div className="">
                       
                        <img src={corgi} alt="corgi" className='w-140' />
                    </div>

               
                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-gray-400">About</a>
                        <a href="#pricing" className="hover:text-gray-400">Pricing</a>
                        <a href="#products" className="hover:text-gray-400">Products</a>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                    </nav>
                </div>

            
                <div className="flex items-center space-x-4">
                    <a href="#login" className="bg-customWhite border-2 border-customPurple text-customPurple px-4 py-2 rounded-md w-160">Login</a>
                    <a href="#signup" className="bg-customPurple border-2 border-customWhite text-customWhite px-4 py-2 rounded-md w-160">Signup</a>
                </div>
            </div>
        </header>
    </nav>
  )
}

export default Header