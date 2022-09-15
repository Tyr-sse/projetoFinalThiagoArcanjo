import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { globalStyles } from './../../global';


export default function Btn({onP, onL}) {
    const logging=false;
    return (
        <TouchableOpacity style={[globalStyles.btn, logging ? globalStyles.stg02 : globalStyles.stg01]}
            
            onPress={onP}
        >
            <Text style={globalStyles.btnTxt}>ENTRAR</Text>
        </TouchableOpacity>
    );
}