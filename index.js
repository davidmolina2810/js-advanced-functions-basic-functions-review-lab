const saturdayFun = (activity="roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair="*") => {
  return function(arg="special") {
    return `You are ${flair}${arg}${flair}!`
  }
}

const Calculator = {
  "add": function add(a,b) { return a + b },
  "subtract": function subtract(a,b) { return a - b },
  "multiply": function multiply(a,b) { return a * b },
  "divide": function divide(a,b) { return a / b }
}

function actionApplyer(start, funcs) {
  let x = start

  funcs.forEach(func => {
    x = func(x)
  })

  return x 
}