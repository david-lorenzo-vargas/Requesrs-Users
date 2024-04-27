import { fireEvent, render, screen } from '@testing-library/react';

import Header from '.';

const mockPush = jest.fn();

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const renderHeader = () => render(<Header />)

describe('Header', () => {
  it('should render Button component with "Requesrs" text', () => {
    renderHeader();
    expect(screen.getByRole('button', {name: 'Requesrs'})).toBeInTheDocument();
  });

  it('should call button once and redirect the user to / route', () => {
    renderHeader();
    fireEvent.click(screen.getByText('Requesrs'));

    expect(mockPush).toHaveBeenCalledWith('/');
    
    expect(mockPush).toHaveBeenCalledTimes(1);
  });
});