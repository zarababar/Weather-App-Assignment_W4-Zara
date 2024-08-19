import './RecentSearch.css';
const RecentSearches = ({recentSearches, onHandleSearch}) => {
  return (
    <div className="recent-searches-container">
    <h2>Recent Searches</h2>
    <div className="recent-searches-buttons">
      {recentSearches.map((city, index) => (
        <button key={index} className="recent-search-button" onClick={() => onHandleSearch(city)}>
          {city}
        </button>
      ))}
    </div>
  </div>

  );
};

export default RecentSearches;
