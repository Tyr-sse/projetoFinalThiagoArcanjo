import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import { globalStyles, colours } from "../../../global";
import SForm from './../SForm';
import { context } from './../../../global';

export default function MainBody() {
    const [loginSt, setLoginSt] = React.useState<string>('');
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    console.log('SH> ', screenHeight, screenWidth);
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    return (
        <View>
            <TouchableOpacity
                onPress={() => context.setBody('FORMS')}
                style={[
                    globalStyles.btn, {
                        backgroundColor: colours.bg + '00',


                        color: colours.bg2,
                        borderRadius: 8,
                        width: 0.9 * sw,
                        height: 0.35 * sh,
                        justifyContent: 'center'
                    }]}
            >
                <View style={{
                    borderColor: colours.tint01,
                    borderRadius: 23,
                    borderWidth: 1,
                    height: '95%',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={
                        {
                            color: colours.tint01,
                            fontSize: 22,
                            fontWeight: 700,
                            alignSelf: 'center',
                            textAlign: 'center'
                        }
                    }>
                        FORMULÁRIOS A RESPONDER
                    </Text>
                    <Text style={{ marginTop: 20, color: colours.txt, fontSize: 10, fontWeight: '500', alignSelf: 'center' }}>
                        Colete respostas a formulários cadastrados.
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => context.setBody('UNLOAD')
                }
                style={[
                    {
                        borderRadius: 8,
                        width: 0.9 * sw, height: 0.25 * sh, justifyContent: 'center'
                    }]}
            >
                <View style={{
                    borderColor: colours.txt,
                    borderRadius: 23,
                    borderWidth: 1,
                    height: '95%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: colours.bg2
                }}>
                    <Text style={{ color: colours.txt, fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>
                        DESCARREGAR
                    </Text>
                    <Text style={{ marginTop: 20, color: colours.txt, fontSize: 10, fontWeight: '500', alignSelf: 'center' }}>
                        Descarregue respostas a pesquisas no servidor.
                    </Text>
                </View>
            </TouchableOpacity >
        </View >

    );

}