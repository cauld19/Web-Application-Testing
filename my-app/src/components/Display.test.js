import React from 'react';
import  { render } from "@testing-library/react";
import Display from './Display';



test('renders without crashing display', () => {
  render(<Display />);
});


test('it displays Strike', () => {
    const {getByText} = render(<Display />);
    getByText(/new game/i)
});