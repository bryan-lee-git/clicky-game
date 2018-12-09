import React from "react";

const styles = {
    fixFooter: {
        position: "fixed",
        width: "100%",
        bottom: "0",
        overflow: "hidden",
        height: "50px",
        fontSize: "11px",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    }
}

const Footer = () => {
    return (
        <div>
            <footer style={styles.fixFooter}>
                <div className="has-text-centered">
                    <p>
                        <br />
                        <strong className="has-text-black is-uppercase has-text-weight-bold">Developed by Bryan Lee | U of U Full Stack Bootcamp | December 2018</strong>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;