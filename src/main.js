
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { clearGallery, createGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';



const formEl = document.querySelector('.form');
const inputEl = formEl.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more');

hideLoadMoreButton();


let currentPage = 1; 
let currentQuery = '';
const PER_PAGE = 15;


async function searchImages(query) {
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  currentPage = 1; 
  currentQuery = query;

  try {
    const data = await getImagesByQuery(query, currentPage, PER_PAGE);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Sorry',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

      if (data.totalHits > currentPage * PER_PAGE) {
      showLoadMoreButton();
    } else {
        hideLoadMoreButton();
        iziToast.info({
    title: 'Info',
    message: "You've reached the end of search results!",
    position: 'topRight',
  });

    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    hideLoadMoreButton();
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

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1; 
  hideLoadMoreButton();
  showLoader();
  

  try {
    const data = await getImagesByQuery(currentQuery, currentPage, PER_PAGE);

    createGallery(data.hits);
    smoothScroll();


    if (currentPage * PER_PAGE >= data.totalHits) {
  hideLoadMoreButton();
  iziToast.info({
    title: 'Info',
    message: "You've reached the end of search results!",
    position: 'topRight',
  });
} else {
  showLoadMoreButton();
    }
    } catch (error) {
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    position: 'topRight',
  });
  hideLoadMoreButton();

  } finally {
    hideLoader();
  }
});


function smoothScroll() {
  const gallery = document.querySelector('.gallery');
  const lastCard = gallery.lastElementChild; 
  
  if (lastCard) {
    const { height: cardHeight } = lastCard.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
