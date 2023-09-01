import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from "@material-ui/icons/Search"
import  DescriptionIcon  from '@material-ui/icons/Description'
import  ImageIcon  from '@material-ui/icons/Image'
import  LocalOfferIcon  from '@material-ui/icons/LocalOffer'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import  RoomIcon  from '@material-ui/icons/Room'


const SearchPage = () => {
  const [{ term="tesla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // https://developers.google.com/custom-search/v1/using_rest (link for API)

  // https://programmablesearchengine.google.com/controlpanel/create (link for creating a new search engine)

  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        {/* whatever we are writing in search bar get displayed in another page */}
        <Link to='/'>
          <img className='searchPage_logo' src='https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png' alt='Search Page logo' />
        </Link>
        <div className='searchPage_headerBody'>
            <Search hideButtons/>

            {/* options under search page  */}
            <div className='searchPage_options'>
              <div className='searchPage_optionsLeft'>
                <div className='searchPage_option'>
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </div>
                <div className='searchPage_option'>
                  <DescriptionIcon />
                  <Link to="/news">News</Link>
                </div>
                <div className='searchPage_option'>
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </div>
                <div className='searchPage_option'>
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className='searchPage_option'>
                  <RoomIcon />
                  <Link to="/maps">Maps</Link>
                </div>
                <div className='searchPage_option'>
                  <MoreVertIcon />
                  <Link to="/more">more</Link>
                </div> 
              </div>

              <div className='searchPage_optionsRight'>
                  <div className='searchPage_option'>
                      <Link to="/settings">Settings</Link>
                  </div>
                  <div className='searchPage_option'>
                      <Link to="/tools">Tools</Link>
                  </div>
              </div>

            </div>
        </div>
      </div>


    {term && (
        <div className='searchPage_results'>
            {/* <p className='searchPage_resultCount'>
              About {data ?.searchInformation.formattedTotalResults} results({data ?.searchInformation.formattedSearchTime} seconds) for {term}
            </p> */}
            <p className='searchPage_resultCount'>
            About {data && data.searchInformation && data.searchInformation.formattedTotalResults} results ({data && data.searchInformation && data.searchInformation.formattedSearchTime} seconds) for {term}
           </p>

            {/* <p className='searchPage_resultCount'>
             {data?.searchInformation ? (
              <>
              About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) for {term}
              </>
              ) : (
                  "No search information available."
             )}
             </p> */}


                {/* {data?.items.map(item => (
                  <div className='searchPage_result' key={item.cacheId}>
                    <a href={item.link} className='searchPage_resultTitle'>
                      <h2>{item.title}</h2>
                      <p>{item.displayLink}</p>
                    </a>
                  </div>
                ))} */}


                  {/* {data ? (
                    data.items.map(item => (
                      // Rest of your code
                      <div className='searchPage_result' key={item.cacheId}>
                      <a href={item.link} className='searchPage_resultTitle'>
                        <h2>{item.title}</h2>
                        <p>{item.displayLink}</p>
                      </a>
                    </div> 
                    ))
                  ) : (
                    <p>Loading...</p> // or any loading indicator
                  )} */}


                  {/* console.log('Data:', data); */}

                  {data && data.items && data.items.map(item => (
                    // Rest of your code
                    <div className='searchPage_result' key={item.cacheId}>
                      <a href={item.link} className='searchPage_resultTitle'>
                        {/* {item.pagemap?.css_image?.length>0 && item.pagemap?.cse_image[0]?.src} */}
                        <h2>{item.title}</h2>
                        <p>{item.displayLink}</p>
                      </a>
                    </div> 
                  ))}


             {/* {data?.items.map(item=>(
              <div
              className='searchPage_result' key={item.cacheId}>
                <a href={item.Link}>
                   {item.displayLink}
                </a>
                
                <a href={item.Link} className='searchPage_resultTitle'>
                    <h2>{item.title}</h2>

                </a>
                </div>
             ))} */}
        </div>
    )}
      
    </div>
  )
}

export default SearchPage
