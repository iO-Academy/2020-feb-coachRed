import * as React from "react"

export interface NumberPickerProperties {fieldName: string, label: string}
export interface NumberPickerState {}

export class NumberPicker extends React.Component<NumberPickerProperties, NumberPickerState> {

    render() {
        return (
            <div className="numberPickerContainer">
                <label htmlFor={this.props.fieldName}>{this.props.label}</label>
                <input name={this.props.fieldName} id={this.props.fieldName} type="number"></input>
            </div>
        )
    }

}