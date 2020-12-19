import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { createSafeRenderPropMock } from 'utils/test-utils';
import TodosContainer from 'app/domains/Todos/containers';

import HomePage from '..';

jest.mock('app/domains/Todos/containers', () => jest.fn());

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const renderer = createRenderer();
    renderer.render(<HomePage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render with render prop', () => {
    const renderProp = {
      isLoading: false,
      todos: [],
    };
    createSafeRenderPropMock(TodosContainer, renderProp);

    const renderer = createRenderer();
    renderer.render(<HomePage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
