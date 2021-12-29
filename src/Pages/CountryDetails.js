import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function CountryDetails() {

  const { name } = useParams();
  const BaseURL = "https://restcountries.com/v3.1/name/"+name;
  // console.log(ccn);
  // console.log(BaseURL);

  let navigate = useNavigate();
  const [countries, setCountry] = useState([]);
  var [error, setError] = useState(false);

  useEffect(()=>{
    axios.get(BaseURL).then((response)=>{
      console.log(response);
      setCountry(response.data)
    }).catch((err)=>{
      // console.log(err)
      setError(true);
    });
  }, [BaseURL]);

  if(error){
    navigate("/error");
  }

  // countries.map((country)=>{
  //   console.log(country.name.common)
  // })

    return (
      <div className="countrydetails_page">
        <h1>Country Details</h1>
        <h2>Current Country Name: { name }</h2>
        <div className="each_country">
          {
            countries.map((country, i)=>{
              return (<div key={ i } className="each_country_details">
                        <img src={ country.flags.svg } alt="" />
                        <h1>{ country.name.common }<span>{ country.flag }</span></h1>
                        <h1>Official Name: { country.name.official }</h1>
                        <h1>Population: { country.population }</h1>
                        <h1>Language: {  }</h1>
                        <h1>Original Region: { country.region }</h1>
                      </div>)
            })
          }
        </div>
      </div>
    );
  }
  
  export default CountryDetails;