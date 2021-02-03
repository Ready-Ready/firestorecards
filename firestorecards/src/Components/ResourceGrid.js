import React from "react"
import ResourceItem from "./ResourceItem"


const ResourceGrid = ({ isLoading, resources }) => {
    return(
        <section className="cards">
            {resources.map((resource) => (
                <ResourceItem key={resource.programID} resource={resource}></ResourceItem>
            ))}
        </section>

    )
}

export default ResourceGrid
