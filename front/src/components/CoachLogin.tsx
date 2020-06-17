import * as React from 'react'
import {TextInput} from './TextInput'
import {Submit} from './Submit'

export interface CoachLoginProps {
    
}
 
export interface CoachLoginState {
    email: string,
    password: string
}
 
class CoachLogin extends React.Component<CoachLoginProps, CoachLoginState> {
    constructor(props: CoachLoginProps) {
        super(props); 
        this.state = { 
            email: '',
            password: ''
        };
    }

    updateEmailAddress = (newEmailAddress : string) => {
        this.setState({email: newEmailAddress})
    }

    updatePassword = (newPassword : string) => {
        this.setState({password: newPassword})
    }

    sendResults = async (e : any) => {
        e.preventDefault()
        let response = await fetch('http://localhost:3000/coach/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        let data = await response.json()
        
        if (data.status === 'success') {
            console.log(data)
            localStorage.setItem('coachRedToken', data.data.token)
            localStorage.setItem('id', data.data.id)
            
            window.location.href = "/coachAvailibility"

        } else {
            alert('no chance')
        }
    }

    render() { 
        return ( 
            <div className='root form'>
                 <TextInput label="Email Address" fieldName="emailAddress" fieldData={this.state.email}
                inputType="text" isRequired={true} updateParent={this.updateEmailAddress}/>
                 <TextInput label="Password" fieldName="password" fieldData={this.state.password}
                    inputType="password" isRequired={false} updateParent={this.updatePassword}/>
                <div className='submit'>
                    <Submit sendResults={this.sendResults} buttonName="Login" />
                </div>
            </div>
         );
    }
}
 
export default CoachLogin;