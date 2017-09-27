import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115654' }} titleStyle={{ color: '#fff' }}>
        <Stack key="root">
            <Scene key='formLogin' component={ FormLogin } title='Login' hideNavBar />
            <Scene key='formCadastro' component={ FormCadastro } title='Cadastro' />
            <Scene key='boasVindas' component={ BoasVindas } title='Bem-Vindo' hideNavBar />
            <Scene key='principal' component={ Principal } title='Principal' hideNavBar initial/>
        </Stack>
    </Router>
)
