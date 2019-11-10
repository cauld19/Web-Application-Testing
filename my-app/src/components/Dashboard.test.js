import React from 'react';
import  { render } from "@testing-library/react";
import Dashboard from './Dashboard';


test('renders without crashing dashboard', () => {
  render(<Dashboard />);
});


test('it displays Strike', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/strike/i)
});