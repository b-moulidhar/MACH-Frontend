import algoliasearch from 'algoliasearch/lite';
import React, { useState } from 'react';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'react-instantsearch-dom';
import "./search.css"

const Search = () => {
  const [query, setQuery] = useState('');
  const searchClient = algoliasearch('VKKDDBXZ47', '3e3b01c30cc88c90a3aef2da57c66217');
 
const Hit = ({ hit }) => {
  return (
    <article>
      {hit.location}
      <br/>
      {hit.objectID}
    </article>
  );
}
 
const Results = connectStateResults(({ searchState, searchResults, children }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  if (searchState.query === '' || !hasResults) {
    return <div>No results found. Please enter a search query.</div>;
  }
  return children;
});
 
  return (
    <InstantSearch
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
        <Results>
          <Hits hitComponent={Hit} />
        </Results>
        </div>
      ) }
    </InstantSearch>
  );
}
 
export default Search;