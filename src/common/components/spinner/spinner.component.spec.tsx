import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

const promiseResult = {
  promiseInProgress: true,
};

jest.mock('react-promise-tracker', () => {
  const originalModule = jest.requireActual('react-promise-tracker');
  return {
    ...originalModule,
    usePromiseTracker: jest.fn(() => promiseResult),
  };
});

describe('SpinnerComponent specs', () => {
  let usePromiseTrackerOrig;

  it('should display a modal', async () => {
    // Arrange

    // Act
    render(<SpinnerComponent />);
    const modalElement = screen.queryByRole('presentation');

    // Assert
    expect(modalElement).toBeInTheDocument();
  });
});
