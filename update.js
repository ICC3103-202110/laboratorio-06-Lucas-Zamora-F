



function update(ltis, tvtc, form, to, model){
 
    if (ltis === 'Yes'){
        const NewleftUnit = form
        const NewrightUnit = to
        const NewleftValue = tvtc

        if (NewleftUnit === 'Celsius'){
            if (NewrightUnit === 'Celsius'){
                console.log('test 1')
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
                console.log('test 2')
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
                console.log('test 3')
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
                console.log('test 4')
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
                console.log('test 5')
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
                console.log('test 6')
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
                console.log('test 7')
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
                console.log('test 8')
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
                console.log('test 9')
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

        if (NewrightUnit === 'Celsius'){
            if (NewleftUnit === 'Celsius'){
                console.log('test 10')
                const NewleftValue = tvtc
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Fahrenheit'){
                console.log('test 11')
                const NewleftValue = ((tvtc * 9/5) + 32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Kelvin'){
                console.log('test 12')
                const NewleftValue = ((tvtc* 1)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewrightUnit === 'Fahrenheit'){
            if (NewleftUnit === 'Celsius'){
                console.log('test 13')
                const NewleftValue = (((tvtc * 1) - 32)*5/9)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Fahrenheit'){
                console.log('test 14')
                const NewleftValue = tvtc 
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Kelvin'){
                console.log('test 15')
                const NewleftValue = ((((tvtc * 1) - 32)*5/9)+273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }

        }
        if(NewrightUnit === 'Kelvin'){
            if (NewleftUnit === 'Celsius'){
                console.log('test 16')
                const NewleftValue = ((tvtc * 1) - 273.15)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Fahrenheit'){
                console.log('test 17')
                const NewleftValue = ((((tvtc * 1) - 273.15)*9/5 )+32)
                return {
                    ... model,
                    leftValue: NewleftValue,
                    leftUnit: NewleftUnit,
                    rightValue: NewrightValue,
                    rightUnit: NewrightUnit,
                    
                }
            }
            if(NewleftUnit === 'Kelvin'){
                console.log('test 18')
                const NewleftValue = tvtc
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
