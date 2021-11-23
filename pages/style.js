

export default function nextCss(){
    return(
        <div>
            <h1>Hello CSS</h1>
            <p>style css</p>
            
            <style jsx>{`
                h1{
                    color:red;
                }
                p{
                    background-color:grey;
                    color:white;
                }
            `}</style>
        </div>    
    )
}