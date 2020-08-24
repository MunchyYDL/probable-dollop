import React from "react"

import { Layout }  from "../components"
import styles from "./index.module.css"

export default function Home() {

    return (
        <Layout>
            <div className={`index ${styles.index}`}>
                <div>
                    <h1>/DEV/BRAINS</h1>
                    <h2>Experter inom systemutveckling</h2>
                </div>
            </div>
        </Layout>
    )
}