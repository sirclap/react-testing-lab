import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('Confirmation Dialog specs', () => {
  it('should display a dialog with title', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByText(props.title);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  it('should display content as component children', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <span>Contenido</span>
      </ConfirmationDialogComponent>
    );

    const contentElement = screen.getByText('Contenido');

    // Assert
    expect(contentElement).toBeInTheDocument();
  });

  it('should render buttons with close and accept labels', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });
    const closeButton = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    // Assert
    expect(acceptButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onAccept and onClose when it click on accept and close buttons', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'title',
      labels: {
        closeButton: 'close',
        acceptButton: 'accept',
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });
    const closeButton = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    userEvent.click(acceptButton);
    userEvent.click(closeButton);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
