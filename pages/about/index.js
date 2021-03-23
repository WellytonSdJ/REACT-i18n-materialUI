import React from 'react'

export default function About(data) {
    console.log(data)
    return (
        <>
            <center>
                <h1>
                    {/* {data.data.map((item) => (
                        <div>
                            item.name
                        </div>
                    ))} */}
                </h1>
            </center>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/wellytonsdj')
    // const res = await fetch('http://localhost:8080/api/teste')
    const data = await res.json()

    return { props: { data } }
}