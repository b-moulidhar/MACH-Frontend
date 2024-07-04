import algoliasearch from 'algoliasearch/lite';
import React, { useState, useEffect } from 'react';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
import "./search.css";
import CardsComp from '../cards/cards.comp';

const searchClient = algoliasearch('VKKDDBXZ47', '3e3b01c30cc88c90a3aef2da57c66217');

const Hit = ({ hit }) => (
  <article>
    {hit.location}
    <br />
    {hit.objectID}
  </article>
);

const CustomHits = ({ hits }) => (
  <>
    {hits.map(hit => (
      <Hit key={hit.objectID} hit={hit} />
    ))}
  </>
);

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query === '') {
      console.log("No query entered yet");
      return;
    }

    const fetchData = async () => {
        // console.log(searchResults)
      const searchClient = algoliasearch('VKKDDBXZ47', '3e3b01c30cc88c90a3aef2da57c66217');
      const index = searchClient.initIndex('vehicles');
      
      try {
        const result = await index.search(query);
        setSearchResults(result.hits);
        // console.log("Search results:", result.hits);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [query]);

  return (<>
    <h3><InstantSearch
      searchClient={searchClient}
      indexName="vehicles"
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <SearchBox
        autoFocus
        translations={{ placeholder: 'Search for vehicles...' }}
      />
      {query && (
        <div className="container-hit">
          <br />
          <CustomResults />
        </div>
      )}
    </InstantSearch></h3>
    <hr />
    <CardsComp searchResults={searchResults}/>
  </>
  );
};

const CustomResults = connectStateResults(({ searchState, searchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  
  if (searchState.query === '' || !hasResults) {
    return <div>No results found. Please enter a search query.</div>;
  }
  
  return <CustomHits hits={searchResults.hits} />;
});

export default Search;
