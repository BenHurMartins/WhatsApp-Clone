import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';

const TabBarMenu = props => (
    <View style={{ backgroundColor: '#115154', elevation: 4, marginBottom: 6 }}>
        <View style={{ height: 20 }}><StatusBar backgroundColor='#114D44' /></View>
       
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20, marginLeft: 20 }}>WhatApp Clone</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight
                        onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }}
                        underlayColor='#114D44'
                    >
                        <Image source={require('../imgs/adicionar-contato.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Sair</Text>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{ backgroundColor: '#115154', elevation: 0 }} />
    </View>
)

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);