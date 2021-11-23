let a = 1
export {
    a
}
export let b = 2

function test() {
    a++
    console.log(a)
}

export {
    test
}

export default {
    fn: test,
    name: 'cpf',
    a,
    b
}