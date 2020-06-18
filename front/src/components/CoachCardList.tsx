import React from 'react'
import CoachCard from './CoachCard';

export interface CoachCardListProps {
    coaches: Array<Object>
}
 
class CoachCardList extends React.Component<CoachCardListProps, {}> {
    constructor(props: CoachCardListProps) {
        super(props);
    }
    render() { 
        return (
            <div className='coachCardList'>
                {this.props.coaches.map(( coach : any) => {
                    return <CoachCard name={coach.firstName} distance={coach.distance} experience={coach.yearsCoaching} 
                    coachId={coach.coachId} key={this.props.coaches.findIndex((entry)=>entry===coach)}/>
                })}
            </div>)
    }
}
 
export default CoachCardList;