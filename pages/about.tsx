import { useEffect, useState } from "react"
import Image from "next/image"
import reactLogo from "../public/react_logo.png"
import AppNavbar from "../components/AppNavbar"

export default function AboutPage(){

    const [age , setAge] = useState(30)
    const [isShow, serIsShow] = useState(false)

    useEffect(() => {
        console.log("useEffect AboutPage")
    })

    useEffect(() => {
        console.log("useEffect AboutPage one time")
    },[age])

    useEffect(() => {
        return() => {
            console.log("Exit")
        }
    },[])


    const showMsg = () => {
        setAge(40)
        serIsShow(!isShow)
    }

    return(
        <div>
            <AppNavbar/>
            <hr/>
            <h1>About Page {process.env.NEXT_PUBLIC_APP_NAME}</h1>
            <Image src={reactLogo} alt="React Logo" />
            <hr/>
            <Image src="/me.jpg" alt="Potae" width={100} height={100} />
            <hr/>
            <Image src="https://codingthailand.com/site/img/book1.png" alt="หนังสือ อ.เอก" width={180} height={300} />
            { isShow && <p>Age = {age} Year</p> }
            <div>
            <button onClick={showMsg}>Click Me</button>
            </div>
        </div>
    )
}