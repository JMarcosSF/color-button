import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /Change to blue/} );
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button has correct initial color', () => {
  render(<App />);

  // Find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole('button', { name: /Change to blue/});

  expect(colorButton).toHaveStyle({ 'background-color': 'MediumVioletRed' });
});

test('button turns Midnight Blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to blue/});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ 'background-color': 'blue'})
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed');
});

test('button is disabled when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/});
  const colorButton = screen.getByRole('button', { name: /Change to blue/ });

  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
});

// Tests to test functions
describe('spaces before camel-case capital letters', function () {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
// test('button has correct initial color', () => {
//   render(<App />);

//   const linkElement = screen.getByRole('link', { name: /learn react/i }); // ' is case insensitive
//   // const linkElement = screen.getByText(/learn react/i); // ' is case insensitive
//   // const linkElement = screen.getByText(/:earn React/);  // regex
//   // const linkElement = screen.getByText('Learn React');
//   expect(linkElement).toBeInTheDocument();
// });

// test('should not render learn react link', () => {
//   render(<App />);

//   const linkElement = screen.getByText(/learn react testing library/i); // ' is case insensitive
//   expect(linkElement).not.toBeInTheDocument();
// });