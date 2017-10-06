import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { modificaMensagem, enviarMensagem } from '../actions/AppActions'

class Conversa extends Component {

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }

    render(){
        return(
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={70} style={{ flex: 1 }}>
                <View style={{ flex:1, backgroundColor: '#EEE4DC', padding: 10}} >
                    <View style={{ flex: 1, paddingBottom: 20 }}></View>
                    <View style={{ flexDirection: 'row', height: 60 }}>
                        <TextInput 
                            value={this.props.mensagem}
                            onChangeText={texto => this.props.modificaMensagem(texto)}
                            style={{ flex: 4, backgroundColor: 'white', fontSize: 18}}
                        />
                        <TouchableHighlight onPress={ this._enviarMensagem.bind(this) } underlayColor= 'white' >
                            <Image source={require('../imgs/enviar_mensagem.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

mapStateToProps = state => {
    return({
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa);