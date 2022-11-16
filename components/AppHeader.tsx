type AppHeaderProps ={
    title : string,
    postcode : number
}

export default function AppHeader( {title, postcode} : AppHeaderProps ) {
    return(
        <div>
            <h2>{ title }</h2>
            <p>{ postcode }</p>
        </div>
    )
}