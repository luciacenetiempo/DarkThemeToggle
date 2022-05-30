# Dark Theme Toggle
Switch to dark theme in a couple of lines of code JS + CSS

The purpose of this project is to create a toggle button to switch the theme of your website in a few lines of css and javascript code.

## HTML
Basically in the html file we create a button that calls on click a function **toggleTheme()**
```html
<button onclick="toggleTheme()">CHANGE ME</button>
```

## Javascript
In javascript instead we manage the switch, first of all let's set the body and the default mode:
```javascript
const body = document.querySelector ('body')
const defaultTheme = 'light'
```

This will be used to define the mode chosen by us the first time the user arrives on our page.
Moving on, let's create the function **toggleTheme()**

```javascript
const toggleTheme = () => {
  let activeTheme = localStorage.getItem('theme')
  activeTheme == 'light' ? setTheme('dark') : setTheme('light')
}
```

this is the core of our project, as you can see there is an **activeTheme** control variable that checks if a preference has been saved in the user's localStorage, on the basis of the value that our localStorage will provide us, we set the opposite value.

So if **localStorage.getItem('theme')** has the value **'light'** we will set **'dark'**  as parameter for **setTheme()** function to change the mode.

So what does **setTheme()** do?

```javascript
const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  body.setAttribute('data-theme', theme)
}
```

In this function we do only two things:
1. save the new selected mode in our user's localStorage.
2. add to our body tag the data-theme that will manage the correct css

and to complete our plugin we launch the function that takes care of setting the default mode at startup:

```javascript
const checkDefaultTheme = () => {
  let savedTheme = localStorage.getItem('theme')
  savedTheme ? body.setAttribute('data-theme', savedTheme) : setTheme(defaultTheme)
}

checkDefaultTheme();
```

this function starts as soon as the user arrives on the page, then we check if he is a returning user and therefore has already chosen his preferred mode, if it is not present in the local storage we proceed with setting the default mode.

##CSS
Let's move to the CSS
we need very few lines of css because we will use variables.

```css
:root {
  --main-bg: white;
  --main-txt: black;
  --button-bg: black;
  --button-txt: white;
}
[data-theme="dark"] {
  --main-bg: black;
  --main-txt: white;
  --button-bg: white;
  --button-txt: black;
}
body {
  background-color: var(--main-bg);
  color: var(--main-txt);
}
```


in the **root** we define the colors that we will use for the default mode (in our case the light) then we define the dark mode with **[data-theme = "dark"]** in which we will change the colors to the same root variables.

And so the magic begins... our body will work on the colors set in the variables and depending on the [data-theme] it will invert them.


Do oyu have questions? <a href="https://dev.to/luciacenetiempo/dark-theme-toggle-56p9" target="_blank">Let's talk about this on dev.to</a>
