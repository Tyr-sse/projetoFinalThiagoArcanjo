import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, useWindowDimensions, ScrollView, FlatList } from "react-native";
import { colours, range, context } from "../../../global";

export default function AnswerBody() {
    const [pivotIndex, setPivotIndex] = React.useState<number>(0);
    const [st, setSt] = React.useState<boolean>(false);
    const [txt, setTxt] = React.useState<string>('');
    let id = context.formToBeAnswered.id ?? 'err';
    let title = context.formToBeAnswered.title ?? 'err';
    let questions = context.formToBeAnswered['questions'] ?? 'err';
    let question = questions[pivotIndex] ?? 'err'
    if (id == 'err' || title == 'err' || questions == 'err' || question == 'err') return//error













    const stl = {
        controlPanel: {
            controlPanelButton: {
                color: colours.txt,
                backgroundColor: colours.bg3,
                borderRadius: 8,
                width: 90,
                marginHorizontal: 10,
                label: {
                    textAlign: 'center',
                    fontSize: 12,
                }
            },
            controlPanelConcludeButton: {
                color: colours.txt,
                backgroundColor: colours.tint01,
                borderRadius: 8,
                width: 90,
                marginVertical: 12,
                label: {
                    textAlign: 'center',
                    fontSize: 16,
                }
            },
            controlPanelLabel: {
                color: colours.red

            }
        },
        question: {
            label: { color: colours.bg3, textAlign: 'center', marginRight: 20 },
            TextInput: {
                color: colours.tint01,
                backgroundColor: colours.bg1,
                textAlign: 'center',
                marginRight: 2,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: colours.tint01,
                width: '70%',
                height: 25,
                marginVertical: 6
            }

        }
        ,


    }
    //console.log('LEN ', questions.length);
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    ////console.log('SH> ', screenHeight, screenWidth);
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    let i = -1;
    let numberOfAnsweredQuestions = 0;
    let allQuestionsAnswered = false;
    for (let question of questions) {
        numberOfAnsweredQuestions += context.currentAnswers && context.currentAnswers[question.id] ? 1 : 0;
        allQuestionsAnswered = numberOfAnsweredQuestions == questions.length ? true : false;
    }

    function next() {
        if (pivotIndex < questions.length - 1) setPivotIndex(pivotIndex + 1)
    }
    function prev() {
        if (pivotIndex > 0) setPivotIndex(pivotIndex - 1)
    }
    console.log('TENTANDO ABRIR');

    return (
        <View style={{ backgroundColor: 'transparent', height: 0.8 * sh }}>

            <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                <TouchableOpacity style={stl.controlPanel.controlPanelButton} onPress={() => { prev() }}><Text style={stl.controlPanel.controlPanelButton.label}>ANTERIOR</Text></TouchableOpacity>
                <Text style={stl.controlPanel.controlPanelLabel}>{pivotIndex}</Text>
                <TouchableOpacity
                    style={stl.controlPanel.controlPanelButton}
                    onPress={() => { next() }}
                >
                    <Text
                        style={stl.controlPanel.controlPanelButton.label}
                    >
                        PROXIMA
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row' }}>
                {
                    questions.map(
                        (question) => {
                            const hasAnswer = context.currentAnswers && context.currentAnswers[question.id] ? true : false;
                            i++
                            return (
                                <Text
                                    key={i + 12}
                                    style={
                                        {
                                            flex: 1,
                                            margin: 2,
                                            height: 20,
                                            backgroundColor: hasAnswer ? colours.tint01 : 'transparent',
                                            borderColor: colours.bg2,
                                            borderRadius: 2,
                                            borderWidth: 1,

                                            color: hasAnswer ? colours.bg : colours.txt,
                                            fontSize: 12,
                                            textAlign: 'center'
                                        }}>
                                    {i + 1}
                                </Text>
                            )
                        }
                    )
                }

            </View>
            <View style={{ minHeight: sh * 0.1, paddingVertical: 20, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colours.tint01 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: colours.bg3, textAlign: 'center', marginRight: 20, fontSize: 14 }}>{questions[pivotIndex].id}</Text>
                    <Text style={{ color: colours.txt, textAlign: 'center', marginRight: 20, fontSize: 8 }}>ID</Text>
                </View>
                <Text style={{ color: colours.tint01 }}>{questions[pivotIndex].text}</Text>

            </View>
            {
                question.options && question.options.length &&
                <ScrollView style={{ height: sh * 0.5, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: colours.tint01 }}>
                    {
                        question.options.map(
                            (option) => {
                                let currentOptionIsSelected = context.currentAnswers[question.id + ''] && context.currentAnswers[question.id + ''].value === option.text ? true : false;
                                return (
                                    <TouchableOpacity key={option.text}
                                        style={
                                            {
                                                height: 25,
                                                marginVertical: 10,
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                                backgroundColor: currentOptionIsSelected ? colours.tint01 : colours.bg3,
                                                borderRadius: 3,
                                            }
                                        }
                                        onPress={() => {
                                            context.currentAnswers[question.id + ''] =
                                            {
                                                questionId: question.id,
                                                formId: id,
                                                value: option.text
                                            };
                                            ////console.log('ANSWER ', context.currentAnswers[question.id + '']);
                                            //if (context.currentAnswers[question.id + '']) console.log('>>', context.currentAnswers[question.id + ''])

                                            if (pivotIndex < questions.length - 1) {
                                                setPivotIndex(pivotIndex + 1)
                                            }
                                            else {
                                               
                                                //console.log('SAVE', dt);
                                                setSt(!st);
                                            }
                                            //console.log('>> ',context.currentAnswers, context.answers);



                                        }}
                                    >
                                        <Text style={{ color: currentOptionIsSelected ? colours.bg : colours.txt, textAlign: 'center', marginLeft: 10, fontSize: 12, fontWeight: currentOptionIsSelected ? 800 : 300 }}>
                                            {option.text}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        )

                    }
                </ScrollView>
            }

            {(question.options == undefined || question.options.length == 0) &&
                (
                    <View style={{ flexDirection: 'row', paddingVertical: 20, }}>

                        <TextInput
                            style={stl.question.TextInput}
                            onChange={
                                (e) => {
                                    //console.log('E> ', e.target.value);


                                    context.txtAnswr = e.target.value;
                                    setTxt(e.target.value);
                                }
                            }
                        />
                        <TouchableOpacity key={i + 44}
                            style={
                                {
                                    marginVertical: 10,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    backgroundColor: colours.tint01,
                                    borderRadius: 3,
                                }
                            }
                            onPress={() => {
                                context.currentAnswers[question.id + ''] = {
                                    questionId: question.id,
                                    formId: id,
                                    value: context.txtAnswr
                                };
                                //console.log('CLICK');
                                next();
                            }}
                        >
                            <Text style={{ color: colours.bg, textAlign: 'center', marginHorizontal: 6, fontSize: 12, height: 25 }}>
                                SUBMETER
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {allQuestionsAnswered &&
                    <TouchableOpacity
                        style={stl.controlPanel.controlPanelConcludeButton}
                        onPress={() => {
                            let formAnswer = [];
                            console.log('INIT ', context.currentAnswers);

                            for (let k in context.currentAnswers) {
                                console.log('TESTING> ', context.currentAnswers[k + ''].formId, id);

                                if (context.currentAnswers[k + ''].formId == id) {
                                    formAnswer.push(context.currentAnswers[k + '']);
                                    delete context.currentAnswers[k + ''];
                                }

                            }
                            // console.log('FIN ', context.currentAnswers);
                            console.log('ANSWERS>>> ', JSON.stringify( context.answers) );
                            
                            
                            const dt = new Date().toISOString();
                            let r = '';
                            for(let l of dt){
                                if(!['-',':','T','Z'].includes(l))
                                    r+=l;
                            }
                            r = r+'_'+id;
                            console.log('> ',r);
                            
                            const dtD = dt.substring(0, 10);
                            

                            console.log("DT> ", dt);
                            context.answers.push({ answerId: r, questionList: formAnswer });
                            context.setBody('MAIN');

                        }}
                    >
                        <Text
                            style={stl.controlPanel.controlPanelConcludeButton.label}
                        >
                            CONCLUIR
                        </Text>
                    </TouchableOpacity>
                }

            </View>
        </View>
    )

}