export interface OnGoingControl {
    id:String,
    bu:String,
    store:String,
    controllerId:String, // A transformer en liste ?
    operatorId:String,
    transactionIds:String[]
}