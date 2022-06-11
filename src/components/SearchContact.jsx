function SearchContact(props) {

    const handleSearchTextChange = (e) => {
        props.onSearch(e.target.value);
    }

    return ( 
        <input
            type="text"
            onChange={handleSearchTextChange}
            placeholder="...search contacts"
        />
     );
}

export default SearchContact;