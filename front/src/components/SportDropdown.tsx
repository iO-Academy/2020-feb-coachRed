import * as React from "react"

export interface DropdownProperties {
    fieldName: string, 
    label: string,
    updateParent(newSport: string) : void
}
export interface DropdownState {dropdownVisible : boolean, fieldData: string}

export class SportDropdown extends React.Component<DropdownProperties, DropdownState> {

    sports: Array<string>

    constructor(props: any) {
        super(props)
        this.state = { dropdownVisible: false, fieldData: '' }
        this.sports = []
    }

    componentDidMount() {
        fetch('http://localhost:3000/sport',{
            method: "GET",
        }).then((response: any) => {
            return response.json()
        }).then(response=>{
            this.sports = response.data.sports.map((sport: any)=>{return sport.name})
            this.setState({fieldData: this.sports[0]})
            this.changeOption = this.changeOption.bind(this)
            this.showDropDownItems = this.showDropDownItems.bind(this)
        })
    }

    render() {
        return (
            <div className="dropdownContainer">
                <label htmlFor={this.props.fieldName}>{this.props.label}</label>
                <div id={this.props.fieldName} className="dropdown">
                    <div className="selectedItem btn btn-danger dropdown-toggle" 
                    onClick={(e) => this.showDropDownItems(e)}>
                        {this.state.fieldData}
                    </div>
                    {this.state.dropdownVisible && <div className="dropdownItems">
                        {this.sports.map((option) =>{
                            return (
                                <div className="dropdownItem" 
                                key={this.sports.findIndex((entry)=>entry===option)} 
                                onClick={(e) => this.changeOption(e, option)}>
                                    {option}
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
        )
    }

    changeOption(e: React.MouseEvent, toOption : string) : void {
        e.preventDefault()
        this.setState({
            dropdownVisible: false,
            fieldData: toOption
        })
        this.props.updateParent(toOption)
    }

    showDropDownItems(e: React.MouseEvent) : void {
        e.preventDefault()
        let dropdownToggle = !(this.state.dropdownVisible)
        this.setState({
            dropdownVisible: dropdownToggle
        })
    }
}
