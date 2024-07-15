import React from "react";
import InformationCard from "./InformationCard";
import { 
  faHeartPulse, 
  faTruckMedical, 
  faTooth,
  faUserMd, 
  faHospitalUser,
  faBrain,   
  faTint,
  faStethoscope,
  faBaby,
  faLungs,   
  faEye,     
  faEarDeaf,
  faChild,
  faHeadSideVirus,
  faMale,
  faRibbon,  
  faBone,
  faHandHoldingMedical, 
  faSyringe, 
  faXRay,    
  faVials,   
  faProcedures, 
  faHandsHelping,
  faFlask
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

const services = [
  { title: "Emergency & Trauma Care", icon: faTruckMedical },
  { title: "General Medicine", icon: faUserMd },
  { title: "General Surgery", icon: faHospitalUser },
  { title: "Cardiology", icon: faHeartPulse },
  { title: "Neurology", icon: faBrain },
  { title: "Nephrology", icon: faTint },
  { title: "Gastroenterology", icon: faStethoscope },
  { title: "Obstetrics and Gynaecology", icon: faBaby },
  { title: "Pulmonology", icon: faLungs },
  { title: "Ophthalmology", icon: faEye },
  { title: "Dental", icon: faTooth },
  { title: "E. N. T", icon: faEarDeaf },
  { title: "Pediatrics", icon: faChild },
  { title: "Psychiatry", icon: faHeadSideVirus },
  { title: "Urology", icon: faMale },
  { title: "Oncology", icon: faRibbon },
  { title: "Orthopedics", icon: faBone },
  { title: "Dermatology", icon: faHandHoldingMedical },
  { title: "Anesthesiology", icon: faSyringe },
  { title: "Radiology", icon: faXRay },
  { title: "Bio Chemistry, Pathology and Microbiology", icon: faVials },
  { title: "Physical Medicine & Rehabilitation", icon: faProcedures },
  { title: "Mental Health Counseling", icon: faHandsHelping },
  { title: "Laboratory", icon: faFlask }
];

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        {services.map((service, index) => (
          <InformationCard
            key={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Info;
