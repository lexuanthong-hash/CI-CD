import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CI/CD', () => {
  render(<App />);
  const heading = screen.getByText(/hello thầy cô/i);
  expect(heading).toBeInTheDocument();
});
