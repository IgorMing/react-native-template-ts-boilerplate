import React from 'react';
import renderer, {
  ReactTestRenderer,
  ReactTestRendererJSON
} from 'react-test-renderer';

import Home from '.';

describe('Home screen', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    tree = renderer.create(<Home />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });

  it('should contain two nodes as children', () => {
    const jsonView: ReactTestRendererJSON | null = tree.toJSON();
    const childElements: Array<ReactTestRendererJSON> | null = jsonView
      ? jsonView.children
      : [];
    expect(childElements).toBeTruthy();
    childElements && expect(childElements.length).toBe(2);
  });
});
