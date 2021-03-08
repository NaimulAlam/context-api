import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid blue'}}>
            <h2>This is Home: {count} </h2>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;