import './AdminNavBar.css'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

export default function AdminNavBar() {
    return (
        <div className="Admin-NavBar">
            <div className="Admin-NavBar-Items">
                <Link to='/'>
                    <FontAwesomeIcon className="HouseIcon" icon={faHouse} />
                </Link>
                <a href='/FormCreation'>FORM CREATION</a>
                <a href='/People'>TABLE</a>
                <a href='/FormCreation' className='Connect'>VIEW REPORTS</a>
            </div>
            <div className="LogOut">
                <button className="LogOut-Button">LOG OUT</button>
            </div>
        </div>  
    )
}