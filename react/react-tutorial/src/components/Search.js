import axios from 'axios';
import React from 'react';

class Search extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            query:'',
            results: {},
            loading: false,
            message: ''
        }
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState( { query: query, loading: true, message: '' } );
        this.fetchSearchResults( query );
    };

fetchSearchResults = ( query ) => {
    const seachUrl = 'https://nl1.api.radio-browser.info/json/stations/byname/jazz=${query}';

    axios.get( seachUrl )
    .then( res => {
        console.log( res )
    })
};

    render() {
        const { query } = this.setState;
        // console.log( this.state );
        return (
            <div className="container">
                {/* Heading */}
            <h2 className="heading">Live Search React App</h2>
                {/* Search input*/}
            <label className="search-label" htmlFor="search-input">
                <input 
                    type="text"
                    value={query}
                    id="search-input"
                    placeholder="Search..."
                    onChange={this.handleOnInputChange}
                    />
            </label>
            
        </div>
          );
       
    }
}

export default Search