import '../common.css';
export function Register() {
    return (
        <>
            <div className="card" >
                <div className="heading">Create your PopX account</div>
                <form action='/user'>
                    <div class="form-group">
                        <label className="input-title" style={{ top: '101px', width: '96px', color: '#6C25FF' }} for="exampleIn,putEmail1">Full Name</label>
                        <input type="text" class="form-control input" style={{ top: '110px' }} id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue="Marry Doe" required />
                    </div>
                    <div class="form-group">
                        <label className="input-title" style={{ top: '165px', width: '95px', color: '#6C25FF' }} for="exampleInputPassword1">Phone number</label>
                        <input type="text" class="form-control input" style={{ top: '174px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div class="form-group">
                        <label className="input-title" style={{ top: '229px', width: '98px', color: '#6C25FF' }} for="exampleInputPassword1">Email address</label>
                        <input type="text" class="form-control input" style={{ top: '238px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div class="form-group">
                        <label className="input-title" style={{ top: '293px', width: '68px', color: '#6C25FF' }} for="exampleInputPassword1">Password</label>
                        <input type="text" class="form-control input" style={{ top: '302px' }} id="exampleInputPassword1" defaultValue="Marry Doe" required />
                    </div>

                    <div class="form-group">
                        <label className="input-title" style={{ top: '357px', width: '95px',color: '#6C25FF' }} for="exampleInputPassword1">Company name</label>
                        <input type="text" class="form-control input" style={{ top: '366px' }} id="exampleInputPassword1" defaultValue="Marry Doe" />
                    </div>
                    <fieldset class="form-group" >
                        <legend class="input-title" style={{top: '421px', left: '20px', width: '125px', color: '#1D2226'}}>Are you an agency?</legend>
                        <div class="form-check form-check-inline" style={{position: 'absolute', top: '447px', left: '20px', width: '23px', height: '17px'}}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                            <label class="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline" style={{position: 'absolute', top: '447px', left: '80px', width: '23px', height: '17px'}}>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn link" style={{ background: '#6C25FF', top: '530px',  color: '#FFFFFF'}} >Create Account</button>
                </form>
            </div>
        </>
    )
}