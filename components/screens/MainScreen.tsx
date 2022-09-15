import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import { colours, globalStyles, range, context } from "../../global";
import MainBody from "./bodies/MainBody";
import FormList from './bodies/FormsList'
import AnswerBody from "./bodies/AnswerBody";
import UnloadBody from "./bodies/UnloadBody";
import TutorialBody from "./bodies/TutorialBody";
//import ContainedFlatList from "../ContainedFlatList";

export default function MainScreen() {
    const [currentBody, setBody] = React.useState<string>('MAIN');
    context.setBody = (url) => {
        console.log('CLG', url);
        //setHeadUrl(url)
        setBody(url);
    };
    const [loginSt, setLoginSt] = React.useState<string>('');
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    //console.log('SH> ', screenHeight, screenWidth);
    const sh = screenHeight - 80;
    const sw = screenWidth - 10;
    return (<>
        <View style={[globalStyles.header, { height: 0.2 * sh, width: 0.9 * sw, flexDirection: 'column', justifyContent: 'space-between' }]}>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 12, fontWeight: 700, textAlign: 'center', color: colours.txt }}>
                    APP PARA RESPONDER FORMULÁRIOS
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>

                <TouchableOpacity
                    onPress={() => { setBody('MAIN') }}
                    style={[
                        globalStyles.btn, { margin: 2, width: 80, justifyContent: 'center', alignSelf: 'center' }]}
                >
                    <Text style={{ color: colours.bg,fontSize: 12, fontWeight: 700, textAlign: 'center' }}>
                        MENU
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setBody('TUTORIAL') }}
                    style={[
                        globalStyles.btn, { margin: 2, width: 80, justifyContent: 'center', alignSelf: 'center' }]}
                >
                    <Text style={{ color: colours.bg,fontSize: 12, fontWeight: 700, textAlign: 'center' }}>
                        TUTORIAL
                    </Text>
                </TouchableOpacity>

                
            </View>



        </View>
        <View style={
            [
                globalStyles.body,
                {
                    height: 0.8 * sh, width: 0.9 * sw,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                }]
        }>
            {currentBody == 'TUTORIAL' && <TutorialBody/>}
            {currentBody == 'MAIN' && <MainBody />}
            {currentBody == 'FORMS' && <FormList />}
            {currentBody == 'NEW-ANSWER' && <AnswerBody />}
            {currentBody == 'UNLOAD' && <UnloadBody />}
        </View>
    </>
    );
    // return (
    //     <View style={[globalStyles.header, { height: 0.2 * sh, width: 0.9 * sw }]}>
    //             <TouchableOpacity
    //             onPress={()=>{}}
    //             style={[
    //                 globalStyles.btn, { maxWidth: 60, justifyContent: 'center' }]}
    //             >
    //             <Text style={{ fontSize: 12, alignSelf: 'center' }}>
    //                 CENTRAL
    //             </Text>
    //             </TouchableOpacity>

    //         </View>
    //         <View style={[globalStyles.body, { height: 0.6 * sh, width: 0.9 * sw }]}>
    //             BODY
    //         </View>
    // <View style={[globalStyles.footer, { height: 0.2 * sh, width: 0.9 * sw }]}>
    //     FOOTER
    // </View>
    //         <SForm />


    // );

}