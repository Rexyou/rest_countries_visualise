import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function RegionDetails() {

  const { ccn } = useParams();
  const BaseURL = "https://restcountries.com/v3.1/region/"+ccn;
  // console.log(ccn);
  // console.log(BaseURL);

  const [countries, setCountry] = useState([]);

  useEffect(()=>{
    axios.get(BaseURL).then((response)=>{
      console.log(response);
      setCountry(response.data)
    }).catch((err)=>{
      console.log(err)
    });
  }, [BaseURL]);

  // countries.map((country)=>{
  //   console.log(country.name.common)
  // })

    return (
      <div className="regiondetails_page">
        <h1>Region Details</h1>
        <h2>Current Region { ccn }</h2>
        <div className="each_country">
          {
            countries.map((country, i)=>{
              var linking = "/country/"+country.name.common;
              return (<Link to={ linking } key={ i } className="each_country_section">
                        <img src={ country.flags.svg } alt="" />
                        <h1>{ country.name.common }</h1>
                      </Link>)
            })
          }
        </div>
      </div>
    );
  }
  
  export default RegionDetails;