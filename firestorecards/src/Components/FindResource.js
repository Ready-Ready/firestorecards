import React, { useState, useEffect } from "react"
import firebase from '../firebase'
import ResourceGrid from './ResourceGrid'

import SearchBox from "./SearchBox"


const FindResource = () => {
    const [resources, setResources] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchResources = async () =>{
            setisLoading(true)
            const db = firebase.firestore()
            const data = await db.collection("programs").get()

            
            setResources(data.docs.map(doc => doc.data()))
            setisLoading(false)
        }
        
       fetchResources()
    }, [query])

    return (
        <div className="container">
            <SearchBox getQuery={(q) => setQuery(q)} />
            <ResourceGrid isLoading={isLoading} resources={resources} />
        </div>
    )
}

export default FindResource