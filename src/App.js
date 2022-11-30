import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';


function App() {
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('');

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };
  
  return (
    <div className="App">
     <Form> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        
        <Form.Control ref={inputRef}
        type="text"
        id="message"
        name="message" placeholder="Enter Name"/>
        
        <Form.Text className="text-muted">
         Enter the name here 
        </Form.Text>
      </Form.Group>
      <Button onClick={handleClick}  variant="primary" type="submit">
        Submit
      </Button>
      <h2>Hello!: {updated}</h2>
    </Form>
    </div>
  );
}

export default App;
