import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import countryData from "../MockSANews";
import { addItem } from "../Redux/reducers";

// Replace with your actual API endpoint
// const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=us';

// Replace with your action creator name
// const SAVE_NEWS_ACTION = 'news/saveNews';

const NewsFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchNews = async () => {
    //   try {
    //     const response = await axios.get(NEWS_API_URL);
    //     const newsData = response.data.articles;
    //     dispatch({ type: SAVE_NEWS_ACTION, payload: newsData });
    //   } catch (error) {
    //     console.error("Error fetching news:", error);
    //   }
    // };

    // fetchNews();
    dispatch(addItem(countryData));
  }, []);

  // This component doesn't render anything
  return null;
};

export default NewsFetcher;
