import Link from 'next/link';
import Head from 'next/head'

export default function FirstPost() {
    return <>
        <Head>
            <title>First post</title>
        </Head>
        <h1>First Post</h1>
        <Link href="/">Back to home</Link>
    </>

}