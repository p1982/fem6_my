function getByClass(className){
    const cl = document.getElementsByClassName(className);
    return [...cl]
}

export default getByClass;