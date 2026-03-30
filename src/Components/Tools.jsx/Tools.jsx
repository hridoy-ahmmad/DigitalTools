import React, { use } from 'react';
import ToolCard from './ToolCard';

const Tools = ({ dataPromse, handleAddCart }) => {
    const tools = use(dataPromse)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 my-3 p-4 scroll-smooth'>
            {
                tools.map(item => <ToolCard key={item.id} item={item} handleAddCart={handleAddCart}></ToolCard>)
            }
        </div>
    );
};

export default Tools;