import { render, screen } from '@testing-library/react';
import UserInput from './UserInput';

test('renders learn react link', () => {
  render(<UserInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
