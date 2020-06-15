import React from 'react'

export interface CoachCardProps {
    name: string
    distance: number
    experience: string
}
 
class CoachCard extends React.Component<CoachCardProps, {}> {
    constructor(props: CoachCardProps) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <h2 className='coachName'>
                    {this.props.name}
                </h2>
                <div className='coachDistance'>
                    {this.props.distance} Miles Away
                </div>
                <div className='coachExperience'>
                    {this.props.experience} Years of Experience
                </div>
                <input type="button" value='details'/>
            </div>
         );
    }
}
 
export default CoachCard;