const functions = {
    getAge: (name, age) => {
        return `${name} is ${age} years old`;
    },
    add: (num1, num2) => {
        return num1 + num2;
    },
    isNull: () => null,
    isUndefined: () => undefined,
    compileAngularCode: () => {
        throw new Error('you are using the wrong version')
    }
}

module.exports = functions;
