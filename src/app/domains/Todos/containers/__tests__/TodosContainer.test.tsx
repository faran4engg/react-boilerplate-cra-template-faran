import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import TodosContainer from '..';

jest.mock('react-query', () => ({
  useQuery: () => ({}),
}));

describe('<TodosContainer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render and match the snapshot when loading', () => {
    jest.mock('react-query', () => ({
      useQuery: () => ({
        isLoading: true,
        error: undefined,
        data: undefined,
      }),
    }));

    const renderer = createRenderer();

    renderer.render(<TodosContainer>{() => <div />}</TodosContainer>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render and match the snapshot when error', () => {
    jest.mock('react-query', () => ({
      useQuery: () => ({
        isLoading: false,
        error: {},
        data: undefined,
      }),
    }));
    const renderer = createRenderer();

    renderer.render(<TodosContainer>{() => <div />}</TodosContainer>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
  it('should render and match the snapshot successfully', () => {
    jest.mock('react-query', () => ({
      useQuery: () => ({
        isLoading: false,
        error: undefined,
        data: [{}],
      }),
    }));
    const renderer = createRenderer();
    renderer.render(<TodosContainer>{() => <div />}</TodosContainer>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
