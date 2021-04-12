import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../AuthState/GlobalContext";
import { app } from "../FireBase/Base";

const db = app.firestore().collection("AuthUser");
const FlatRent = app.firestore().collection("RentFlat");

function UploadImage({ createdBy }) {
  const { currentData } = useContext(GlobalContext);
  const [naming, setNaming] = useState([]);
  const [get, setGet] = useState([]);

  const getData = async () => {
    const gotData = await app.auth().currentUser;

    if (gotData) {
      await FlatRent.doc(createdBy)
        .get()
        .then((doc) => {
          setNaming(doc.data());
        });
    }
  };

  const getUserData = async () => {
    await db
      .doc(createdBy)
      .get()
      .then((doc) => {
        setGet(doc.data());
      });
  };

  useEffect(() => {
    getUserData();
    getData();
  }, []);

  return (
    <>
      <div>{createdBy}</div>
      <div> {get && get.name}Hey </div>
      <div className="HomeCardAgentNameImg">
        <img src={naming && naming.image1} alt="" className="HomeAgentImg" />
        <div className="HomeCardAgentNameTime">
          <div className="HomeAgentName">{naming && naming.name} </div>
          <div className="HomeAgentTime"> 02:00pm </div>
        </div>
      </div>
    </>
  );
}

export default UploadImage;
