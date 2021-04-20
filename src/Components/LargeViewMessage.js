import React from 'react';


function LargeViewMessage() {
    return (
        <>

            <div className="large-view-message-box">

                <div style={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "2px solid #3c64c7",
                    borderRadius: "20px", marginTop: "5vw", marginLeft: "15vw", width: "70vw", fontFamily: "Poppins-600"
                }}>
                    <h1 style={{ color: "#8bacff", textAlign: "center" }}>
                        The UI starts to be visible at the &ensp;" 480px "&ensp; screen resolution.
                </h1>
                    <h2 style={{ color: "#ff5998", textAlign: "center" }}>
                        P.S. : UI perfectly works at the &ensp;" 375px &ensp;x&ensp; 812px "&ensp; screen resolution, i.e., for iPhone X.
                </h2>
                </div>

            </div>

        </>

    );
};


export default LargeViewMessage;
