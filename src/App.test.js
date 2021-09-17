import { render, screen } from '@testing-library/react';
import App from './App';

test('should render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greet Me/i);
  expect(linkElement).toBeInTheDocument();
});
