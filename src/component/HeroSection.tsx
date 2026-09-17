import image from "../banner-stack.png"
const HeroSection = () => {
    return (
        <section className='px-6 py-12 md:py-20'>
            <div className='flex-col md:flex-row items-center justify-between container mx-auto flex'>
                <div className="md:w-1/2 w-full text-center md:text-left">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'> Build Your Ideal

                <br/>
                <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                    Development Stack
                    </span>
                    </h1>
                    <p className='md:text-base max-w-md mx-auto md:mx-0 mt-4 text-gray-500 text-sm'>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className='flex flex-col justify-center sm:flex-row gap-3 mt-6 md:justify-start'>
                        <button className='bg-linear-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium cursor-pointer '>
                            Explore Technologies
                        </button>

                        <button className='border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium  cursor-pointer '>Learn More</button>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={image} alt="" className="w-full max-w-md"></img>
                    </div>



            </div>
        </section>
       
    );
};

export default HeroSection;