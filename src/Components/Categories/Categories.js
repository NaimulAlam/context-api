import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props
    return (
        <div>
            <h3>This is Categories </h3>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;<h2>This is Categories</h2>