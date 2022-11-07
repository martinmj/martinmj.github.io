//ARRANGE, ACT, ASSERT 
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { ExampleHook } from './exercises/hooks';


test('renders heading', (): void => {
  render(<App />);
  const headerElement: HTMLElement = screen.getByText(/game over/i);
  expect(headerElement).toBeInTheDocument();
});


test("Click hook button increment", (): void => {
  render(<ExampleHook />);
  const button:HTMLElement = screen.getByTestId('exampleHoookButton');
  fireEvent.click(button);
  const str: string = screen.getByText(/you clicked/i).innerHTML;
  const num: string = str.replace(/[^0-9]/g, "");
  expect(num).toBe("1")
});


