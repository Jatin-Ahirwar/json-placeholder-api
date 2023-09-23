"use client";
import Link from "next/link";
import { GetSingle, wait } from "@/utilities/getSingle";
import React, { Suspense } from "react";

const page = async ({ params }) => {
    const post = await GetSingle(params.id);
    return (
        <div className='container mt-5 me-5'>
        <h1>Single Post</h1>
            <h3>{JSON.stringify(post)}</h3>
            <Suspense fallback={<h3>Loading........</h3>}>
                {wait(2000)}
                <h1>This data will load later...</h1>
            </Suspense>
            <Link href="/" className="btn btn-dark">Back</Link>
        </div>
    );
};

export default page;