export interface IOption{
    id: string|number,
    text: string
}

export interface IQuestion{
    id: string|number,
    text: string,
    type: 'free'|'multiple'|'number',
    options?: IOption[]

}

export interface IForm{
    id: string|number,
    title: string,
    active?:boolean,
    questions: IQuestion[]


}

export interface Answer{
    questionId: string|number,
    formId: string|number,
    value: string

}