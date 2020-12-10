// import React from 'react'

// class Root extends React.Component{
    
//     render(){
//         return(
//             <h1>Hello World...</h1>
//         )
//     }
// }

// export default Root

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;