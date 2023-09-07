"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Banner/Banner.js";
import Head from "next/head";
import Card from "./Card/page";
import coffeeStores from "./data/coffee-stores.json";

export async function getCoffeeStores() {
    // const res = await fetch(`https://...`);
    // const projects = await res.json();

    return coffeeStores;
}

export default async function Home() {
    const onClickBanner = () => {
        console.log("Banner button click");
    };
    const coffeeStores = await getCoffeeStores();

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
                <div className={styles.heroImage}></div>
                {coffeeStores.length > 0 && (
                    <div>

                    <h2 className={styles.heading2}>Toronto Stores</h2>
                    </div>
                )}
                <div className={styles.cardLayout}>
                    {coffeeStores?.map((coffeeStore, i) => (
                        <Card
                            key={i}
                            className={styles.card}
                            name={coffeeStore.name}
                            imgUrl={coffeeStore.imgUrl}
                            href={`coffee-store/${coffeeStore.id}`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
