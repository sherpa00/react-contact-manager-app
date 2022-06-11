import { useEffect, useState } from "react";
import ClearAllContact from "./components/ClearAllContact";
import DisplayContact from "./components/DisplayContact";
import EditOrAddContact from "./components/EditOrAddContact";
import SearchContact from "./components/SearchContact";


function App() {

  const [contactName,setContactName] = useState("");
  const [contactPhoneNum, setContactPhoneNum] = useState("");
  const [contactList,setContactList] = useState([]);

  const handleSubmitInfo = (val) => {
    let newArr = [...contactList,val];
    setContactList(newArr);
  }

  const handelTextChange = (val) => {
    setContactName(val);
  }

  const handlePhoneChange = (val) => {
    setContactPhoneNum(val);
  }

  const handleClearAllClick = () => {
    setContactList([]);
  }

  const handleSingleDelete = (x) => {
    let newArr = contactList.filter((el,index) => {
      if (Number(x) !== index) {
        return el;
      }
      return null;
    })

    setContactList(newArr);
  }

  const handleSingleEdit = (x) => {
    let name,phone;
    name = contactList[x][0];
    phone = contactList[x][1];
    setContactName(name);
    setContactPhoneNum(phone);
    handleSingleDelete(x);
  }
    
  return (
    <div className="container">
      <h1>CONTACT MANGAER APP</h1>
      <EditOrAddContact
        name={contactName}
        phoneNum={contactPhoneNum}
        onHandleSubmit={handleSubmitInfo}
        onPhoneChange={handlePhoneChange}
        onTextChange={handelTextChange}
      />

      <br></br>
      <DisplayContact
        contactList={contactList}
        onSingleDelete={handleSingleDelete}
        onSingleEdit={handleSingleEdit}
      />

      <br></br>

      <ClearAllContact
        onClearAllClick={handleClearAllClick}
      />
    </div>
  );
}

export default App;
