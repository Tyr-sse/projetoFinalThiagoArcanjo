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

export default function UnloadBody() {
    const [st, setSt] = React.useState<boolean>(false);

    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    console.log('ANSWERS> ', context.answers);

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
            {context.answers.map((answer) => {

                return (
                    <View style={{ width: 0.65 * sw, maxHeight: sh * 0.3, marginRight: 20, marginVertical: 10 }}>
                        <Text style={
                            {
                                width: 0.65 * sw,
                                fontWeight: 700,
                                borderTopRightRadius: 12,
                                borderTopLeftRadius: 12,

                                color: colours.bg,
                                backgroundColor: colours.txt,
                                fontSize: 12,
                                textAlign: 'center'
                            }
                        }>{answer.answerId}</Text>

                        <ScrollView style={
                            {
                                borderTopColor: colours.txt, borderTopWidth: 3,
                                borderBottomColor: colours.txt, borderBottomWidth: 1,
                                borderRightColor: colours.txt, borderRightWidth: 1,
                                borderLeftColor: colours.txt, borderLeftWidth: 1
                            }}>

                            {
                                answer.questionList.map((questionAnswer) => (
                                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colours.bg3, alignItems: 'center' }}>
                                        <Text style={{ marginHorizontal: 4, color: colours.txt, width: sw * 0.2, textAlign: 'center', fontSize: 12 }}>{questionAnswer.questionId}</Text>
                                        <Text style={{ marginHorizontal: 4, borderLeftColor: colours.txt, borderLeftWidth: 1, color: colours.txt, width: sw * 0.5, textAlign: 'center' }}>{questionAnswer.value}</Text>
                                    </View>)
                                )
                            }
                        </ScrollView>
                    </View>
                );

            })}

        </ScrollView>
        <View style={{}}>
            <TouchableOpacity
                onPress={() => {
                    
                    for(let answer of context.answers){
                        mockBD.answers[answer.answerId+''] = answer;
                    }
                    context.answers = [];
                    console.log("UPLOADED ALL DO API", mockBD.answers);
                    setSt(!st);
                }}
                style={{
                    padding: 3,
                    margin: 12,
                    width: 120,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: colours.tint01,
                    borderRadius: 8,
                    height: 36,
                }}
            >
                <Text style={{ color: colours.bg, fontSize: 12, fontWeight: 700, textAlign: 'center' }}>
                    SUBIR RESPOSTAS GRAVADAS
                </Text>
            </TouchableOpacity>
        </View>
    </>
    );

}