import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ATLAS from "@/assests/image/ATLAS.png";
import elastic from "@/assests/image/elastic.png";
import HashiCorp from "@/assests/image/HashiCorp.png";
import Gitlab from "@/assests/image/Gitlab.png";
import MessageBird from "@/assests/image/MessageBird.png";
import Reddis from "@/assests/image/Reddis.png";
import RedHat from "@/assests/image/RedHat.png";
import VMWare from "@/assests/image/VMWare.png";
import Image from "next/image";

export function Options({ actions }) {
  const handleServices = () => {
    actions.setServices();
  };
  const handleProducts = () => {
    actions.setProducts();
  };
  const handlePartners = () => {
    actions.setPartners();
  };
  const handleContact = () => {
    actions.setContact();
  };

  return (
    <div>
      <button className="start-btn options" onClick={handleServices}>
        Services
      </button>
      <button className="start-btn options" onClick={handleProducts}>
        Products
      </button>
      <button className="start-btn options" onClick={handlePartners}>
        Partners
      </button>
      <button className="start-btn options" onClick={handleContact}>
        Contact
      </button>
    </div>
  );
}

export function PdPartners() {
  const partnerData = [
    {
      image: ATLAS,
      description: "Gitlab",
    },
    {
      image: elastic,
      description: "MessageBird",
    },
    {
      image: HashiCorp,
      description: "Reddis",
    },
    {
      image: Gitlab,
      description: "RedHat",
    },
    {
      image: MessageBird,
      description: "VMWare",
    },
    {
      image: Reddis,
      description: "Elastic",
    },
    {
      image: RedHat,
      description: "HashiCorp",
    },
    {
      image: VMWare,
      description: "Atlassian",
    },
  ];

  return (
    <div>
      <div className="partner-list">
        {partnerData.map((partner, index) => (
          <div key={index} className="partner">
            <Image
              src={partner.image}
              alt={`Partner ${index + 1}`}
              width={100}
              height={100}
            />
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PdProducts({ actions }) {
  const handleEx = () => {
    actions.setEx();
  };
  const handleIv = () => {
    actions.setIv();
  };
  const handleSSO = () => {
    actions.setSSO();
  };
  const handleAssessmentTools = () => {
    actions.setAssessmentTools();
  };

  return (
    <div>
      <button className="service-options" onClick={handleEx}>
        PDCloudEX
      </button>
      <button className="service-options" onClick={handleIv}>
        IVentura
      </button>
      <button className="service-options" onClick={handleSSO}>
        SSO
      </button>
      <button className="service-options" onClick={handleAssessmentTools}>
        DevOps Assessment Tool
      </button>
    </div>
  );
}

export function Query({ actions }) {
  const handleYes = () => {
    actions.setYes();
  };
  const handleNo = () => {
    actions.setNo();
  };
  return (
    <div>
      <button className="query-options" onClick={handleYes}>
        Yes
      </button>
      <button className="query-options" onClick={handleNo}>
        No
      </button>
    </div>
  );
}

export function PdServices({ actions }) {
  const handleCloud = () => {
    actions.setCloud();
  };
  const handleApplication = () => {
    actions.setApplication();
  };
  const handleMonitor = () => {
    actions.setMonitor();
  };
  const handleId = () => {
    actions.setId();
  };
  const handleAutomation = () => {
    actions.setAutomation();
  };
  const handleDevops = () => {
    actions.setDevops();
  };

  return (
    <div>
      <button className="service-options" onClick={handleCloud}>
        Cloud Services
      </button>
      <button className="service-options" onClick={handleApplication}>
        Application Modernization
      </button>
      <button className="service-options" onClick={handleMonitor}>
        360 degrees Monitoring
      </button>
      <button className="service-options" onClick={handleAutomation}>
        Automation
      </button>
      <button className="service-options" onClick={handleId}>
        Identity & Access Management
      </button>
      <button className="service-options" onClick={handleDevops}>
        DevOps Tools & Support
      </button>
    </div>
  );
}

export function PdContact() {
  const address =
    "Building # 389, Second Floor, 8th Main, 7th Cross, MICO Layout, BTM 2nd stage, Bengaluru - 560076";
  const email = "contact@prodevans.com";
  const phoneNumber = "+91 8095933365";

  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <h4>India HQ Address</h4>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone Number:</strong> <br />
          {phoneNumber}
        </p>
      </div>
    </div>
  );
}

export function RatingWidget({ actions }) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleRateSubmit = () => {
    actions.setFinalMessages(selectedRating);
  };

  const starContainerStyle = {
    display: "flex",
  };

  const buttonStyle = {
    backgroundColor: "#7067e5",
    color: "#FFFFFF",
    padding: "5px",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
    marginLeft: "35px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={starContainerStyle}>
        {" "}
        {Array.from({ length: 5 }).map((_, index) => {
          const rating = index + 1;
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleRatingClick(rating)}
              onMouseOver={() => setHoverRating(rating)}
              onMouseLeave={() => setHoverRating(0)}
              color={
                selectedRating >= rating
                  ? colors.orange
                  : hoverRating >= rating
                  ? colors.orange
                  : colors.grey
              }
              style={{
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <button onClick={handleRateSubmit} style={buttonStyle}>
        Submit
      </button>
    </div>
  );
}
