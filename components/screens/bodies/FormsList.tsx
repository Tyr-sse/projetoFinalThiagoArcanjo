import React, { useState } from "react";
import { View, TouchableOpacity, Text, useWindowDimensions, ScrollView } from "react-native";
import { colours } from "../../../global";
import { context } from '../../../global';
import { IForm } from "../../../Interfaces";
import { mockBD } from "../../../mockBD";




export default function FormsList() {
    const [chosenForm, setChosenForm] = React.useState<IForm>(null);

    const [pivotIndex, setPivotIndex] = React.useState<number>(0);
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    const range = 5;
    const len = context.forms.length;
    let L = []
    for (let i = 0; i < range && i + pivotIndex < len; i++) {
        if (i + pivotIndex >= 0) L.push([context.forms[pivotIndex + i], pivotIndex + i]);
    }
    const stl = {
        arrowBtn: {
            borderRadius: 2,
            width: 20,
            height: 40,
            justifyContent: 'center',
            marginBottom: 5,
            width: sw * 0.8,
            marginVertical: 12,
        },
        formButton: {
            width: sw * 0.8,
            height: sh * 0.08,
            backgroundColor: colours.bg3,
            borderWidth: 1,
            borderColor: colours.txt,
            borderRadius: 12,
            marginVertical: 3,
            flexDirection: 'row',
        },
    }

    return (
        <View>

            {chosenForm === null ? <>
                <TouchableOpacity
                    onPress={() => {
                        if (pivotIndex > 0) setPivotIndex(pivotIndex - 1)

                    }}
                    style={stl.arrowBtn}
                >
                    <View style={{
                        borderColor: colours.txt,
                        borderRadius: 23,
                        borderWidth: 1,
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: colours.bg2,
                    }}>
                        <Text style={{ color: colours.txt, fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>
                            ^
                        </Text>

                    </View>
                </TouchableOpacity >


                {
                    L.map((form: any) => {//SELECIONAR FORMULARIO
                        //console.log(form);
                        return (
                            <TouchableOpacity key={form[1]}
                                onPress={() => {
                                    console.log('SELECIONAR FORM> ', context.forms[form[1]]);

                                    setChosenForm(context.forms[form[1]]);
                                }}
                                style={stl.formButton}>
                                <Text style={{ color: colours.bg, fontSize: 12, alignSelf: 'center' }}>{form[0].id}</Text>
                                <View style={{ width: 10 }}></View>
                                <Text style={{ width: 0.7 * sw, fontWeight: 700, textAlign: 'center', alignSelf: 'center', color: colours.bg, fontSize: 18 }}>{form[0].title}</Text>
                                <View style={{ width: 7 }}></View>

                                <Text style={{ color: colours.txt, fontSize: 32, fontWeight: 700, alignSelf: 'center' }}>></Text>

                            </TouchableOpacity>
                        );

                    })
                }
                <TouchableOpacity
                    onPress={() => {
                        if (pivotIndex + range < context.forms.length) setPivotIndex(pivotIndex + 1)
                    }}
                    style={stl.arrowBtn}
                >
                    <View style={{
                        borderColor: colours.txt,
                        borderRadius: 23,
                        borderWidth: 1,
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        backgroundColor: colours.bg2
                    }}>
                        <Text style={{ color: colours.txt, fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>
                            v
                        </Text>

                    </View>
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={() => { 
                        console.log("DOWNLOAD ALL");
                        context.forms={...mockBD.forms}
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
                        BAIXAR FORMULÁRIOS DA CENTRAL
                    </Text>
                </TouchableOpacity>

            </>
                :
                <View>
                    <View>

                        <Text style={{ color: colours.txt }}>
                            Você está prestes a
                            {context.answers.some((x) => x.formId == chosenForm.id) ? 'continuar' : 'iniciar'}
                            a resposta do seguinte formulário:
                        </Text>
                        <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ textAlign: 'center', color: colours.tint01 }}>{chosenForm.id}</Text>
                                <Text style={{ textAlign: 'center', color: colours.txt, fontSize: 8 }}>ID</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>

                                <Text style={{ textAlign: 'center', color: colours.tint01 }}>{chosenForm.title}</Text>
                                <Text style={{ textAlign: 'center', color: colours.txt, fontSize: 8 }}>TITLE</Text>
                            </View>
                        </View>

                        {/* <Text style={{ color: colours.txt }}>{JSON.stringify(chosenForm)}</Text> */}

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            context.formToBeAnswered = { ...chosenForm };

                            context.setBody('NEW-ANSWER')
                        }}
                    >
                        <Text style={
                            {
                                color: colours.bg,
                                backgroundColor: colours.tint01,
                                borderWidth: 1,
                                borderRadius: 6,
                                textAlign: 'center',
                                marginHorizontal: 30,
                                paddingHorizontal: 30,
                                paddingVertical: 3,
                                fontWeight: 700,
                                marginVertical: 5

                            }}
                        >{context.currentAnswers ? 'CONTINUAR' : 'INICIAR'} RESPOSTA</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setChosenForm(null)}
                    >
                        <Text style={
                            {
                                color: colours.txt,
                                backgroundColor: colours.red,
                                borderWidth: 1,
                                borderRadius: 6,
                                textAlign: 'center',
                                marginHorizontal: 30,
                                paddingHorizontal: 30,
                                paddingVertical: 3,
                                fontWeight: 600
                            }}>CANCELAR</Text>
                    </TouchableOpacity>

                </View>
            }

        </View>
    );

}

function ConfirmStartForm(props: { form: IForm }) {

    return (
        <View>
            <TouchableOpacity
                onPress={() => { console.log('XABLAu') }}
            >
                <Text style={{ color: colours.txt }}>{props.form.id}</Text>
                <Text style={{ color: colours.txt }}>{JSON.stringify(props.form)}</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => null}
            >
                <Text style={{ color: colours.txt }}>CANCELAR</Text>

            </TouchableOpacity>
        </View>);
}