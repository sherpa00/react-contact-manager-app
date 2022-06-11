function SingleContact(props) {

    const handleDelete = (e) => {
        props.onDeleteClick(props.index);
    }

    const handleEdit = (e) => {
        props.onEditClick(props.index);
    }

    return ( 
        <div className="singleContact">
            <div className="info">
                <h4><span className="fa fa-user">
                </span> {props.name}
                </h4>
                <p>{props.phone}</p>
            </div>
            <div className="btns">
                <button 
                    id="edit"
                    onClick={handleEdit}
                >EDIT</button>

                <button 
                    id="del"
                    onClick={handleDelete}
                >DELETE</button>
            </div>
        </div>
     );
}

export default SingleContact;