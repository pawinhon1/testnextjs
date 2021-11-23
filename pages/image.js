import Image from 'next/image' 

export default function(){
    return(
        <>
            <h1>Image Optimization</h1>
            <h3>By React Next.js</h3>

            <Image
                src="/nextjs.png"
                height={480}
                width={720}
                alt="nextjs image"
            />
        </>
    )
}