import axios from "axios"
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// Mock the "axios" library for any code that imports it.
// So any imports now return this instead of the actual axios call.
// Helps our tests to be consistent, and integration tests rather than E2E.
// jest.mock("axios", () => {
//     return {
//         get: jest.fn(() => Promise.resolve({
//                 characters: ["foo.jpg", "bar.jpg"]
//             }
//         ))
//     }
// })

// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

// test("Made API call", async () => {
//     const wrapper = rtl.render(<App />);
//     // This waits for our initial useEffect async operation to run,
//     // which is what makes our API call
//     await wrapper.findAllByAltText(/dog/i);

//     // Since our mocked axios.get call is a spy, we can see what it has been up to
//     expect(axios.get).toHaveBeenCalled()
// })

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