import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mapper specs', () => {
  
  it('Return empty project when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('Return empty project when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('Return empty employees array when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'John Doe',
      isActive: true,
      employees: undefined,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result.employees).toEqual([]);
  });

  it('Return empty employees array when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'John Doe',
      isActive: true,
      employees: null,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result.employees).toEqual([]);
  });

  it('Return one mapped project when it feeds one apiModel project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'John Doe',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Dasy Doe',
        },
      ],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'John Doe',
      externalId: '1',
      comments: 'comments',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Dasy Doe',
        },
      ],
    };

    expect(result).toEqual(expectedResult);
  });
});
