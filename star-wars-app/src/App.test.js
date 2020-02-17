import axios from "axios"
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

test('Do buttons render?', () => {
    const { getByTestId } = rtl.render(<App />);
    getByTestId('next');
    getByTestId('prev');
});

test('Is the logo there?', () => {
    const wrapper=rtl.render(<App />);
    const element = wrapper.getByAltText(/logo/i);
    expect(element).toBeVisible();
})


