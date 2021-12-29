import { Link } from "react-router-dom";

function Regions() {

    const regions_name = ['africa', 'americas', 'asia', 'europe', 'oceania'];

    return (
      <div className="regions_page">
        <h1>Regions</h1>
        <div className="button_list">
          { 
            regions_name.map((region, i)=>{

              var link = "/region/"+region;

              const capitalizeFirstLetter = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }

              var new_region_name = capitalizeFirstLetter(region);
              
              return <Link to={ link } className="regions_link" key={ i }>{ new_region_name }</Link>
            
            })
          }
          {/* <Link to="/region/asia">
            Asia
          </Link>
          <Link to="/region/europe">
            Europe
          </Link> */}
        </div>
      </div>
    );
  }
  
  export default Regions;