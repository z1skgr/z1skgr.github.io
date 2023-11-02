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
    FaGoogle,
    FaLinkedin,
    FaPaypal,
    FaPinterest,
    FaReddit,
    FaSkype,
    FaSpotify,
    FaTelegram,
    FaViber,
    FaYahoo
  } from "react-icons/fa";

function Social() {



  return (
    <section>
    <span className="text-center text-2xl flex justify-center pb-3"> <h1>
        <b>PERSONAL</b>
    </h1></span>
   
  
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="personal-icons">
        <FaTelegram />
        <SocialForm title={"Telegram"} footer={"z1skgr"} link={"https://github.com/z1skgr"}/>
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaYahoo />
        <SocialForm title={"Yahoo"} footer={"google.gr"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaDiscord />
        <SocialForm title={"Discord"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaTwitch />
        <SocialForm title={"Twitch"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaInstagram />
        <SocialForm title={"Instagram"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaFacebook />
        <SocialForm title={"Facebook"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaDAndDBeyond/>
        <SocialForm title={"DnD Beyond"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaGoogle />
        <SocialForm title={"Google"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaReddit />
        <SocialForm title={"Reddit"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaSpotify/>
        <SocialForm title={"Spotify"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaSkype />
        <SocialForm title={"Skype"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaViber />
        <SocialForm title={"Viber"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaPaypal  />
        <SocialForm title={"PayPal"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <SiYoutube />
        <SocialForm title={"Youtube"} footer={"Telegram"} />
      </Col>

      <Col xs={4} md={2} className="personal-icons">
        <FaLinkedin  />
        <SocialForm title={"LinkedIn"} footer={"Telegram"} />
      </Col>
      <Col xs={4} md={2} className="personal-icons">
        <FaPinterest />
        <SocialForm title={"Pinterest"} footer={"Telegram"} />
      </Col>



          
        </Row>
    </section>
   

  );
}

export default Social;
