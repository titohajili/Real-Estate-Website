import Image from 'next/image';
import React from 'react'

type Props = {
    property: {
        id: number;
        propertyName: string;
        location: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        price: number;
        imageUrl: string;
     };
};

const PropertyCard = ({property}: Props) => {
  return (
    <div className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg'>
      <div className='relative '>
        <Image src={property.imageUrl} alt={property.propertyName} width={300}  height={300} className='w-full object-cover group-hover:scale-110 transition-all duration-300' />
        <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white rounded-lg'>
            <span className='text-base font-bold'>${property.price}</span> / mo
        </h1>
      </div>
    </div>
  )
}

export default PropertyCard
