async function searchGiphy() {
    // get the search term from the input field
    const searchTerm = document.getElementById('searchInput').value;
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    //communicate with the API
    const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

    try {
        //asynchronous request to the giphy API using Axios
        const response = await axios.get(apiUrl);
        const gifContainer = document.getElementById('gifContainer');

        //if there are GIFs in the response then select a random GIF. 
        if (response.data.data.length > 0) {
            const numResults = response.data.data.length;
            const randomIdx = Math.floor(Math.random() * numResults);
            const randomGif = response.data.data[randomIdx];

            //create img element to display the GIF
            const gifUrl = randomGif.images.original.url;
            const gifImage = document.createElement('img');
            gifImage.src = gifUrl;
            //append additional searches
            gifContainer.appendChild(gifImage);
        } else {
            // If no GIFs are found
            gifContainer.innerText = 'No GIFs found for the given search term.';
        }
        // handle errors if the API request fails
    } catch (error) {
        console.error('Error:', error);
    }
}



