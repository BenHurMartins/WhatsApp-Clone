import { 
    MODIFICA_EMAIL, 
    MODIFICA_NOME,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO } from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadingLogin: false,
    loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingCadastro: false }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, senha: '', nome: '', loadingCadastro: false }
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, erroLogin: '', loadingLogin: false }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadingLogin: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true } 
       default:
            return state;
    }
}