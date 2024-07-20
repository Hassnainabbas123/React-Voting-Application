import React from "react";
import votingFinishedImage from "./assets/image.png"; // Replace with your image path

const Finished = (props) => {
   
    const styles = {
        finishedContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundImage: `url(${votingFinishedImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "Arial, sans-serif",
        },
        finishedMessage: {
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#fff", // White text for better contrast
            margin: 0,
            padding: "0 2rem",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
            animation: "messageAppear 1s ease-in-out forwards", // Animation trigger
        },
        "@keyframes messageAppear": {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
    };

    return (
        <div style={styles.finishedContainer}>
           {/* <h1 className={styles.finishedMessage}>Voting Finished!</h1> */}
        </div>
    );
};

export default Finished;
