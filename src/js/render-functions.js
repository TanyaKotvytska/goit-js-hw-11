import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function clearGallery() {
    gallery.innerHTML = '';
    lightbox.refresh();
}

export function renderImages(images) {
    const html = images.map(image => `
        <div class="card">
        <a href="${image.largeImageURL}" alt="${image.tags}">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
        </a>
        <div class="card-details">
        <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </div>
    `).join('');
    gallery.innerHTML = html;
    lightbox.refresh();
}
