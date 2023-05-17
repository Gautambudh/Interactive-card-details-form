# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![desktop view](./src/assets/design/active-states.jpg)
![mobile view](./src/assets/design/mobile-design.jpg)

### Links

- Solution URL: [Solution code](https://your-solution-url.com)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- MUI Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- Learned how to use MUI textfield component to build form faster.
- Learned how to use error and helpertext props of textfield to show some error while validating input fields
- used redux to handle the input states of the form
- learned about the redux toolkit and its usecase which basically makes state handling easy and solves the problem of props hell 

the regex code below is what i used to check whether user inputs a number or anything other than number so that he see an error
as in helper text "wrong format, number only"

```js
setCardNumber: (state, action) => {
            state.cardNumber.number = action.payload.value;
            const isValidNumber =  /^[0-9\s]+$/.test(state.cardNumber.number);
            state.cardNumber.error = !isValidNumber;
        },
```
i used below regex code to show the input creditcard number in pairs of 4 and space after every 4 digit

```js
{cardNumber.number ? cardNumber.number
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()
              : 
              ""}
```


### Useful resources

- [React](https://reactjs.org/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [material UI documentation](https://mui.com/material-ui/getting-started/overview/) - This is the official documentation which helped me finally understand material ui components. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@Gautambudh](https://www.frontendmentor.io/profile/Gautambudh)
