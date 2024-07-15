import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/Dr-John-Varghese.png";
import profile2 from "../Assets/Dr-T-G-Varghese.png";
import profile3 from "../Assets/Dr-Satheesh.png";
import profile4 from "../Assets/Dr-Thomas-Varughese.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Christian Mission Hospital. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. John Varghese"
          title="General Medicine / Diabetology"
          
        />
        <DoctorCard
          img={profile2}
          name="Dr. T G Varghese"
          title="General Surgery / Cheif Surgeon"
          
        />
        <DoctorCard
          img={profile3}
          name="Dr. Satheesh"
          title="Nephrology / Consultant Neurologist"
          
        />
        <DoctorCard
          img={profile4}
          name="Dr. Thomas Varughese"
          title="Oncology / Surgical Oncologist"
          
        />
      </div>
    </div>
  );
}

export default Doctors;
