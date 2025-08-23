

import axios from 'axios';



const API_KEY = '51801450-0916bf82cabb3a5bfe1ad6ca6'; 
const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    if (!response.data || !response.data.hits) {
      return { hits: [] }; 
    }

    return response.data; 
  } catch (error) {
    console.error('Помилка при отриманні зображень:', error);
    throw error; 
  }
}
