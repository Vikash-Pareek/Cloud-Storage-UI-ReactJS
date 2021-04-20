import React, { useState } from 'react';
import '../App.css';
import LargeViewMessage from './LargeViewMessage.js';
import NavBar from './NavBar.js';
import CloudUploadIcon from '../Assets/buttons_small.png';
import BottomNavBar from './BottomNavBar.js';
import { Link } from 'react-router-dom';
import MoreIcon from '../Assets/more_icon.png';


function Home() {

    const [foldersGridOpen, setFoldersGridOpen] = useState(true);

    const foldersGridClose = () => {
        setFoldersGridOpen(false);
    };

    const foldersGridReopen = () => {
        setFoldersGridOpen(true);
    };


    const [filesStyle, setFilesStyle] = useState();

    const changeFilesStyleOnClick = () => {
        setFilesStyle({
            display: "block",
            backgroundColor: "#5786f8",
            height: "4px",
            borderRadius: "35px 35px 0 0",
        }, setFoldersStyle({
            display: "none"
        }));

        foldersGridClose();
    };

    const [foldersStyle, setFoldersStyle] = useState({
        display: "block",
        backgroundColor: "#5786f8",
        height: "4px",
        borderRadius: "35px 35px 0 0",
    });

    const changeFoldersStyleOnClick = () => {
        setFoldersStyle({
            display: "block",
            backgroundColor: "#5786f8",
            height: "4px",
            borderRadius: "35px 35px 0 0",
        }, setFilesStyle({
            display: "none"
        }));

        foldersGridReopen();
    };



    const foldersData = [
        {
            id: 1,
            text1: "Images",
            text2: "30 f - 80.2MB",
        },
        {
            id: 2,
            text1: "Family Pictures",
            text2: "10 f - 32.7MB",
        },
        {
            id: 3,
            text1: "Movies",
            text2: "5 f - 8.3GB",
        },
        {
            id: 4,
            text1: "Songs",
            text2: "100 f - 800MB",
        },
        {
            id: 5,
            text1: "E-Books",
            text2: "8 f - 5.6MB",
        },
        {
            id: 6,
            text1: "Office Documents",
            text2: "3 f - 2MB",
        },
    ];


    const FolderIcons = (folderIcon) => {
        return (

            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f5f7fc", width: "150px", height: "150px", borderRadius: "40px" }}>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "10px 20px 0 20px" }}>
                    <div style={{
                        paddingTop: "0", height: "52px", display: "flex", flexDirection: "column",
                        flexGrow: 1
                    }}>
                        <p style={{ fontFamily: "Poppins-600", margin: "10px 0 0 0" }}>
                            {folderIcon.text1}
                        </p>
                        <p style={{ fontFamily: "Poppins-600", fontSize: "14px", color: "#959fba", margin: 0 }}>
                            {folderIcon.text2}
                        </p>
                    </div>

                    <img src={MoreIcon} alt="More Icon" />
                </div>

            </div>

        );
    };

    const FolderIconsGrid = (folderIcons) => {
        return (
            <FolderIcons
                key={folderIcons.id}
                text1={folderIcons.text1}
                text2={folderIcons.text2}
            />
        );
    };



    return (
        <>

            <LargeViewMessage />

            <div style={{ backgroundColor: "#4274eb" }} className="home">
                <NavBar />

                <p style={{ margin: "15px 0 0 35px", fontFamily: "Poppins-600", fontSize: "34px", color: "#fff" }}>
                    Hello Vikash,
            </p>
                <p style={{ margin: "0 0 0 35px", fontFamily: "Poppins-600", fontSize: "20px", color: "#d3d7e0" }}>
                    at the moment you have
            </p>

                <div style={{ margin: "15px 35px 0 35px", display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
                        <p style={{ fontFamily: "Poppins-600", fontSize: "24px", color: "#fff", margin: 0, }}>
                            52.6 GB
                    </p>
                        <p style={{ fontFamily: "Poppins-600", fontSize: "18px", color: "#d3d7e0", margin: "5px 0 0 0" }}>
                            &ensp;of 100 GB free
                    </p>
                    </div>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <img src={CloudUploadIcon} alt="Cloud Upload Icon" style={{ width: "32px", height: "32px" }} />
                    </Link>
                </div>

                <div style={{ width: "305px", margin: "5px 35px 40px 35px", backgroundColor: "#3c64c7", height: "6px", borderRadius: "5px" }}>
                    <div style={{ width: "160.4px", backgroundColor: "#ff6aa2", height: "6px", borderRadius: "5px" }}></div>
                </div>

                <div style={{
                    borderRadius: "40px 40px 0 0", backgroundColor: "#fff", display: "flex",
                    flexDirection: "column", paddingTop: "30px", marginBottom: "90px"
                }}>

                    <input type="search" name="search" placeholder="Search" style={{
                        height: "44px", width: "305px", marginLeft: "35px", backgroundColor: "#edf1fa", borderRadius: "30px",
                        border: "none", padding: "10px", outline: "none", fontFamily: "Poppins-600", fontSize: "16px", color: "#959fba"
                    }} />

                    <div style={{ borderBottom: "2px solid #d3d7e0", width: "375px", display: "flex", flexDirection: "row", marginTop: "15px" }}>
                        <div style={{ width: "135px", margin: "0 20px 0 35px", cursor: "pointer" }} onClick={changeFilesStyleOnClick}>
                            <p style={{ textTransform: "uppercase", fontFamily: "Poppins-600", fontSize: "13px", color: "#959fba", textAlign: "center" }}>
                                Files
                        </p>
                            <div style={filesStyle}></div>
                        </div>
                        <div style={{ width: "135px", margin: "0 35px 0 20px", cursor: "pointer" }} onClick={changeFoldersStyleOnClick}>
                            <p style={{ textTransform: "uppercase", fontFamily: "Poppins-600", fontSize: "13px", color: "#959fba", textAlign: "center" }}>
                                Folders
                        </p>
                            <div style={foldersStyle}></div>
                        </div>
                    </div>

                    {foldersGridOpen ?

                        <div style={{ padding: "30px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", height: "245px", overflow: "auto" }}>
                            {foldersData.map(FolderIconsGrid)}
                        </div>

                        : null}

                </div>

                <BottomNavBar />
            </div>

        </>
    );
};


export default Home;
