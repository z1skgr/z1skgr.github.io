import React from "react";
import SocialForm from "./SocialForm";
import { Row, Col, Container } from "react-bootstrap";
import {
  SiYoutube,
  SiOsu,
  SiSpotify,
  SiEpicgames,
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
  const socials = [
    {
      icon: <FaDiscord />,
      title: "Discord",
      footer: "z1skgr#2076",
      link: "https://discord.gg/X8HnEwsJ",
    },
    {
      icon: <FaTwitch />,
      title: "Twitch",
      footer: "z1skgr",
      link: "https://www.twitch.tv/z1skgr",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      footer: "Christos Ziskas",
      link: "https://www.instagram.com/christosziskas/",
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      footer: "Zisk",
      link: "https://www.facebook.com/ZiskTheName",
    },
    {
      icon: <FaDAndDBeyond />,
      title: "DnD Beyond",
      footer: "Zisk",
      link: "https://www.dndbeyond.com/members/Zisk",
    },
    {
      icon: <SiOsu />,
      title: "Osu",
      footer: "z1skgr",
      link: "https://osu.ppy.sh/users/17307675",
    },
    {
      icon: <SiYoutube />,
      title: "Youtube",
      footer: "@christosziskas7752",
      link: "https://www.youtube.com/channel/UCyDkbKI8N25oDG7SrBz2JJw",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      footer: "@christosziskas",
      link: "https://www.linkedin.com/in/christos-ziskas-1b683822b/",
    },
    {
      icon: <SiEpicgames />,
      title: "Epic Games",
      footer: "czisk",
      link: "https://store.epicgames.com/en-US/u/1ef2dfada23644dfbdaec5766e5b4aa5",
    },
    {
      icon: <FaSteam />,
      title: "Steam",
      footer: "G0ds.Bless",
      link: "https://steamcommunity.com/profiles/76561198118951691/",
    },
    {
      icon: <SiSpotify />,
      title: "Spotify",
      footer: "Christos Ziskas",
      link: "https://open.spotify.com/user/313ipubodrd5iuruiurvmrg6jbra?si=c7f6c79a65df4e9b",
    },
    {
      icon: <FaSkype />,
      title: "Skype",
      footer: "cziskas@isc.tuc.gr",
    },
  ];

  return (
    <section className="personal-section">
      <h1 className="personal-heading">
        <b>PERSONAL</b>
      </h1>

      <Container className="personal-container">
        <Row className="personal-grid">
          {socials.map((social, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="personal-card-col">
              <div className="personal-icons">
                <div className="personal-icon-symbol">{social.icon}</div>
                <SocialForm
                  title={social.title}
                  footer={social.footer}
                  link={social.link}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Social;
