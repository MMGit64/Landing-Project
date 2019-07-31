import React from 'react';

export const JigSaw = (prop) => {
    return(
    <div className="JigSaw container-fluid p-0" id="features">
      {prop.order === 1 && 
        <div className="row no-gutters">
            <div className="col-lg-6 order-lg-1 text-white showcase-img" style={{backgroundImage: `url('${prop.img}')`}}></div>
                <div className="col-lg-6 order-lg-2 my-auto showcase-text" style={{backgroundImage: `url('${prop.image}')`}}>
                    <h2>{prop.title}</h2>
                    <p className="lead mb-0"><strong>{prop.caption}</strong></p>
                </div>
        </div>
      }
      
   { prop.order === 2 && 
            <div className="row no-gutters">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: `url('${prop.img}')` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text"style={{backgroundImage: `url('${prop.image}')`}}>
                        <h2>{prop.title}</h2>
                        <p className="lead mb-0"><strong>{prop.caption}</strong></p>
                    </div>
            </div>
        }
    </div>
    )
}

export const JigSawGroup = (prop) => {
    return(
        <div className="JigSawGroup" style= {{backgroundImage:`url('${prop.img}')`}}>
            <div className="container">
                {prop.children}
            </div>
        </div>
    )
}

export default JigSaw;