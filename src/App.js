import React from 'react';
import { Cards, Chart, CountryPicker }  from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import  image  from './images/covid2020.jpg';
import footer from './footer/footer';
class App extends React.Component {
  state = {
    data: {}, 
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState ({ data: fetchedData });
  }
      handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState ({ data: fetchedData, country: country});
  }
  render() {
    const { data, country } = this.state;
  return (
    <div className={styles.container} >

   <img className={styles.image} src={image} alt="COVID-19" />
   <hr/>
    <CountryPicker handleCountryChange={this.handleCountryChange} />
    <Cards data={data} />
    <Chart data = {data} country = {country}/>
    <footer />

    </div>
  );
  }
}

export default App;
