import React from 'react'

export interface CoachCardProps {
    name: string
    distance: number
    experience: string
    coachId: string
}
 
class CoachCard extends React.Component<CoachCardProps, {}> {
    
    displayCoachDetails = () => {
        
        localStorage.setItem('coachId', this.props.coachId)
        window.location.href = '/viewCoach'
    }

    render() { 
        return ( 
            <div className="coachCard">
                <h2 className='coachName'>
                    {this.props.name}
                </h2>
                <div className='distanceAndExperience'>
                    <div className='coachDistance'>
                        {this.props.distance} Miles Away
                    </div>
                    <div className='coachExperience'>
                        {this.props.experience} Years of Experience
                    </div>
                </div>
                <input type="button" value='Details' onClick={this.displayCoachDetails}/>
            </div>
         );
    }
}
 
export default CoachCard;