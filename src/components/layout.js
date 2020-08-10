import React from "react"

import Header from "./header"
import Footer from "./footer"

export default function Layout(props) {

    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}