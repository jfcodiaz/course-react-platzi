import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Confrerence logo"/>                    
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Pako<br/>Díaz</h1>
                </div>
                <div>
                    <p>Fullstack Enginner</p>
                    <p>@fcodiaz</p>
                </div>
                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;