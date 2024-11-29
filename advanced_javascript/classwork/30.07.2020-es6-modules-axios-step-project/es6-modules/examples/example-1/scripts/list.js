console.log("List start");

 export class List {
    constructor(listClass, listItemClass, listContent) {
        this.listClass = listClass;
        this.listItemClass = listItemClass;
        this.listContent = [...listContent];
    }

    render() {
        const list = document.createElement("ul");
        list.className = this.listClass;
        const listItems = this.listContent.map(item => `<li class="${this.listItemClass}">${item}</li>`);
        list.insertAdjacentHTML("afterbegin", listItems.join(""));
        return list;
    }
}

export  function removeListByIndex(index) {

 }

export  function isList(){

 }

// export {List, removeListByIndex, isList}


