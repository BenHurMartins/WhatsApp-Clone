import { MODIFICA_ADICIONA_CONTATO_EMAIL,
        ADICIONA_CONTATO_ERRO,
        ADICIONA_CONTATO_SUCESSO, 
        LISTA_CONTATO_USUARIO,
        MODIFICA_MENSAGEM 
    } from './types';

import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';

export const modificaAdicionaEmail = texto => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {

    return dispatch => {
        let emailB64 = b64.encode(email);
        
            firebase.database().ref(`/contatos/${emailB64}`)
                .once('value')
                .then(snapshot => {
                    if(snapshot.val()) {
                        //email do contato que queremos adicionar
                        const dadosUsuarios = _.values(snapshot.val())

                        //email do usuario autenticado
                        const { currentUser } = firebase.auth();
                        let emailUsuarioB64 = b64.encode(currentUser.email);

                        firebase.database().ref(`/contatos_contatos/${emailUsuarioB64}`)
                            .push({ email: email, nome: dadosUsuarios[0].nome })
                            .then(() => adicionaContatoSucesso(dispatch) )
                            .catch( erro => adicionaContatoErro(erro.message, dispatch) )
                    } else {
                        dispatch(
                            { 
                                type: ADICIONA_CONTATO_ERRO,
                                payload: 'Email informado nao corresponde a um usuario válido!'
                            }
                        )
                    }
                })        
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch (
        {
            type: ADICIONA_CONTATO_ERRO,
            payload: erro
        }
    )
)

const adicionaContatoSucesso = dispatch => {
    dispatch(
        {
            type: ADICIONA_CONTATO_SUCESSO,
            payload: true
        }
    )
}

export const habilitaInclusaoContato = () => (
    {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false
    }
)

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode( currentUser.email );

        firebase.database().ref(`/contatos_contatos/${emailUsuarioB64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() })
            })
    }
}

export const modificaMensagem = texto => {
    return({
        type: MODIFICA_MENSAGEM,
        payload: texto
    })
}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {
    
    // dados dos contatos
    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;

    return dispatch => {


        // dados do usuario

        const usuarioEmailB64 = b64.encode(usuarioEmail);
        const contatoEmailB64 = b64.encode(contatoEmail);

        //inserindo no path de mensagens

        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then( () => dispatch ({ type: 'xyz' }) )
            })
    }
}