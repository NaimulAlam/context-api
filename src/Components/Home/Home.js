import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid blue'}}>
            <h2>This is Home: {category} </h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;