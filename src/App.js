import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

//plz subscribe to thapa technical
  return (
    <>
      <div className="container">
      
      <h3 className="py-4 text-center">Assignment II</h3>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((post) => {
          const { name, id, username, email, address, phone, website, company } = post;
          return (
            <div key={id} className="card p-4 m-3 ">
              <h5>{name.toUpperCase()}</h5>
              <p><b>Username</b>: {username}</p>
              <p><b>Email</b>: {email}</p>
              <p><b>Street</b>: {address.street}</p>
              <p><b>City</b>: {address.city}</p>
              <p><b>Zipcode</b>: {address.zipcode}</p>
              <p><b>Geo Lat</b>: {address.geo.lat}</p>
              <p><b>Geo Lng</b>: {address.geo.lng}</p>
              <p><b>Phone</b>: {phone}</p>
              <p><b>Website</b>: {website}</p>
              <p><b>Company Name</b>: {company.name}</p>
              <p><b>Comany catchPhrase</b>: {company.catchPhrase}</p>
              <p><b>Company Bs</b>: {company.bs}</p>
            </div>
          
          );
        })}
      </div>
      
      </div>
    </>
  );
};

export default App;
