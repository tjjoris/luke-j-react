import Qualification from "./Qualification"
import awardIcon from '../assets/icons/award.svg'
import codeIcon from '../assets/icons/code.svg'

export default function Qualifications() {
    const qualifications = [
        {
            name: "Strong Academic Record",
            description: "A Cumulative GPA of 3.84, I received the Deans List award for 3 semesters in Computer Programming at Algonquin College. I excel when put to the task.",
            qualificationIcon: awardIcon
        },
        {
            name: "Fascination with Development",
            description: "Before College, I independently studied and experimented with C# and Unity for 3 years to practice Game Development.",
            qualificationIcon: codeIcon
        }
    ]

    return (
        <div className="qualifications" id="qualifications">
            <h3>Qualifications</h3>
            <p>With a strong set of attributes, I would make an excellent asset to any software or web company.</p>
            <div className="qualifications-grid" >
                {
                    qualifications.map((qualification, index) => {
                        return (
                            <Qualification
                                key={index}
                                name={qualification.name}
                                description={qualification.description}
                                iconUrl={qualification.qualificationIcon} />
                        )
                    })
                }
            </div >
        </div >
    )
}