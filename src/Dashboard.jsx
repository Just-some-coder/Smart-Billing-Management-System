import {Link, Outlet} from "react-router-dom";

function Dashboard() {
    return (
        <>
            <nav className="nav-dashboard">
                <h2 className={'newsreader'}>SpendWise</h2>
                <ul>

                    <li>
                        <Link to={'inventory'}>
                            Inventory
                        </Link>
                    </li>

                    <li>
                        <Link to={'insights'}>
                            Insights
                        </Link>
                    </li>

                    <li>
                        <Link to={'invoice'}>
                            Invoice
                        </Link>
                    </li>

                    <li>
                        <Link to={'settings'}>
                            Settings
                        </Link>
                    </li>

                    <li>
                        <Link to={'profile'}>
                            Aditya
                        </Link>
                    </li>
                </ul>
            </nav>
            <>
                <Outlet/>
            </>
        </>
    );
}

export default Dashboard