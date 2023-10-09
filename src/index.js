document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.getElementById('ramen-menu');

    // Function to fetch ramen data from the server
    async function fetchRamenData() {
        try {
            const response = await fetch('http://localhost:3000/ramen');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    // Function to render ramen menu
    async function renderRamenMenu() {
        const ramenData = await fetchRamenData();
        ramenMenu.innerHTML = '';

        ramenData.forEach((ramen) => {
            const ramenItem = document.createElement('div');
            ramenItem.innerHTML = `
                <h2>${ramen.name}</h2>
                <img src="${ramen.imageUrl}" alt="${ramen.name}">
                <p>${ramen.description}</p>
            `;
            ramenMenu.appendChild(ramenItem);
        });
    }

    // Initialize the ramen menu
    renderRamenMenu();
});
