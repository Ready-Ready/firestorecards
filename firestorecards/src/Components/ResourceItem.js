import React from 'react'

const ResourceItem = ({ resource }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <h1>{resource.program_name}</h1>
                    <ul>
                        <li>
                            <strong>A program of:</strong>
                        </li>
                        <li>
                        <strong>Program Description:</strong> {resource.program_description}
                        </li>
                    </ul>

                </div>
                <div className='card-back'>
                    <h1>{resource.program_name}</h1>
                    <ul>
                        <li>
                            <strong>Referral Process:</strong> {resource.program_eligibility}
                        </li>
   {/*                      <li>
                        <strong>Referral Email:</strong> {resource.referral_email}
                        </li>
                        <li>
                        <strong>Birthday:</strong> {resource.referral_phoneNumber}
                        </li>
                        <li>
                        <strong>Status:</strong> {resource.program_website}
                        </li>
                        <li>
                        <strong>Application Link:</strong> {resource.application_link}
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResourceItem