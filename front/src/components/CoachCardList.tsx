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
                    return <CoachCard name={coach.firstName + coach.lastName} distance={coach.distance} experience={coach.yearsCoaching}/>
                })}
            </div>)
    }
}
 
export default CoachCardList;