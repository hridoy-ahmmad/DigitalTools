import React from 'react';

const CartCard = ({ item, carts, setCarts }) => {


    const handleRemove = () => {
        const filter = carts.filter(i => i.id !== item.id)
        setCarts(filter)
    }


    return (
        <div className='flex justify-between items-center bg-gray-100 p-4 mt-4 rounded-xl mb-5'>
            <div className='flex items-center gap-2'>
                <p className='text-3xl bg-gray-600 py-2 px-1 rounded-full'>{item.icon} </p>
                <div>
                    <p className='text-xl font-semibold'>{item.name}</p>
                    <p className='font-semibold text-gray-500'>${item.price}</p>
                </div>
            </div>
            <button
                onClick={() => handleRemove()}
                className='font-semibold hover:text-red-600'>Remove</button>
        </div>
    );
};

export default CartCard;