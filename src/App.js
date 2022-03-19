import CitySelector from "./components/CitySelector";
import useFetch from "./hooks/useFetch";
import { Container } from "react-bootstrap";
import "./App.css";
import WeatherList from "./components/WeatherList";

const App = () => {
  const { data, error, isLoading, setUrl } = useFetch();
  
  const BASE_API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getContent = () => {
    let errorText = `Error: ${error}`
    if(error) return <h2>{errorText}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector
        onSearch={(city) => setUrl(`${BASE_API_URL}/forecast?q=${city}&cnt=5&lang=en&units=metric&appid=${API_KEY}`)}/>

      {getContent()}
    </Container>
  );
};

export default App;
