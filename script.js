const body = document.querySelector('body')
const defaultTheme = 'light'

const toggleTheme = () => {
  let activeTheme = localStorage.getItem('theme')
  activeTheme == 'light' ? setTheme('dark') : setTheme('light')
}

const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  body.setAttribute('data-theme', theme)
}

const checkDefaultTheme = () => {
  let savedTheme = localStorage.getItem('theme')
  savedTheme ? body.setAttribute('data-theme', savedTheme) : setTheme(defaultTheme)
}

checkDefaultTheme();