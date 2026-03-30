import React from 'react';
import CartCard from './CartCard';
import { Bounce, toast } from 'react-toastify';
import EmptyCart from './EmptyCart';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((total, item) => {
        return total + item.price
    }, 0)

    const handleProceed = () => {
        setCarts([])
        if (carts.length === 0) {
            toast.info(`Cart is empty.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return
        }
        toast.success(`Proceed Successful`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className='max-w-7xl mx-auto mb-5'>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-3">
                Your Cart
            </h1>
            {
                carts.length === 0 ? <EmptyCart /> : carts.map(item => <CartCard key={item.id} item={item} carts={carts} setCarts={setCarts}></CartCard>)
            }
            <div className="flex items-center justify-between mb-8">
                <span className="text-gray-700 text-xl font-bold">Total:</span>
                <span className="text-3xl font-bold text-[#0F172A]">${totalPrice.toFixed(2)}</span>
            </div>

            <button
                onClick={handleProceed}
                className="w-full buttonPrimary text-2xl! active:scale-100!">
                Proceed To Checkout
            </button>
        </div>
    );
};

export default Cart;