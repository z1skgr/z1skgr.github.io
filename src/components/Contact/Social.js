import React from "react";
import SocialForm from "./SocialForm";
import { Row,Col, Container } from "react-bootstrap";
import {
    SiYoutube,
    SiOsu,
    SiSpotify,
    SiEpicgames
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
   
  <Container>
  <Row className="d-flex justify-content-between" style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="personal-icons">
        <FaDiscord />
        <SocialForm title={"Discord"} footer={"z1skgr#2076"} link={"https://discord.gg/X8HnEwsJ"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaTwitch />
        <SocialForm title={"Twitch"} footer={"z1skgr"} link={"https://www.twitch.tv/z1skgr"}/>
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaInstagram />
        <SocialForm title={"Instagram"} footer={"Christos Ziskas"} link={"https://www.instagram.com/christosziskas/"} />
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
        <SiOsu />
        <SocialForm title={"Osu"} footer={"z1skgr"} link={"https://osu.ppy.sh/users/17307675"} />
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
        <SiEpicgames />
        <SocialForm title={"Epic Games"} footer={"czisk"} link={"https://store.epicgames.com/en-US/u/1ef2dfada23644dfbdaec5766e5b4aa5"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaSteam />
        <SocialForm title={"Steam"} footer={"G0ds.Bless"} link={"https://steamcommunity.com/profiles/76561198118951691/"} />
      </Col>
      
      <Col xs={4} md={2} className="personal-icons">
        <SiSpotify />
        <SocialForm title={"Spotify"} footer={"Christos Ziskas"} link={"https://open.spotify.com/user/313ipubodrd5iuruiurvmrg6jbra?si=c7f6c79a65df4e9b"} />
      </Col>
      
      
      <Col xs={4} md={2} className="personal-icons">
        <FaSkype />
        <SocialForm title={"Skype"} footer={"cziskas@isc.tuc.gr"}  />
      </Col>
      

             

        </Row>
  </Container>
  
    </section>
   

  );
}

export default Social;
