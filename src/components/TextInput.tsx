import * as React from "react"

export interface TextInputProps {
    label : string, 
    fieldName : string, 
    fieldData : string | number,
    inputType : string,
    isRequired : boolean,
    updateParent(fieldData: string | number): void
}

export class TextInput extends React.Component<TextInputProps, {}> {
    constructor(props: any) {
        super(props)
        this.textInputChange = this.textInputChange.bind(this)
    }

    // Event here must be cast as any to avoid a typescript bug where the target of a React.ChangeEvent does not
    // have a value attribute
    textInputChange(event: any){
        this.setState({fieldData: event.target.value})
        this.props.updateParent(event.target.value)
    }

    render() {
        return (
            <div className="formItem">
                <label htmlFor={this.props.fieldName}>{this.props.label}</label>
                <input 
                    className="form-control"
                    type={this.props.inputType} 
                    name={this.props.fieldName} 
                    id={this.props.fieldName}
                    required={this.props.isRequired} 
                    onChange={this.textInputChange} >
                </input>
            </div>
        )
    }


}