import '../common.css';
export function User() {
  return (
    <>
      <div class="card">
        <div class="card-header" style={{height: '56px', background: '#FFFFFF'}}>
          Account Settings
        </div>
        <div class="card-body row" style={{position: 'absolute', top: '69px'}}>
          <div className='col-4'>
            <img src={"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"} alt="..." style={{left: '20px', width: '80px', height: '72px'}} />
          </div>
          <div className='col-8'>
            <h6 class="card-title mb-2 ml-4">Marry Doe</h6>
            <p className="card-subtitle ml-4">Marry@Gmail.Com</p>
          </div>
          <p class="card-para">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>         
        <hr/>
        </div>
      </div>
    </>
  )
}