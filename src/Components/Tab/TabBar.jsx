

const TabBar = ({ handleProducts, handleCart, active, carts }) => {


    return (
        <div className='text-center max-w-7xl mx-auto mb-12 mt-16'>
            <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
            <p className='primaryText my-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className="border border-gray-300 rounded-full px-1 py-4 inline space-x-1">
                <button
                    onClick={() => handleProducts('Products')}
                    className={`${active === 'Products' ? 'buttonPrimary' : 'py-3 px-4 '}`}
                >Products</button>
                <button
                    onClick={() => handleCart('Cart')}
                    className={`${active === 'Cart' ? 'buttonPrimary' : 'py-3 px-4 '}`}
                > Cart ( {carts.length})</button>
            </div>
        </div>
    );
};

export default TabBar;