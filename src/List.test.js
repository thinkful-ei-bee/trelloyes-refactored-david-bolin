import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('List Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="x" cards={[1, 2]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="First List" cards={['a', 'b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});
