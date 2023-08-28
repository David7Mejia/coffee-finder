"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Banner/Banner.js";
import Head from "next/head";

export default function Home() {
    const onClickBanner = () => {
        console.log("Banner button click");
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Coffee Finder</title>
                <link rel="icon" href="/favicion.ico" />
            </Head>
            <main className={styles.main}>
                <Banner
                    buttonText={"View stores nearby"}
                    handleOnClick={onClickBanner}
                />
            </main>
        </div>
    );
}
