import { useEffect } from "react";
import { useState } from "react";
import SingleContact from "./SingleContact";

function DisplayContact(props) {

    const handleEditButton = (e) => {
        props.onSingleEdit(e);
    }

    const handleDeleteButton = (e) => {
        props.onSingleDelete(e);
    }

    return ( 
        <div className="contactsList">
            <h1>YOUR SAVED CONTACTS</h1>
            <ul>
                {
                    props.contactList.map((el,index) => 
                         <li key={index} id={index}>
                            <SingleContact
                                name={el[0]}
                                phone={el[1]}
                                index={index}
                                onEditClick={handleEditButton}
                                onDeleteClick={handleDeleteButton}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
     );
}

export default DisplayContact;