import { render } from '@testing-library/react';

import Todo from './Todo';

describe('Todo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todo />);
    expect(baseElement).toBeTruthy();
  });
});
