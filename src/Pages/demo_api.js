import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function DemoAPI() {
    const[news,setNews]=useState([])

    const Fetchnews=()=>{
        //console.log("clicked");
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3351ab28b1d74eeaa7d20acbdb0a77f9")
        .then((response)=>{
            console.log(response);
            //console.log(news.length);
            setNews(response.data.articles);
        })
    }
  return (
    <div>
        <button className = 'btn btn-primary' onClick={Fetchnews}>
            NEWS
        </button>
        <div className='container'>
            <div className='row'>
                {
                    news && news.length ?
                    news.map((value)=>{
                        return(
                            <div className='col-4'>
                                <div className='card' style={{width: "18rem"}}>
                                    <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">
                                        {value.description}
                                    </p>
                                    <a href={value.url} className="btn btn-primary">Know more</a>
                                    </div>
                                </div>
                            </div>
                            );
                        }
                    ):
                    null
                }
            </div>
        </div>
    </div>
    
  )
}

export default DemoAPI