import React from 'react'

const OurVedios = () => {
  return (
    <>
    <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
        <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn" style={{fontSize:"18pxl"}}>
        Virtual Tour: A Peek Inside (Mission Walk)
</h1>
<p className="display-3 text-white animated zoomIn" style={{fontSize:"18pxl"}}>
    Take a look inside the innovation happening inside Mission Walk Centre
    </p>
</div>

</div>

<div className="video-iframe-container">
                    
                    <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/0Qf2LA5_DV0?si=5d9PONEWlnlXdOkZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                     
                    </iframe>
                             </div>
                           
        </div>
        <section>
            <div>
                <h1 style={{fontSize:"38", textAlign:"center"}}>
                Mission Walk- Marathon - 2022 | Hyderabad
                </h1>
        <div className="video-iframe-container">
                    
                    <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/OT-QS8lXFIk?si=Wp1inc7ov0eGARgz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                     
                    </iframe>
                             </div>
                             </div>
        </section>
        <section>
            <div className='mt-5'>
        <div className="card">
  <div className="card-body shadow h-100 p-3 mb-5 bg-warning rounded" style={{fontSize:"38px", textAlign:"center", height:"100"}}>
   <button>
    <div>
    <strong>
    Virtual Tour - Please Visit Once 
    </strong>
   
    </div>
    <strong>
    <i class="fa fa-youtube" aria-hidden="true"></i>
   Youtube
    </strong>
    
    </button>
  </div>
</div>
</div>
        </section>
        </>
        
  )
}

export default OurVedios