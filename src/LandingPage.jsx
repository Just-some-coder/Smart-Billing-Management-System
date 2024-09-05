import {Link} from "react-router-dom";
import './LandingPage.css'
function LandingPage() {
    return (
        <>
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="navbar-brand newsreader">
                        SpendWise
                    </h1>
                    <Link to={'/login'}>
                        <button className="login-button">
                            Login
                        </button>
                    </Link>
                </nav>
            </section>

            <section className="body">
                <h1 className={'newsreader'}>“Do not save what is left after spending, but spend what is left after
                    saving”. – Warren Buffett</h1>

                <Link to={'/signup'}>
                    <button className="start-button">
                        Start Wise
                    </button>
                </Link>
            </section>
        </>
    );
}
export default LandingPage;