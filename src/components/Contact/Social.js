import React from "react";
import SocialForm from "./SocialForm";
import { Row,Col } from "react-bootstrap";
import {
    SiYoutube
  } from "react-icons/si";
  import {
    FaDiscord,
    FaTwitch,
    FaInstagram,
    FaFacebook,
    FaDAndDBeyond,
    FaLinkedin,
    FaSkype,
    FaSteam,    
  } from "react-icons/fa";

function Social() {



  return (
    <section>
    <span className="text-center text-2xl flex justify-center pb-3"> <h1>
        <b>PERSONAL</b>
    </h1></span>
   
  
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="personal-icons">
        <FaDiscord />
        <SocialForm title={"Discord"} footer={"z1skgr"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaTwitch />
        <SocialForm title={"Twitch"} footer={"z1skgr"} link={"https://www.twitch.tv/z1skgr"}/>
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaInstagram />
        <SocialForm title={"Instagram"} footer={"Christos Ziskas"} link={"https://www.linkedin.com/in/christos-ziskas-1b683822b"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaFacebook />
        <SocialForm title={"Facebook"} footer={"Zisk"} link={"https://www.facebook.com/ZiskTheName"}/>
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaDAndDBeyond/>
        <SocialForm title={"DnD Beyond"} footer={"Zisk"} link={"https://www.dndbeyond.com/members/Zisk"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaSkype />
        <SocialForm title={"Skype"} footer={"Christos Ziskas"} link="https://secure.skype.com/portal/profile?intsrc=client-_-windows-_-8.106.0.212-_-.userInfo.profile&tcg=a1abc8c1-f259-4bb8-985b-1f93838fd989" />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <SiYoutube />
        <SocialForm title={"Youtube"} footer={"@christosziskas7752"} link={"https://www.youtube.com/channel/UCyDkbKI8N25oDG7SrBz2JJw"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaLinkedin  />
        <SocialForm title={"LinkedIn"} footer={"@christosziskas"} link={"https://www.linkedin.com/in/christos-ziskas-1b683822b/"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaSteam />
        <SocialForm title={"Steam"} footer={"G0ds.Bless"} link={"https://steamcommunity.com/profiles/76561198118951691/"} />
      </Col>


          
        </Row>
    </section>
   

  );
}

export default Social;
