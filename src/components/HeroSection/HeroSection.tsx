import insureimage from '../../assets/insure2.jpeg'

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center bg-gray-100 h-[600px]">
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
        <img 
            src={insureimage} 
            alt="insureimage" 
            className="w-full h-full object-cover"
        />
    </div>

    {/* Transparent Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Overlay Content */}
    <div className="relative z-10 text-center p-4">
        {/* Headline */}
        <h1 className="text-4xl font-bold text-white mb-4">
            Protect Your Future with Our Insurance Plans
        </h1>

        {/* Button */}
        <button 
            className="bg-customPurple text-customWhite border-2 border-customPurple hover:bg-white hover:text-customPurple transition-colors px-6 py-3 text-lg rounded-md"
            style={{ width: '160px' }}
        >
            Get Quotes
        </button>
    </div>
</section>
  )
}

export default HeroSection