import Head from 'next/head'

export default function nextHead(){
    return(
        <>
            <Head>
                <title>Next Head</title>
                <link rel="ico" href="/favicon.ico"/>
            </Head>

            <h1>Hello Next Head</h1>
        </>
    )
}