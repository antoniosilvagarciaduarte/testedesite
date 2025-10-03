// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona elementos do DOM
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    // Array com diferentes textos
    const textOptions = [
        'Este é um site simples criado com HTML, CSS e JavaScript.',
        'Você clicou no botão! O JavaScript está funcionando perfeitamente.',
        'Que tal clicar novamente? Veja o que acontece!',
        'JavaScript permite criar páginas web interativas e dinâmicas.',
        'Este é o último texto. Clique novamente para voltar ao início.'
    ];
    
    // Variável para controlar qual texto está sendo exibido
    let currentTextIndex = 0;
    
    // Adiciona evento de clique ao botão
    changeTextBtn.addEventListener('click', function() {
        // Incrementa o índice
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        // Atualiza o texto
        dynamicText.textContent = textOptions[currentTextIndex];
        
        // Adiciona uma animação simples
        dynamicText.style.opacity = '0';
        setTimeout(() => {
            dynamicText.style.transition = 'opacity 0.5s ease';
            dynamicText.style.opacity = '1';
        }, 50);
        
        // Log no console
        console.log('Texto alterado para:', textOptions[currentTextIndex]);
    });
    
    // Mensagem de boas-vindas no console
    console.log('Site carregado com sucesso! JavaScript está ativo.');
});
