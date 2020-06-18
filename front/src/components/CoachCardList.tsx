import React from 'react'
import CoachCard from './CoachCard';

export interface CoachCardListProps {
    coaches: Array<Object>
}
 
class CoachCardList extends React.Component<CoachCardListProps, {}> {
    
    render() { 
        return (
            <div className='coachCardList'>
                {this.props.coaches.map(( coach : any) => {
                    return <CoachCard name={coach.firstName} distance={coach.distance} experience={coach.yearsCoaching} coachId={coach.coachId}/>
                })}
            </div>)
    }
}
 
export default CoachCardList;