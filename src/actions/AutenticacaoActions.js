import firebase from 'firebase';

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

// poderia ter feito desse jeito: export const cadastraUsuario = (formCadastro) => {
export const cadastraUsuario = ({ nome, email, senha }) => {
    
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => cadastroUsuarioSucesso())
        .catch(erro => cadastroUsuarioErro(erro));

    return {
        type: 'teste'
    }
}

const cadastroUsuarioSucesso = () => {
    console.log('usuario cadastrado com sucesso.');
}

const cadastroUsuarioErro = erro => {
    console.log(erro);
}
