document.addEventListener('DOMContentLoaded', function() {
    // Função genérica para configurar o comportamento do Acordeão/FAQ
    function configurarAcordeao(selectorBotao, selectorConteudo) {
        var botoes = document.querySelectorAll(selectorBotao);

        botoes.forEach(function(botao) {
            botao.addEventListener('click', function() {
                // Alterna a classe 'ativo' no botão clicado
                this.classList.toggle('ativo');

                // Seleciona o elemento de conteúdo (resposta/funcionamento)
                var conteudo = this.nextElementSibling;

                // Alterna a exibição
                if (conteudo.classList.contains('mostrar')) {
                    conteudo.classList.remove('mostrar');
                } else {
                    // Opcional: Fechar outros itens abertos para manter a interface limpa
                    document.querySelectorAll(selectorConteudo + '.mostrar').forEach(function(item) {
                        item.classList.remove('mostrar');
                        // Garante que o botão correspondente também perca a classe 'ativo'
                        if (item.previousElementSibling) {
                            item.previousElementSibling.classList.remove('ativo');
                        }
                    });
                    
                    // Mostra o conteúdo atual
                    conteudo.classList.add('mostrar');
                }
            });
        });
    }

    // Configura o Acordeão de Objetivos (usado em index.html)
    configurarAcordeao('.titulo-objetivo', '.conteudo-funcionamento');
    
    // Configura o FAQ de Dúvidas (usado em fale-conosco.html)
    configurarAcordeao('.titulo-faq', '.conteudo-resposta');
});