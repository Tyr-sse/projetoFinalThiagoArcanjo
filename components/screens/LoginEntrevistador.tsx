import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { globalStyles } from './../../global';


export default function LoginEntrevistador() {
    const [loginSt, setLoginSt] = React.useState<string>('');
    const [passwordSt, setPasswordSt] = React.useState<string>('');
    const [logging, setLogging] = React.useState<boolean>(false);


    function onLogin() {
        if (loginSt.length <= 0 || passwordSt.length <= 0) return;
        //fetch
        console.log('LOGIN?', loginSt, passwordSt);
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(onResponded)
            .catch(err => console.error(err));


        setLogging(true);

    }
    function onResponded(dt:any){
        setLogging(false);
        
    }


    return (
        <View style={{ flexDirection: 'row' }}>

            <View
                style={{ backgroundColor: globalStyles.bg }}
            >
                <TextInput
                    style={globalStyles.in}
                    placeholder={'IDENTIFICADOR'}
                    editable
                    onChange={e => {
                        console.log('>', e.target.value, loginSt);

                        setLoginSt(String(e.target.value));
                    }}
                />
                <TextInput
                    style={globalStyles.in}
                    placeholder={'SENHA'}
                    onChange={e => {
                        console.log('>', e.target.value, passwordSt);
                        setPasswordSt(e.target.value);
                    }}
                />
                <TouchableOpacity style={[globalStyles.btn, logging ? globalStyles.stg02 : globalStyles.stg01]}
                    onPress={onLogin}
                >
                    <Text style={globalStyles.btnTxt}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.loginVerticalLine}></View>
        </View>);

}