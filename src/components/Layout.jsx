import './Layout.css'
export default function Layout({children}){
    return(
        <main className="body">
            {children}
        </main>
    )
}