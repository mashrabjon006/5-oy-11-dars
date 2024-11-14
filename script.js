document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('wrapper');
    const apis = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments',
        'https://jsonplaceholder.typicode.com/albums',
        'https://jsonplaceholder.typicode.com/photos',
        'https://jsonplaceholder.typicode.com/todos'
    ];

    apis.forEach(api => {
        fetch(api)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('finalyy');
                }
            })
            .then(data => {
                data.slice(0, 5).forEach(element => {
                    let card = createCard(element);
                    wrapper.innerHTML += card;
                });
            })
            .catch(error => console.error(error));
    });

    function createCard(data) {
        return `<div class="card">
            <h3>ID: ${data.id}</h3>
            <p><strong>Title:</strong> ${data.title || data.name}</p>
            <p><strong>Body:</strong> ${data.body || ''}</p>
        </div>`;
    }

    document.getElementById('loadMore').addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('erorr');
                }
            })
            .then(data => {
                data.forEach(user => {
                    let card = `<div class="card">
                        <h3>Name: ${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    </div>`;
                    wrapper.innerHTML += card;
                });
            })
            .catch(error => console.error(error));
    });
});
