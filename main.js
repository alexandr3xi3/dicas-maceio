// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Hambúrguer com Acessibilidade ARIA
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.getElementById('menu-links');

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuLinks.classList.toggle('active');
        });
    }

    // 2. Banner de Cookies (LGPD) com animação suave
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept-cookies');

    if (cookieBanner && btnAccept) {
        if (localStorage.getItem('cookiesAceitos') !== 'sim') {
            setTimeout(() => { cookieBanner.classList.add('show'); }, 500);
        }

        btnAccept.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookiesAceitos', 'sim');
        });
    }

    // 3. Grid de Artigos (Construído com a tag <a> para SEO)
    const gridArtigos = document.getElementById('meus-artigos');
    
    if (gridArtigos) {
        const bancoDeArtigos = [
            {
                link: "artigo-centro.html",
                imagem: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=600",
                categoria: "Cultura e História",
                titulo: "O Charme Escondido no Centro de Maceió",
                resumo: "Muito além da orla: descubra a arquitetura, os museus e os casarões que guardam a verdadeira essência da capital alagoana."
            },
            {
                link: "artigo-gastronomia.html",
                imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
                categoria: "Gastronomia",
                titulo: "Os Melhores Bistrôs para Jantar a Dois",
                resumo: "Uma seleção rigorosa de restaurantes que unem a culinária regional com técnicas contemporâneas para noites inesquecíveis."
            },
            {
                link: "artigo-roteiros.html",
                imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
                categoria: "Roteiros",
                titulo: "O Que Fazer em 3 Dias na Cidade",
                resumo: "O roteiro definitivo para otimizar seu tempo, unindo passeios clássicos e paradas gastronômicas estratégicas."
            }
        ];

        const fragment = document.createDocumentFragment();

        bancoDeArtigos.forEach(artigo => {
            const a = document.createElement('a');
            a.href = artigo.link;
            a.className = 'card';
            a.setAttribute('aria-label', `Ler artigo: ${artigo.titulo}`);

            // Adicionado width/height fixos proativamente no img para combater CLS
            a.innerHTML = `
                <img src="${artigo.imagem}" alt="Imagem de capa: ${artigo.titulo}" class="card-img" width="600" height="400" loading="lazy">
                <div class="card-content">
                    <span class="category-tag">${artigo.categoria}</span>
                    <h2>${artigo.titulo}</h2>
                    <p>${artigo.resumo}</p>
                </div>
            `;
            fragment.appendChild(a);
        });
        gridArtigos.appendChild(fragment);
    }
});
