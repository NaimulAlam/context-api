import { useContext } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { CategoryContext } from '../../App';


const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);

    //props used to call the state from parent components so that other sibling components can access it.
    // const {setCount} = props;

    //useState direct use
    // const [count, setCount] = useState(0);
    
    return (
        <Jumbotron >
            <h1>This is Header. Count:{category} </h1>
            <Button onClick={()=> setCategory(category + 1) } variant="warning">Increase</Button>
        </Jumbotron>
    );
};

export default Header;