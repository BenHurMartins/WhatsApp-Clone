import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => {
    return (
        <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')} >
            <View style={ { flex: 1, padding: 10 } }>
                <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center'} }>
                    <Text style={ { fontSize: 25, backgroundColor: 'transparent', color: '#fff' } }>WhatsApp Clone</Text>
                </View>
                <View style={ { flex: 2, padding: 10 } }>
                    <TextInput 
                        value={props.email} 
                        style={ { fontSize: 20, height: 45 } } 
                        placeholder='E-mail' 
                        placeholderTextColor='#fff'
                        onChangeText={ texto => props.modificaEmail(texto) }    
                    />
                    <TextInput 
                        value={props.senha} 
                        secureTextEntry
                        style={ { fontSize: 20, height: 45 } } 
                        placeholder='Senha' 
                        placeholderTextColor='#fff'
                        onChangeText={ texto => props.modificaSenha(texto) }
                    />
                    <TouchableHighlight onPress={() => Actions.formCadastro() }>
                        <Text  style={ { fontSize: 17, color: '#fff' } } p>Ainda nao tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={ { flex: 2, padding: 10 } }>
                    <Button color='#115E54' title='Acessar' onPress={() => false} />
                </View>
            </View>
        </Image>
    );
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);