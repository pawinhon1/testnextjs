import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'

export default function firstFunction(){
    return (
        <>
            <Head>
                <title>Hello my name Pawin</title>
            </Head>
            <Layout>
                <h1>Hello Page1</h1>    
                
                <Link href="/">
                    <a>กลับหน้าหลัก</a>
                </Link>
            </Layout>
        </>
    )
}

