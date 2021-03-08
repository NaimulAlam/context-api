import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {count} = props;
    //CategoryContext, useContext need to import to work
    const category = useContext(CategoryContext)
    return (
        <div>
            <h5>This is CategoryDetail : {count} </h5>
            <h5>Selected Category : {category} </h5>
        </div>
    );
};

export default CategoryDetail;