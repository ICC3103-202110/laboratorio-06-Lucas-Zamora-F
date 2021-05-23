const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {'leftValue': leftValue,
            'leftUnit': leftUnit,
            'rightValue': rightValue,
            'rightUnit': rightUnit
        }
    ]
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

function input1 (){
    const message = 'Left temperature is source? '
    const choices = ['Yes', 'No']
    return inquirer.prompt({
        name: 'ltis',
        type: 'list',
        message: message,
        default: 'list',
        choices: choices
    })
}

function input2(model){
    const {tvtc} = model
    const message = 'Temperature values to convert? '
    return inquirer.prompt([
        {
            name: 'tvtc',
            type: 'tvtc',
            message: message,
            default: tvtc,
            validate: function(value){
                if(value%1 === 0 ){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
        }
    ])
}

function input3 (model){
    const {input} = model
    const message = 'From? '
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'form',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

function input4 (model){
    const {input} = model
    const message = 'to? '
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'to',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}



module.exports = {
    view, 
    input1,
    input2,
    input3,
    input4
}