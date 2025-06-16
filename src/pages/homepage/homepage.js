import '../common.css';
import { Link } from 'react-router-dom';

export function Homepage() {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title card-heading">Welcome to PopX</h5>
                    <h6 className="card-text" style={{top: '592px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h6>
                    <Link to="/register" className="btn pt-3 link" style={{background:' #6C25FF', top: '669px', color: '#FFFFFF'}}>Create Account </Link>
                    <Link to="/login" className="btn pt-3 link" style={{background:' #6C25FF4B', top: '725px', color: '#1D2226'}}>Already Registered? Login</Link>
                </div>
            </div>
        </>
    )
}