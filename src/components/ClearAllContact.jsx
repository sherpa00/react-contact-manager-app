function ClearAllContact(props) {

    const handleClearAllClick = () => {
        props.onClearAllClick();
    }

    return ( 
        <button 
            onClick={handleClearAllClick}
            className="clearAllBtn"
        >CLEAR ALL</button>
     );
}

export default ClearAllContact;