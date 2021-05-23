



function update(ltis, tvtc, form, to, model){
 
    if (ltis === 'Yes'){
        const NewleftUnit = form
        const NewrightUnit = to
        const NewleftValue = tvtc

        if (NewleftUnit === 'Celsius'){
            if (NewrightUnit === 'Celsius'){
                const NewrightValue = tvtc
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
                
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewrightValue = ((tvtc * 9/5) + 32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Kelvin'){
                const NewrightValue = ((tvtc* 1)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewleftUnit === 'Fahrenheit'){
            if (NewrightUnit === 'Celsius'){
                const NewrightValue = (((tvtc * 1) - 32)*5/9)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewrightValue = tvtc
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                } 
            }
            if(NewrightUnit === 'Kelvin'){
                const NewrightValue = ((((tvtc * 1) - 32)*5/9)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewleftUnit === 'Kelvin'){
            if (NewrightUnit === 'Celsius'){
                const NewrightValue = ((tvtc * 1) - 273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewrightValue = ((((tvtc * 1) - 273.15)*9/5 )+32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Kelvin'){
                const NewrightValue = tvtc
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
    }

    if (ltis === 'No'){
        const NewleftUnit = to
        const NewrightUnit = form
        const NewrightValue = tvtc

        if (NewleftUnit === 'Celsius'){
            if (NewrightUnit === 'Celsius'){
                const NewleftValue = NewrightValue
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewleftValue = ((NewrightValue * 9/5) + 32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Kelvin'){
                const NewleftValue = ((NewrightValue* 1)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewleftUnit === 'Fahrenheit'){
            if (NewrightUnit === 'Celsius'){
                const NewleftValue = (((NewrightValue * 1) - 32)*5/9)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewleftValue = NewrightValue 
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Kelvin'){
                const NewleftValue = ((((NewrightValue * 1) - 32)*5/9)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewleftUnit === 'Kelvin'){
            if (NewrightUnit === 'Celsius'){
                const NewleftValue = ((NewrightValue * 1) - 273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Fahrenheit'){
                const NewleftValue = ((((NewrightValue * 1) - 273.15)*9/5 )+32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewrightUnit === 'Kelvin'){
                const NewleftValue = NewrightValue
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit, 
                    
                }
            }
        }
    }
}



module.exports = {
    update
}
