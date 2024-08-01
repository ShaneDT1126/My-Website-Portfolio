import './NavbarView.css'

export function NavbarView(){
    return(
        <nav className="navbar">
            <div className='nav-logo'>
                <a href='#'>ShaneDT</a>
            </div>
            <div className='nav-links'>
                <a href='#'>Home</a>
                <a href='#'>Skills</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </div>
        </nav>
    )
}