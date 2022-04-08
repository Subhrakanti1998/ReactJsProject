import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {Category,Description}=this.props;
        return (
            <div>
                <div className="card bg-dark text-white"  style={{width: "19rem"  ,margin:"10px"} }>
                     {/* <img src={Link} className="card-img-top" alt="..."/>  */}
                        <div className="card-body">
                            <h5 className="card-title">{Category}</h5>
                            <p className="card-text">{Description}</p>
                            <div className='image'><img src="../bookimg/download.jpg"   alt=""></img></div>
                            
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
