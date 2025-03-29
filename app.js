function loadData() {
    fetch('http://localhost:8080/categories', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = '';
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.name;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error));
}