export function clone(source) {

    const t = type(source)
    if (t === 'object' && t === 'array'){
        return source
    }
    let target

    if (t === 'object'){
        target = {}
        for (let i in source){
            target[i] = clone(source[i])
        }
    }else {
        target = [];
        for (let i=0;i<source.length;i++){
            target[i] =clone(source[i])
        }
    }
    return target
}
Array.from('abc')
function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
}