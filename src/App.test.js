import { render, screen } from '@testing-library/react';
import App from './App.js';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event'

test('Header Shows Up', () => {
  render(
  <Router>
    <App />
  </Router>
  );
  const header = screen.getByText("GMDB");
  expect(header).toBeInTheDocument();
});

test('Search for movie results in correct return', async () => {
  render(
  <Router>
    <App />
  </Router>
  );
  const searchButton = await screen.findByRole('button', {name: "Submit"})
  const searchBar = await screen.findByPlaceholderText('Search');
  expect(searchBar).toBeInTheDocument();
  userEvent.type(searchBar, 'Star');
  userEvent.click(searchButton);


  const image = await screen.findByAltText('Star Wars: Episode IV - A New Hope');
  expect(image).toBeInTheDocument();

});
