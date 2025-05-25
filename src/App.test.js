
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CI/CD', () => {
  render(<App />);
  const heading = screen.getByText(/Chào cô cảnh xinh đẹp/i);
  expect(heading).toBeInTheDocument();
});
