import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog specs', () => {
  it('should return an object with isOpen flag, empty item to delete and three functions', () => {
    // Arrange
    const emptyItem = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(emptyItem);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should set isOpen and itemToDelete when it calls onOpenDialog', () => {
    // Arrange
    const sampleItem = {
      id: '1',
      name: 'John Doe',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(sampleItem);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(sampleItem);
  });

  it('should set true to isOpen when it calls onClose', () => {
    // Arrange
    const sampleItem = {
      id: '1',
      name: 'John Doe',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(sampleItem);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should set empty lookup to itemToDelete when it calls onAccept', () => {
    // Arrange
    const emptyItem = {
      id: '',
      name: '',
    };

    const sampleItem = {
      id: '1',
      name: 'John Doe',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(sampleItem);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyItem);
  });
});
