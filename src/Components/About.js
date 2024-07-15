import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Founded on the 20th October 1953, Christian Mission hospital was the result of the humble vision of Late Dr. K C Samuel, to extend medical services to the residents of Pandalam vicinity and the outlying areas. Christian Mission hospital started out as a small clinic, as the first modern medical institution in Pandalam. By the early 70s’ departments of General Surgery, Obstetrics and Gynecology and general Medicine were added to the hospital functioning, thereby upgrading itself as a Specialty Hospital. Towards the late 1990s’, Christian Mission Hospital stepped up as a multi-Specialty hospital, by Neurology, Cardiology, Gastroenterology, and other specialty departments to its list of services. </p>

<p className="about-description">Today, Christian Mission Hospital has added to its functionalities state-of-the-art Theater complex, Labour room, Cardiac Catherization Laboratory with CCU (Cardiac Care Unit), MICU (Medical Intensive Care unit), NICU (Neuro Intensive Care Unit), 24×7 Casualty services, ECG, Treadmill Test(TMT),Echocardiography, Color Doppler, Stress and strain Echocardiography, Transesophageal Echocardiography (TEE) , Holter Monitoring, Ambulatory BP monitoring, High-tech Laboratory, Dialysis unit, Computerized X-ray, CT scan, PFT, EEG,EMG, NCV, Audiogram, ESWL, VPT, Colour Doppler study, Sleep study etc. Moreover, Other specialty services include Peripheral and Coronary Angioplasties, Emergency Angioplasty, Pacemaker implantation, Fractional flow Reserve, ASD Device Closure, all endoscopic procedures, knee and Hip Surgeries, Key Hole Surgical procedures etc.
</p><p className="about-description">
To recapitulate, Christian mission hospital committed to providing the highest standard of clinical expertise and nursing care. Our hospital provides rapid assessment, intervention, and treatment for numerous common and complex medical conditions.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Christian Mission Hospital. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
