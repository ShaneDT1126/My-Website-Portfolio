import '../components/LandingPage.css'

export function LandingPage(){
    return (
        <div className="landing-page">
            <header className="header">
                <div className='left-content'>
                    <p className="header-text">
                        Hello, <br/>
                        I'm <span className='header-name'>Shane</span> - <br/>
                        an aspiring <span className='header-content'>Software Engineer</span> <br/>
                        w/a focus on <br/>
                        <span className='header-content'>Full Stack Development</span>
                    </p>
                </div>
                <div className='right-content'>
                    <img className="header-gif" align="right" width={'400px'} height={'400px'} alt="side_sticker" src="https://media.giphy.com/media/TEnXkcsHrP4YedChhA/giphy.gif" />
                </div>
            </header>

            <hr />
            
        </div>
    )
}