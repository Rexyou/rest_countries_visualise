import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function Home() {
    // let navigate = useNavigate();

    const BaseURL = "https://restcountries.com/v3.1/all";
    const [countries, setCountry] = useState([]);

    useEffect(()=>{
      axios.get(BaseURL).then((response)=>{
        // console.log(response);
        setCountry(response.data)
      }).catch((err)=>{
        // console.log(err)
      });
    }, [BaseURL]);

    return (
        <div className="home_page">
            <div className="button_list">
                {/* <button onClick={ ()=>navigate('regions') }>Regions</button>
                <button onClick={ ()=>navigate('about') }>About</button> */}
                <button onClick={ ()=>{ window.location = "https://restcountries.com/" } }>Original URL</button>
            </div>
            <div className="all_country_list">
            {
                countries.map((country, i)=>{

                var link = "country/"+country.name.common;
                return (<Link to={ link } key={ i } className="each_country_section">
                            <img src={ country.flags.svg } alt="" />
                            <h1>{ country.name.common }</h1>
                        </Link>)
                })
            }
            </div>
        </div>
    );
}
  
  export default Home;