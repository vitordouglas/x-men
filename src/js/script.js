/* Começando o javascript do projeto X-MAN */

// 1° objetivo: pegar os personagem no js;

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => { //adicionando ação do mouse

        if(window.innerWidth <450 ) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }//ajuste para funcionar no celular!

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado'); // pegando o personagem e removendo class selecionado.

        personagem.classList.add('selecionado');//adicionando a class selecionado. 

        const imagemPersonagemGrande = document.querySelector('.personagem-grande') // criando a const para pegar o personagem grande.
        const idPersonagem = personagem.attributes.id.value; // pegando o id de cada personagem
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;// trocando a foto de cada personagem. 

        const nomePersonagem = document.getElementById('nome-personagem'); // const para pegao o id do nome do personagem.
        nomePersonagem.innerText = personagem.getAttribute('data-name'); // trocar o nome do personagem.

        const descricaoPersonagem = document.getElementById('descricao-personagem');//pegando as descrição dos personagens.
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');// alterando de acordo cada personagem. 

    })

});



