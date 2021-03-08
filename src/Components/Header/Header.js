import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const Header = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>This is Header. Count:{count} </h1>
            <Button onClick={()=> setCount(count + 1) } variant="warning">Increase</Button>
        </div>
    );
};

export default Header;