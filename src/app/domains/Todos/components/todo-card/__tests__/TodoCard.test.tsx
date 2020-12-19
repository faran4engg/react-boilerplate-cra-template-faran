import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import TodoCard from '../TodoCard';

const renderer = createRenderer();

describe('<TodoCard />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<TodoCard isLoading={false} todos={[]} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
