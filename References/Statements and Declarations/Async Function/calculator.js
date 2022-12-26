//Take values
//Do the function
//Display the result


function showAnswer(operation)
{
    console.log(`${operation.values.x} ${operation.values.operator} ${operation.values.y} = ${operation.answer}`);
}

function takeValues(num1, num2, operation, operationFunction, dispalyAnswer)
{
    values = {x: num1, y: num2, operator: operation}
    operationFunction(values, dispalyAnswer);
}

function operation(values, displayFunction)
{
    var operation = {values: values}
    switch (values.operator) {
        case '+':
            operation.answer =  values.x + values.y;
            break;
        case '-':
            operation.answer =  values.x - values.y;
            break;
        case '/':
            operation.answer =  values.x / values.y;
            break;
        case '*':
            operation.answer =  values.x * values.y;
            break;
        default:
            operation.answer =  undefined;
            break;
    }
    displayFunction(operation);
}

takeValues(2, 3, '%', operation, showAnswer);
