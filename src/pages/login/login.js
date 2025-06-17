import '../common.css'
export function Login() {
    return (
        <>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title heading">Signin to your PopX account</h5>
                    <h6 class="card-subtitles" style={{top: '109px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h6>
                    <form action="/user">
                        <div class="form-group">
                            <label className="input-title" style={{ top: '185px', width: '96px', color: '#6C25FF' }} for="exampleInputEmail1">Email Address</label>
                            <input type="text" class="form-control input-login" style={{ top: '194px' }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email address' />
                        </div>
                        <div class="form-group">
                            <label className="input-title" style={{ top: '248px', width: '95px', color: '#6C25FF' }} for="exampleInputPassword1">Password</label>
                            <input type="text" class="form-control input-login" style={{ top: '257px' }} id="exampleInputPassword1" placeholder="Enter password" />
                        </div>
                        <button type="submit" class="btn link" style={{top: '311px', background:'#CBCBCB', color: '#FFFFFF'}}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}