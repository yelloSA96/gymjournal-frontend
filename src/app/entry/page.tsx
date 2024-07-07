// import React, {useEffect, useState} from "react";
import GymEntryList from "@components/GymEntryList";


// Logic: Fetch entries (GET)
// http://localhost:8080/api/weight-entries

// Post
// http://localhost:8080/api/weight-entries

// DELETE
// http://localhost:8080/api/weight-entries/${id}


export default function Entry() {
    // TODO: This needs to be refactored from serverside file to client side file, how do I go about this?
    // const [entries, setEntries] = useState([]);
    //
    // useEffect(() => {
    //     // Fetch entries
    //     const fetchEntries = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/api/weight-entries');
    //             if (!response.ok){
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setEntries(data);
    //         }catch (error) {
    //             console.error('Failed to fetch entries:', error);
    //             // Set entries to a default value or handle the error as needed
    //             // For example, setting entries to an empty array as a default:
    //             setEntries([]);
    //         }
    //     };
    //     fetchEntries();
    // }, []);

    // TODO: this deletion is used on client side, I need to figure above todo before addressing this
    // const handleDelete = async (id) => {
    //     await fetch(`http://localhost:8080/api/weight-entries/${id}`, { method: 'DELETE' });
    //     setEntries(entries.filter(entry => entry.id !== id));
    // };

    // Implement handleSave similarly to handleDelete, adjusting for POST request

    return (
        <div>
            <h1>Entry Page here</h1>
            <GymEntryList entries={undefined} onDelete={undefined}/>

        </div>
    )
}