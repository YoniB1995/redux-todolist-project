import React from 'react';
import Counter from '../Counter';
import { render ,fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(()=> {
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
})

// afterEach(()=>{
//     cleanup() // by default
// })

test("header renders with correct text", () => {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")

})
test("counter initially starts with text of 0",()=> {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0")
})

// test("input contains initial value of 1", ()=> {
//     const {getByTestId} = render(<Counter/>);
//     const inputEl = getByTestId("input");

//     expect(inputEl.value).toBe("1")
// })

test("increment button renders with +",()=>{
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with +",()=>{
    const subtractBtn = getByTestId("add-subtract");

    expect(subtractBtn.textContent).toBe("-");
})

test("changing value of input works correctly" , () =>{
    const inputEl = getByTestId("input");

        expect(inputEl.value).toBe("0")

    fireEvent.change(inputEl, {
        target: {
            value:"5"
        }
    })

    expect(inputEl.value).toBe("5")

})


test("click on plus btn adds 1 to counter", ()=> {
    const btnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe("0");

    fireEvent.click(btnEl);
    

    expect(counterEl.textContent).toBe("1");
})