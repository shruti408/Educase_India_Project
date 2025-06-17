import '../common.css'
export function Login() {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title heading">Signin to your PopX account</h5>
                    <h6 className="card-subtitles" style={{top: '109px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h6>
                    <form action="/user">
                        <div className="form-group">
                            <label className="input-title" style={{ top: '185px', width: '96px', color: '#6C25FF' }} for="exampleInputEmail1">Email Address</label>
                            <input type="text" className="form-control input-login" style={{ top: '194px' }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email address' />
                        </div>
                        <div className="form-group">
                            <label className="input-title" style={{ top: '248px', width: '95px', color: '#6C25FF' }} for="exampleInputPassword1">Password</label>
                            <input type="text" className="form-control input-login" style={{ top: '257px' }} id="exampleInputPassword1" placeholder="Enter password" />
                        </div>
                        <button type="submit" className="btn link" style={{top: '311px', background:'#CBCBCB', color: '#FFFFFF'}}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}