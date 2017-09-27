import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
    <View style={{ backgroundColor: '#115154', elevation: 4, marginBottom: 6 }}>
        <View style={{ height: 20 }}><StatusBar backgroundColor='#114D44' /></View>
        <View style={{ height: 50, justifyContent: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 20, marginLeft: 20 }}>WhatApp Clone</Text>
        </View>
        <TabBar {...props} style={{ backgroundColor: '#115154', elevation: 0 }} />
    </View>
)