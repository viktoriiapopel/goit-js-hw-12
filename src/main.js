
import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, showLoader, hideLoader } from './js/render-functions.js'; // ✅ додали show/hide loader
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('input[name="search-text"]');

async function searchImages(query) {
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Sorry',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

formEl.addEventListener('submit', event => {
  event.preventDefault(); 
  const query = inputEl.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Oops',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  searchImages(query);
});