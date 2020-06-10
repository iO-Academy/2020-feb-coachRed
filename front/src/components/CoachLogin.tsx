import * as React from 'react'
import {TextInput} from './TextInput'
import {Submit} from './Submit'

export interface CoachLoginProps {
    
}
 
export interface CoachLoginState {
    emailAddress: string,
    password: string
}
 
class CoachLogin extends React.Component<CoachLoginProps, CoachLoginState> {
    constructor(props: CoachLoginProps) {
        super(props);
        this.state = { 
            emailAddress: '',
            password: ''
        };
    }

    updateEmailAddress = (newEmailAddress : string) => {
        this.setState({emailAddress: newEmailAddress})
    }

    updatePassword = (newPassword : string) => {
        this.setState({emailAddress: newPassword})
    }

    sendResults = async (e : any) => {
        e.preventDefault()
        let response = await fetch('localhost:3000/coach/login', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        let data = await response.json()
    }

    render() { 
        return ( 
            <div className='root'>
                 <TextInput label="Email Address" fieldName="emailAddress" fieldData={this.state.emailAddress}
                inputType="text" isRequired={true} updateParent={this.updateEmailAddress} />
                 <TextInput label="Password" fieldName="password" fieldData={this.state.password}
                inputType="password" isRequired={false} updateParent={this.updatePassword} />
                <Submit sendResults={this.sendResults} buttonName="Login" />
            </div>
         );
    }
}
 
export default CoachLogin;