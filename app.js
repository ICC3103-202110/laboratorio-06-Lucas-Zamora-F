const {input1, input2, input3, input4} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView

        //console.clear()
        console.log(title)
        printTable(table)

         // FORM (Ask user input)
         const {ltis} = await input1()
         const {tvtc} = await input2(model)
         const {form} = await input3(model)
         const {to} = await input4(model)
         const updatedModel = update(ltis, tvtc, form, to, model)
         state = {
             ...state,
             model: updatedModel,
             currentView: view(updatedModel)
            }
        }
    }


module.exports = {
    app
}