import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badges from './components/Badge';

const container = document.getElementById('app'); 

ReactDOM.render(
    <Badges 
        firstName="Pako" 
        lastName="Díaz"
        jobTitle="Fullstack engineer"
        twitter="@pakodiaz"
        avatar="https://www.gravatar.com/avatar?d=identicon"
    />, container
);
