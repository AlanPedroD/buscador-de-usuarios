const btnUsuario = document.getElementById('btnUsuario');
const usuariosContainer = document.getElementById('usuarios-container');

btnUsuario.addEventListener('click', gerarUsuario);

function gerarUsuario() {
    fetch('https://dummyjson.com/users')
    .then((res) => res.json()) 
    .then((data) => {
        const users = data.users;

        users.forEach(element => {
        const usuario = document.createElement('div');
        usuario.classList.add('usuario');
        usuario.innerHTML = `
            <img src="${element.image}" alt="Avatar de ${element.firstName}">
            <span>${element.firstName} ${element.lastName}</span>
        `;
        usuariosContainer.appendChild(usuario);
        });   
    }) 
    .catch((erro) => {
        console.error('Erro ao buscar usuário:', erro);
    });
}