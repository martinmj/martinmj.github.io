import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function ExampleHook(): JSX.Element {

    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button data-testid='exampleHoookButton' variant='primary' onClick={() => setCount(count + 1)}>{' '}
                Click me
            </Button>
        </div>
    );
}