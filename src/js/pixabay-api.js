const apiKey = '44714741-6fe0dcbbee03096a14c34d671';
const baseUrl = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits; 
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
