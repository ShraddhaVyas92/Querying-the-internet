import './styles/globals.css';

const apiKey = 'QYmjhSuLxz9W8b7rEFbdBdayIls6KgpjSvMJgE8B'; // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=6`;

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayImages(data);
    } catch (error) {
        console.error('Error fetching NASA data:', error);
    }
}

function displayImages(images) {
    const container = document.getElementById('images-container');
   

    images.forEach(image => {
        if (image.media_type === 'image') { // Only display images, ignore videos
            const imageCard = document.createElement('div');
            imageCard.classList.add('image-card');

            imageCard.innerHTML = `
                <h3>${image.title}</h3>
                <img src="${image.url}" alt="${image.title}">
            `;

            container.appendChild(imageCard);
        }
    });
}

// Call the function to load images on page load
fetchData();
