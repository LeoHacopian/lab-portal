import './LabPortal.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import AdminLogo from '/Users/leohacopian/Documents/lab-portal/src/Assets/Admin_Logo.png'

export default function LabPortal() {
  return (
    <div className="Admin-Portal">
        <img className='Admin-Logo' src={AdminLogo} alt='Techmetrica Logo' />
        <h1 className='Admin-TechmetricaTitle'>TECHMETRICA LAB</h1>
        <h2 className='Admin-TechmetricaSlogan'>CREATE FORMS, VIEW REPORTS, UNDERSTAND YOUR DATA.</h2>
        <div className='Admin-GameSelection-Container'>
            <h3 className='Admin-GameSelectionText'>SELECT A TOOL BELOW</h3>
            <hr className='GameSelectionLine' />
        </div>
        <FontAwesomeIcon className='ArrowDown' icon={faArrowDown} />
    </div>
  );
}