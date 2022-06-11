function EditOrAddContact(props) {

    const handleSubmit = (e) => {
        let arr;
        let newName = e.target[0].value;
        let newPhone = e.target[1].value;
        arr = [newName,newPhone]
        console.log(arr);
        props.onHandleSubmit(arr);
        e.preventDefault();
    }

    const handlePhoneChange = (e) => {
        props.onPhoneChange(e.target.value);
    }

    const handleTextChange = (e) => {
        props.onTextChange(e.target.value);
    }

    return ( 
        <div className="editTable">
            <form onSubmit={handleSubmit}>
                <label>NAME:
                    <input
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name"
                        value={props.name}
                    ></input>
                </label>
                <br></br>
                <label>PHONE NUMBER:
                    <input
                        type="tel"
                        onChange={handlePhoneChange}
                        placeholder="Phone Number"
                        value={props.phoneNum}
                    ></input>
                </label>
                <button type="submit">ADD CONTACT</button>
            </form>
        </div>
     );
}

export default EditOrAddContact;