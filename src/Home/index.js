import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './header';
import News from './newsBox';
import Quote from './quotation';
import SuggestionBox from './suggestionBox';
import data from './body.json'
import newsData from "./home.json";


function index() {
  const content = data.Content;
  const news = newsData.newsBox;
 let obj 
  return (
    <div>
      <Header />
      <Quote />
      <News news = {news}/>
      {
        content
          .map(childObj => {
            obj = childObj[Object.keys(childObj)]
            return <SuggestionBox genre={obj}  />
          }
          )
      } 
      <Footer />

    </div>
  )
}

export default index
