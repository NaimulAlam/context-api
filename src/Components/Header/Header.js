import { Button, Jumbotron } from 'react-bootstrap';


const Header = (props) => {
    

    //props used to call the state from parent components so that other sibling components can access it.
    const {count, setCount} = props;

    //useState direct use
    // const [count, setCount] = useState(0);
    
    return (
        <Jumbotron >
            <h1>This is Header. Count:{count} </h1>
            <Button onClick={()=> setCount(count + 1) } variant="warning">Increase</Button>
        </Jumbotron>
    );
};

export default Header;