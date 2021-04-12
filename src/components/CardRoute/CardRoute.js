import React, { useState, useEffect } from "react";
import "./CardRoute.css";
import AgentImg from "../Images/buhari.jpg";
import SittingRoom from "../Images/sitR1.jpg";
import BedRoom from "../Images/bdR1.jpg";
import Kitchen from "../Images/kitc1.jfif";
import BathRoom from "../Images/batR1.png";
import { app } from "../FireBase/Base";
import { useParams } from "react-router-dom";

const FlatRent = app.firestore().collection("RentFlat");
function CardRoute() {
  const { id } = useParams();
  const [RouteHomes, setRouteHomes] = useState([]);
  const [details, setDetails] = useState();

  const seeDetail = async () => {
    const docRef = await FlatRent.doc(id);
    const docData = await docRef.get();
    setDetails(docData.data());
  };

  const getRouteHomes = async (id) => {
    await FlatRent.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setRouteHomes(i);
    });
  };

  useEffect(() => {
    getRouteHomes();
    seeDetail();
  }, []);

  return (
    <>
      <div className="RouteMainDiv">
        <div className="SubRouteDiv">
          <div className="FourImgRouteDiv">
            <img src={details && details.img1} alt="" className="RouthFrImg" />
            <img src={details && details.img2} alt="" className="RouthFrImg" />
            <img src={details && details.img3} alt="" className="RouthFrImg" />
            <img src={details && details.img4} alt="" className="RouthFrImg" />
          </div>
          <div className="LocationDiscriptinDiv">
            <div className="ImgNameRoutMAin">
              <img src={AgentImg} alt="" className="RouteAgentImg" />
              <div className="RouteAgentNameTime">
                <div className="RouteAgentName">Moahammud Buhari </div>
                <div className="RouteAgentTime"> 02:00pm </div>
              </div>
            </div>
            <div className="RouteLocationDiv">
              <div className="LocationTitle">Location</div>
              <div className="LocationContent">
                {details && details.location}
              </div>
            </div>
            <div className="RouteDiscrDiv">
              <div className="DiscriptionTitle">Discription</div>
              <div className="DiscriptionContent">
                {details && details.discription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardRoute;
