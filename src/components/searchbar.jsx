import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState } from 'react';
import WeatherCard from './weathercard';

const SearchBar = () => {

    const [place, setPlace] = useState('')
    const [placeDetails, setPlaceDetails] = useState(null)
    const [weatherDetails, setWeatherDetails] = useState(null)

    const BASEURL =  "https://api.weatherapi.com/v1/current.json?key=5bf6cb1920554648a3c235338232906&q="
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await axios.get(BASEURL+place)
        const placeDetails = res.data.location;
        const weatherDetails = res.data.current;
        setPlaceDetails(placeDetails);
        setWeatherDetails(weatherDetails);
        console.log(placeDetails)
        console.log(weatherDetails)
        setPlace('')
    }




    return (
      <Container>
        <Form   className="form-inline justify-content-center text-center searchForm" onSubmit={handleSubmit}>
          <Form.Group className="form-group d-inline-flex">
            <Form.Control placeholder="SEARCH" name='place' value={place} onChange={(e)=> setPlace(e.target.value)} className="mr-2" id='searchBox' />
            <Button className="btn btn-primary searcbtn" type='submit'>Search</Button>
          </Form.Group>

         </Form>
        {placeDetails && weatherDetails && (
            <WeatherCard place={placeDetails} weather={weatherDetails} />
        )}
      </Container>
    );
  };
  
export default SearchBar;



