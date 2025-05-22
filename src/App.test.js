import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CI/CD', () => {
  render(<App />);
  const heading = screen.getByText(/hello cô cảnh nè huhuhuadeara/i);
  expect(heading).toBeInTheDocument();
});
// đoạn code javascript dùng để viết test cho function (react)