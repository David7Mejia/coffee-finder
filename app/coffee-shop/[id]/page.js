"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const CoffeeShop = () => {
    const params = useParams();
    return (
        <div>
            <Link href="/">Back to Home</Link>
            <h1>Welcome</h1>
            {/* <p>{router}</p> */}
        </div>
    );
};

export default CoffeeShop;
