import React from 'react';
import '../App.css';
import LargeViewMessage from './LargeViewMessage.js';
import illustration from '../Assets/Illustration.png';
import { Link } from 'react-router-dom';
import iconBtn from '../Assets/icons_tab bar_stats copy.png';


function Onboarding() {
    return (
        <>

            <LargeViewMessage />


            <div className="onboarding">

                <>
                    <img src={illustration} alt="illus1" />

                    <p style={{
                        position: "absolute", top: "620px", left: "90px", width: "250px", height: "66px",
                        textAlign: "right", fontFamily: "Poppins-600", fontSize: "24px", fontWeight: "600", color: "#3c64c7", margin: 0
                    }}>
                        Your cloud storage safe and sound
                    </p>

                    <Link to="Home">
                        <img src={iconBtn} alt="icon1" style={{ position: "absolute", top: "700px", left: "250px" }} />
                    </Link>
                </>

            </div>

        </>
    );
};


export default Onboarding;