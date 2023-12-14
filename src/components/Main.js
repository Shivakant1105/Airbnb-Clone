import React from 'react'
import data from '../Data/db.json'

const Main = () => {

    return (
        <div className='max-w-7xl mx-auto px-8 sm:px-16 '>
            <section className='pt-6'>
                <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            </section>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.map(({ id,img, distance, location }, index) => {
                
                return (
                    <div key={id} className='flex items-center m-2 nt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transforma duration-200 ease-out'>
                        <div className='relative h-16 w-16 '>
                        <img src={img} alt='no image found' className='rounded-lg'/>
                        
                        </div>
                        <div>
                        <h2 className='font-semibold'>
                        {location}
                        </h2>
                        <h2 className='text-gray-500'>
                        {distance}</h2>
                        </div>



                    </div>


                )
            })}
            </div>  
            

        </div>
    )
}

export default Main