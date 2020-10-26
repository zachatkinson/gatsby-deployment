import React from "react";
import useSiteMetaData from "../hooks/use-sitemetadata";

const Footer = () => {
    const {title, description } = useSiteMetaData()
    return (
        <footer>
            <hr />
            <p>&copy; 2020 {title}</p>
            <p>{description}</p>
        </footer>

    )
}

export default Footer