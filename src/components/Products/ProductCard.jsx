import React from 'react';

export default function ProductCard({product: { id, image, title, category, price }}) {
  return (
    <li className='flex flex-col rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-auto px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p>{`${price}`}</p>
      </div>
      <p className='pb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}

