fetch('https://fit2.com.br/faq')
    .then(response => response.text())
    .then(data => {
        document.getElementById('meu-elemento-html').innerHTML = data;
    });
