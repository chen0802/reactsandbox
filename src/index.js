import React from 'react'
import { render } from 'react-dom'
import  App from './components/App'

/*
render( React.createElement(
        'h1',
        {id: 'pqx'},
        React.createElement('h2', null, 'Second')
    ),
    document.getElementById('root')
);
*/

render(
    <App />,
    document.getElementById('root')
);