import React from 'react'


// Styles
import { 
    ProjectItemContainer, 
    Cursor 
} from './style'

const ProjectListItem = ({ projectTitle, projectCateg }) => {
    return (

            
            <ProjectItemContainer>
            {/* <Cursor></Cursor> */}
                <div className="project-title">
                    <h3>{projectTitle}</h3>
                </div>
                <div className="project-categ">
                    <p>{projectCateg}</p>
                </div>
                <div className="project-overlay"></div>
            </ProjectItemContainer>
 
    )
}

export default ProjectListItem
