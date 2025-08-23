

import axios from 'axios';



const API_KEY = '51801450-0916bf82cabb3a5bfe1ad6ca6'; 
const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page, 
        per_page: 15  
      },
    });

    if (!response.data || !response.data.hits) {
      return { hits: [], totalHits: 0 }; 
    }

    return response.data; 
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
    throw error; 
  }
}
