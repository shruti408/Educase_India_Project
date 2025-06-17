import '../common.css';
export function Register() {
    return (
        <>
            <div className="card" >
                <div className="heading">Create your PopX account</div>
                <form action='/user'>
                    <div className="form-group">
                        <label className="input-title" style={{ top: '101px', width: '96px', color: '#6C25FF' }} for="exampleIn,putEmail1">Full Name</label>
                        <input type="text" className="form-control input" style={{ top: '110px' }} id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue="Marry Doe" required />
                    </div>
                    <div className="form-group">
                        <label className="input-title" style={{ top: '165px', width: '95px', color: '#6C25FF' }} for="exampleInputPassword1">Phone number</label>
                        <input type="text" className="form-control input" style={{ top: '174px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div className="form-group">
                        <label className="input-title" style={{ top: '229px', width: '98px', color: '#6C25FF' }} for="exampleInputPassword1">Email address</label>
                        <input type="text" className="form-control input" style={{ top: '238px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div className="form-group">
                        <label className="input-title" style={{ top: '293px', width: '68px', color: '#6C25FF' }} for="exampleInputPassword1">Password</label>
                        <input type="text" className="form-control input" style={{ top: '302px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div className="form-group">
                        <label className="input-title" style={{ top: '357px', width: '95px',color: '#6C25FF' }} for="exampleInputPassword1">Company name</label>
                        <input type="text" className="form-control input" style={{ top: '366px' }} id="exampleInputPassword1" defaultValue="Marry Doe" />
                    </div>
                    <fieldset className="form-group" >
                        <legend className="input-title" style={{top: '421px', left: '20px', width: '125px', color: '#1D2226'}}>Are you an agency?</legend>
                        <div className="form-check form-check-inline" style={{position: 'absolute', top: '447px', left: '20px', width: '23px', height: '17px'}}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                            <label className="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline" style={{position: 'absolute', top: '447px', left: '80px', width: '23px', height: '17px'}}>
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn link" style={{ background: '#6C25FF', top: '530px',  color: '#FFFFFF'}} >Create Account</button>
                </form>
            </div>
        </>
    )
}