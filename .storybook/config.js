import {configure} from '@storybook/react'

// import "bootstrap/dist/css/bootstrap.min.css"
// import 'react-quill/dist/quill.snow.css'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
