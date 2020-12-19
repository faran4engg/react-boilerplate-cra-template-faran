import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import TodosContainer from '..';

const renderer = createRenderer();

describe('<TodosContainer />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<TodosContainer>{() => <div />}</TodosContainer>);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
