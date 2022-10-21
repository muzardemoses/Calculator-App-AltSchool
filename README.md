# AltSchool Africa  - Calculator app solution

This is a solution to the [Calculator app Assignment from AltSchool Africa](https://www.altschoolafrica.com/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./Calculator.JPG)



### Links

- Solution URL: [GitHub Repository](https://github.com/muzardemoses/Calculator-App)
- Live Site URL: [Muzardemoses Calculator](https://calculator.mosesadebayo1.repl.co/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to use the `prefers-color-scheme` media query to check if the user has a dark theme preference set in their browser. I also learned how to save the user's theme preference in the browser using `localStorage`.

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: hsl(235, 21%, 11%);
    color: hsl(234, 39%, 85%);
  }
}
```

```js
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}
```

### Continued development

I want to continue to learn more about React and how to use it to build more complex applications.



### Useful resources

- [How to use prefers-color-scheme](https://css-tricks.com/introduction-use-media-prefers-color-scheme/) - This helped me understand how to use the `prefers-color-scheme` media query. I really liked this article because it's simple and easy to understand, and it gave me everything I needed to know about this topic.

## Author

- GitHub - [@MuzardeMoses](https://github.com/MuzardeMoses)
- Frontend Mentor - [@muzardemoses](https://www.frontendmentor.io/profile/muzardemoses)
- Twitter - [@Muzarde1](https://www.twitter.com/Muzarde1)
- LinkedIn - [Moses Adebayo](https://www.linkedin.com/in/muzardemoses/)
- Instagram - [@muzardemoses](https://www.instagram.com/ademuzardemoses/)
- Facebook - [Adebayo MuzardeMoses Olaoluwa ](https://facebook.com/ademuzardemoses)
- YouTube - [MuzardeMoses](https://www.youtube.com/channel/UCg4W7cbWu6dW_8oJEHWaP9w)


## Acknowledgments


I want to thank [AltSchool Africa](https://www.altschoolafrica.com/) for giving me the opportunity to learn and improve my skills as a developer. 

I also want to thank [Frontend Mentor](https://www.frontendmentor.io/) for providing me with the opportunity to practice my skills and improve my portfolio.
