import './Header.css'
export default function Header(){
    return (
        <header className="header">
          <nav>
            <ul>
                <li>Todos los heroes</li>
                <li>Marvel</li>
                <li>DC</li>
                <li>Other...</li>
            </ul>
          </nav>
        </header>
    )
}