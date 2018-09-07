type Data = {
    name: string
}

function printName(data: Data) {
    console.log(data.name)
}

const data1 = <Data>{name: 'javascript', other: 'value'}
const data2 = {name: 'typescript'} as Data

printName(data1)
printName(data2)
