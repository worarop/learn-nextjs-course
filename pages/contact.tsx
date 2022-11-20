import AppHeader from "../components/AppHeader"

export default function ContactPage() {

    const fullname = "Potae"
    let age = 28
    const showDate = <p>{new Date().getFullYear()}</p>
    const isLogin = true

    const showMsg = () => {
        alert("Hello")
    }


    return(
        <div>
            <h1>Contact Page</h1>
            <AppHeader title="Yoooo" postcode={age}/>
            <hr/>
            <button onClick={() => {
                alert ("Hello 2")
            }}>Click Me</button>
            <hr />
            <button onClick={showMsg}>Click Me2</button>
            <hr />
            {
                isLogin ? <p>Your Welcome {fullname}</p> : <p>Pls Login</p>
            }

            {
                isLogin && <p>{fullname}</p>
            }

            <p>Hello {fullname.toUpperCase()} Age {age} Year</p>
            {showDate}
            
        </div>
    )
}