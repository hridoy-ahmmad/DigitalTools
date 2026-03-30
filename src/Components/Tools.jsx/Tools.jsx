import React, { use } from 'react';
import ToolCard from './ToolCard';

const Tools = ({ dataPromse, handleAddCart }) => {
    const tools = use(dataPromse)

    return (
        <div className='grid grid-cols-3 max-w-7xl mx-auto gap-6'>
            {
                tools.map(item => <ToolCard key={item.id} item={item} handleAddCart={handleAddCart}></ToolCard>)
            }
        </div>
    );
};

export default Tools;