import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const WeatherCard = ({ place, weather }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className='weatherCard justify-content-center d-flex'>
                            <Card.Text>Temperature: {weather.temp_c} deg C</Card.Text>
                            <Card.Text>Temperature: {weather.temp_f} deg F</Card.Text>
                            <Card.Text>Feels Like: {weather.feelslike_c} deg F</Card.Text>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='weatherCard justify-content-center d-flex'>
                            <Card.Text>Humidity: {weather.humidity} deg C</Card.Text>
                            <Card.Text>WIND: {weather.wind_kph} deg F</Card.Text>
                            <Card.Text>WIND: {weather.wind_mph} deg F</Card.Text>
                        </Card>
                    </Col>
                </Row>

                <div className="resultSection">
                    <Card style={{ width: '30rem' }} className='countryCard bg-opacity justify-content-center d-flex'>
                        <Card.Title>Country: <span className='countryName'>{place.country}</span></Card.Title>
                        <Card.Text>Local Time: <span>{place.localtime}</span></Card.Text>
                    </Card>

                </div>
            </Container>
        </>
    )
}

export default WeatherCard;





