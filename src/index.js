import { readFile } from 'fs'
import { promisify } from 'util'
const readFileAsync = promisify(readFile)

const SEPARATOR = '__'


var jsonString = (await readFileAsync('/home/marcin/tmp/localconfig.json')).toString()
var jsonObject = JSON.parse(jsonString)

console.log(jsonObject)

let output = []
handleObject(jsonObject, output, '')

console.log(output)


function handleObject(input, output, path) {
    for (const key in input) {
        if (Object.hasOwnProperty.call(input, key)) {
            handleElement(input[key], output, getOutputKey(path, key))
        }
    }
}

function handleArray(input, output, path) {
    input.forEach((n, i) => {
        console.log(n)
        console.log(path)
        handleElement(n, output, getOutputKey(path, i))
    });
}

function handleElement(element, output, path) {
    if (typeof element !== 'object') {
        addToOutput(output, path, element)
    }
    else if (Array.isArray(element)) {
        handleArray(element, output, path)
    }
    else {
        handleObject(element, output, path)
    }
}

function getOutputKey(oldPath, addition) {
    if (oldPath == '')
        return addition
    else
        return `${oldPath}${SEPARATOR}${addition}`
}

function addToOutput(output, key, value) {
    output.push({
        slotSetting: false,
        name: key,
        value: value
    })
}