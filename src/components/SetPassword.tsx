import * as React from "react"
const saltRounds = 10

export interface SetPasswordProps {
    updateParent(fieldData: string | number): void
}

export interface SetPasswordState {
    passwordOne: string | null,
    passwordTwo: string | null
}

export class SetPassword extends React.Component<SetPasswordProps, SetPasswordState> {
    constructor(props: any) {
        super(props)
        this.state = {
            passwordOne: null,
            passwordTwo: null
        }
        this.passwordOneChange = this.passwordOneChange.bind(this)
        this.passwordTwoChange = this.passwordTwoChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }

    // Event here must be cast as any to avoid a typescript bug where the target of a React.ChangeEvent does not
    // have a value attribute
    passwordOneChange(e: any) : void {
        this.setState({passwordOne: e.target.value})
        this.passwordChange(e.target.value, this.state.passwordTwo)
    }

    passwordTwoChange(e: any) : void {
        this.setState({passwordTwo: e.target.value})
        this.passwordChange(this.state.passwordOne, e.target.value)
    }

    passwordChange(passwordOne : string | null, passwordTwo: string | null) : void {
        if (passwordOne === passwordTwo && this.validatePassword(passwordOne)) {
            this.props.updateParent(passwordOne)
        }
    }

    validatePassword(password: string | null) : boolean {
        if (
            password.length > 8 
            && password.toUpperCase() != password 
            && password.toLowerCase() != password 
            && (isNaN(parseFloat(password)) || !isFinite(parseFloat(password)))
        ) {return true}

        return false
    }

    render() {
        return (
            <div className="passwordContainer">
                <label htmlFor="passwordOne">Enter a Secure Password:</label>
                <input 
                    className="form-control"
                    type="password" 
                    name="passwordOne" 
                    id="passwordOne" 
                    onChange={this.passwordOneChange}
                    required={true}>
                </input>
                <label htmlFor="passwordTwo">Confirm Password:</label>
                <input 
                    className="form-control"
                    type="password" 
                    name="passwordTwo" 
                    id="passwordTwo" 
                    onChange={this.passwordTwoChange}
                    required={true}>
                </input>
                <p>
                    Passwords must be at least 8 characters long and must contain one each of: a lowercase letter,
                    an uppercase letter, and a number.
                </p>
            </div>
        )
    }


}