import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term.',
            position: 'topRight',
            backgroundColor: '#EF4040',
            messageColor: '#FFF',
            titleColor: '#FFF',
            iconColor: '#FFF',
            timeout: 5000
        });
        return;
    }

    searchInput.value = '';

    loader.textContent = 'Loading images, please wait...';
    
    loader.style.display = 'block';
    clearGallery();
    
    try {
        const images = await fetchImages(searchTerm);
        loader.style.display = 'none';
        
        if (images.length === 0) {
            iziToast.info({
                title: 'Info',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: '#EF4040',
                messageColor: '#FFF',
                titleColor: '#FFF',
                iconColor: '#FFF',
                timeout: 5000
            });
        } else {
            renderImages(images);
        }
    } catch (error) {
        loader.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
            position: 'topRight',
            backgroundColor: '#EF4040',
            messageColor: '#FFF',
            titleColor: '#FFF',
            iconColor: '#FFF',
            timeout: 5000
        });
        console.error('Error fetching images:', error);
    }
});
