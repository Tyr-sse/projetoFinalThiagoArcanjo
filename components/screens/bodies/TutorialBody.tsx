import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, useWindowDimensions, FlatList, ScrollView } from "react-native";
import { globalStyles, colours } from "../../../global";
import { context } from '../../../global';
import { mockBD } from "../../../mockBD";
/*
- Nome do entrevistador: campo de texto
- Você conhece o Deputado Distrital José Gomes, aquele que defende gerar empregos? sim/não
- Qual o principal problema da sua cidade que José Gomes pode melhorar? (campo de texto)
- Você votaria no José Gomes? Com certeza/ Poderia Votar/ De jeito Nenhum
- Telefone: campo para preenchimento numérico
- Geolocalização
{"forms":[
    {"text": "Você conhece o Deputado Distrital José Gomes, aquele que defende gerar empregos?", "type":"multiple","options":["sim","não"]}

]}


*/

export default function TutorialBody() {
    const [st, setSt] = React.useState<boolean>(false);

    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    console.log('TUTORIAL> ', context.answers);

    return (<>
        <ScrollView style={
            {
                backgroundColor: 'transparent',
                width: sw * 0.8,
                maxHeight: 0.65 * sh,
                borderBottomWidth: 2,
                borderBottomColor: colours.tint01,
                // borderTopWidth: 1,
                // borderTopColor: colours.tint01,

            }
        }>
            <Text style={{ color: colours.txt, textAlign: 'justify' }}>
                Este aplicativo serve para <Text style={{ color: colours.tint01, textAlign: 'justify' }}> BAIXAR FORMULÁRIOS  </Text> da API (Aqui representada por um 'mockBD'),
                <Text style={{ color: colours.tint01, textAlign: 'justify' }}> COLETAR RESPOSTAS </Text> para estes formulários, {/*salvando-as na memória local*/} e posteriormente,
                <Text style={{ color: colours.tint01, textAlign: 'justify' }}> SUBIR </Text> as respostas para a API, para serem analisadas.
            </Text>

        </ScrollView>
    </>
    );

}