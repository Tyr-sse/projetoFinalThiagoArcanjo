// export interface Ioption {
//     type: ("inclusive" | "exclusive" | "intensity" | "free"),
//     text: string
// }

import { mockBD } from "./mockBD";

// export interface Iquestion {
//     id: string,
//     text: string,
//     inputs?: Ioption[]//STRING


// }
//{ questionId: question.id, resp: opt.text };


export let context = {
    forms: mockBD.forms,
    answers: [{"answerId":"20220914212257.510_F100","questionList":[{"questionId":"Q00a1","formId":"F100","value":"A"},{"questionId":"Q00d1","formId":"F100","value":"AA"}]},{"answerId":"20220914212306.163_F001","questionList":[{"questionId":"F001Q001","formId":"F001","value":"TA1 I"},{"questionId":"F001Q002","formId":"F001","value":"TA1 I"},{"questionId":"F001Q003","formId":"F001","value":"NÃO"},{"questionId":"F001Q004","formId":"F001","value":"NÃO"},{"questionId":"F001Q005","formId":"F001","value":"NÃO"},{"questionId":"F001Q006","formId":"F001","value":"NÃO"},{"questionId":"F001Q007","formId":"F001","value":"SIM"},{"questionId":"F001Q008","formId":"F001","value":"SIM"},{"questionId":"F001Q009","formId":"F001","value":"SIM"},{"questionId":"F001Q010","formId":"F001","value":"TEd2 I"},{"questionId":"F001Q011","formId":"F001","value":"TEd2 I"},{"questionId":"F001Q012","formId":"F001","value":"asdas"},{"questionId":"F001Q013","formId":"F001","value":"TEXTO DE OPCAO 02 I"}]},{"answerId":"20220914212313.987_F006","questionList":[{"questionId":"Q001","formId":"F006","value":"TEXTO DE OPCAO 03 E"}]}],
    txtAnswr: '',
    domain: 'http://localhost:4300',

    currentAnswers: {},
    formToBeAnswered: {},

};





export const colours = {
    txt: '#aaaaaa',
    bg: '#121212',
    bg2: '#222222',
    bg3: '#555555',
    tint01: '#aa6644',
    tint02: '#ee8844',
    tint03: '#5522ff',
    tint04: '#2255aa',
    red: '#aa2222',
    green: '#22aa22',
    blue: '#22aaaa',

}
export const globalStyles = {
    header: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: colours.tint01,
        backgroundColor: 'transparent',

        flexDirection: 'row'
    },
    body: {
        height: 40,
    },
    footer: {
        height: 40,
        borderTopWidth: 2,
        borderTopColor: colours.tint01,

    },



    screen: {
        maxWidth: 200
    },
    container: {
        flex: 1,
        backgroundColor: colours.bg,
        alignItems: 'center',
        justifyContent: 'center',
        color: colours.txt
    },
    in: {
        backgroundColor: colours.bg2,
        color: colours.txt,
        placeholderColor: colours.bg3,
        borderWidth: 1,
        borderColor: colours.tint01,
        borderRadius: 4,
        height: 26,
        fontSize: 16,
        margin: 4
    },
    btn: {
        backgroundColor: colours.tint01,
        borderRadius: 8,
        height: 26,

    },
    stg01: {
        marginHorizontal: 2
    },
    stg02: {
        backgroundColor: colours.tint04 + '88',
        marginHorizontal: 4
    },
    btnTxt: {
        backgroundColor: 'transparent',
        color: colours.bg,
        margin: 4,
        borderRadius: 8,
        fontSize: 12,
        textAlign: 'center'
    },
    loginVerticalLine: {
        borderLeftColor: colours.tint01,
        borderLeftWidth: 1,
        minWidth: 2,
        marginHorizontal: 3
    },

}

// export const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export function range(n) {
    let L = [];
    for (let i = 0; i < n; i++)
        L.push(i);
    return L;
}