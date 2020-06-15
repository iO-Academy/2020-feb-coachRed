import * as React from 'react';

class WelcomeMessage extends React.Component{

    render() { 
        return ( 
            <div>
                <h1>Welcome to Coach Red!</h1>
                <p>We help athletes and coaches to connect</p>
                <p>Are you an athlete? Search for coaches in your area now!</p>
            </div>
         );
    }
}
 
export default WelcomeMessage;