import React from 'react'
import delivery from '../img/delivery.png'
import heroBg from '../img/heroBg.png'
function HomeContainer() {
  return (
    <section id='home' className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={delivery} 
                alt="car"
                className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p
          className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor"
        >The Fastest Delivery in <span className="text-orange-600 text-[3rem]  md:text-[5rem] ">city</span></p>
        <p className="text-textColor text-base text-center md:text-left md:w-[80%]">
          fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj, fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj
          fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj
          fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj
          fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj
          fnjdnfjksnd sdjdsnfjdnsfn sdndfkjdnfk sfnk nksdj
        </p>
        <button
          type="button"
          className="md:w-auto bg-gradient-to-br from-orange-400 to orange-500 w-full 
          px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
          duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
          <img 
            className="h-full"
            src={heroBg} 
            alt="Bg" 
            />
      </div>
      
    </section>
  )
}

export default HomeContainer