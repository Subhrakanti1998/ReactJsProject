import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './Newscss.css'
//import PropTypes from 'prop-types'

export class News extends Component {
  
  // static defaultProps={
  //   Category:'Animals'
    
  // }
  // static propTypes={
  //   Category:PropTypes.string
  // }
  // image=[
  //   {
  //       image:"bookimg/download (1).jpg"
  //   },
  //   {
  //       image:"booking/download (2).jpg"
  //   },
  //   {
  //       image:"booking/download.jpg"
  //   }
  // ]
  

 
    constructor(){
        super();
        this.state={
          entries:[],
          currentPage: 1,
          entriesPerPage: 20,
          // image:this.image
         }
    } 
   
   
    async componentDidMount(){
        let url=`https://api.publicapis.org/entries?Category=${this.props.Category}`;
        let data=await  fetch(url);
        let newData=await data.json();
        console.log(newData);
        this.setState({entries:newData.entries})
     }
     clickMe=(click)=>{
       this.setState({
         currentPage:Number(click.target.id)
         
       })
     }

        
  render() {
    
    const lastIndex=this.state.currentPage*this.state.entriesPerPage;
    const firstIndex=lastIndex-this.state.entriesPerPage;
    const currentEntries=this.state.entries.slice(firstIndex,lastIndex);
   const renderList=currentEntries.map((element)=>{
      return( <div  className='col-md-4'  key = {element.Link}>
              <NewsItem Category={element.Category} Description={element.Description} Link={element.Link} />
              </div>)
     
    })
    // const image=this.state.image.map((img)=>{
    //   return(<div className='col-md-4' > <NewsItem image={img.image}/></div>)

    // })
  
 

    const pageNumber=[];
    let i=1;
    for(i=1;i<=Math.ceil(this.state.entries.length/this.state.entriesPerPage);i++){
      pageNumber.push(i);
    }
    
    const renderPageNumber=pageNumber.map((pNumber)=>{
      return<div>
     <button style={{margin:"3px" }} className='button' key={pNumber} id={pNumber}  onClick={this.clickMe}>{pNumber}</button>
     
     </div>

    })

    return (<div className='container my-3' >
      <div>
      <h1 className='text-center'>All In One</h1>
      <div className='row' id='renderPageNumber'>
        
     {renderList}
     {/* {image} */}
    
     <div className='renderPageNumber'>{renderPageNumber}</div>
     

     </div>
    </div>
    </div>
    
    );
    
      
    
  }
}

export default News





// return (
    //   <div className='container my-3'>
    //       <h2>headline</h2>
    //       <div className='="row'>
    //            {this.state.entries.map((element)=>{ 
    //           return( <div className='col-md-3' key = {element.Link}>
    //           <NewsItem Category={element.Category} Description={element.Description} Link={element.Link} />
    //           </div>)
    //         })}
    //         <div><button type="button" id="button" onClick={this.click}></button></div>
    //       </div> 
    //   </div>
    // )
    // const {entries,currentPage,entriesPerPage}=this.state;