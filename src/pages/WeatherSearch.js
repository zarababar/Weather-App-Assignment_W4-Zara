import React, { useState, useEffect } from 'react';
import { useGetCurrentWeatherDataQuery, useGetTemperatureWithDifferentUnitsQuery } from '../apis/weatherApi';
import Search from '../components/search';
import WeatherCard from '../components/weatherCard';
import UnitSelector from '../components/unitselector';
import RecentSearches from '../components/recentSearches';
import Loader from '../components/loader';
import ErrorComponent from '../components/error';
import { useDebounce } from 'use-debounce';

const WeatherSearch = () => {
  const [searchQuery, setSearchQuery] = useState('lahore'); // Default query
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [unit, setUnit] = useState('metric'); // Default to metric
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  // Fetch weather data based on searchQuery and skip if there's no search query
  const { data: weatherData, error, isLoading: weatherLoading } = useGetCurrentWeatherDataQuery(debouncedQuery, {
    skip: !debouncedQuery,
  });

  useEffect(() => {
    if (weatherData?.coord) {
      const { lat, lon } = weatherData.coord;
      setLatitude(lat);
      setLongitude(lon);
    }
  }, [weatherData]);

  // Fetch temperature with different units based on latitude and longitude and skip if latitude or longitude is not available
  const { data: tempData, error: tempError, isLoading: tempLoading } = useGetTemperatureWithDifferentUnitsQuery(
    { lat: latitude, lon: longitude, unit },
    { skip: !latitude || !longitude }
  );
  const isLoading = weatherLoading || tempLoading;

  const handleSearch = (query) => {
    // Update recent searches with the new query, ensuring a maximum of 5 items
    setRecentSearches(prevSearches => {
      const updatedSearches = [query, ...prevSearches.filter(item => item !== query)];
      return updatedSearches.slice(0, 5);
    });
    setSearchQuery(query);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : error || tempError ? (
        <ErrorComponent message={error?.data?.message || tempError?.message} />
      ) : (
        <>
          <UnitSelector onUnitChange={setUnit} />
          <RecentSearches recentSearches={recentSearches} onHandleSearch={handleSearch} />
          <WeatherCard weatherData={weatherData} tempData={tempData} unit={unit} />
        </>
      )}
    </>
  );
};

export default WeatherSearch;
