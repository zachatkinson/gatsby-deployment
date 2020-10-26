import React from "react";
import { Link } from "gatsby";
import useSiteMetaData from "../hooks/use-sitemetadata";

const Header = () => {
    const {title, description} = useSiteMetaData()
    return (
        <header>
            <Link to={'/'}><h1>{title}</h1></Link>
            <p>
                <em>
                    {description}
                </em>
            </p>
            <nav>
                <ul>
                    <li><Link to={'/'} activeClassName={"active"}>Home</Link></li>
                    <li><Link to={'/about'} activeClassName={"active"}>About</Link></li>
                    <li><Link to={'/blog'} partiallyActive={true} activeClassName={"active"}>Blog</Link></li>
                    <li><Link to ={'/photos'} activeClassName={"active"}>Photos</Link></li>

                </ul>
            </nav>
        </header>
    )


}

export default Header