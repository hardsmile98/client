import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
body {
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  font-family: 'Open Sans', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Helvetica Neue', sans-serif;
}
body {
  color: #fff;
  background: #161520;
  line-height: 1.4;
  font-size: 14px;
  font-weight: normal;
}

button,
input,
optgroup,
select,
textarea {
  border: none;
  font-weight: normal;
}
*,
*:after,
*:before,
input[type='search'] {
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style: none;
}
ul,
li,
ol,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: bold;
}
button {
  cursor: pointer;
  background: none;
  border: none;
}

select::-ms-value {
  background: none;
  color: #42413d;
}

[role='button'],
button,
input,
select,
textarea {
  outline: none;
}
[role='button'],
button,
input,
textarea {
  appearance: none;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
select::-ms-expand {
  display: none;
}
select option {
  color: #000;
}
body,
select {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
svg {
  display: block;
}
html {
  touch-action: manipulation;
}`
