//Đây là một đoạn unit test sử dụng thư viện @testing-library/react để kiểm tra xem trong giao diện có xuất hiện dòng chữ 
// "Chào cô cảnh xinh đẹp" hay không. Nếu không tìm thấy dòng chữ này, test sẽ bị lỗi (fail).


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello CI/CD', () => {
  render(<App />);
  const heading = screen.getByText(/Cô ơi là cô/i);
  expect(heading).toBeInTheDocument();
});
