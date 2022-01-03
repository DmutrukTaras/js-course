class Options{
    constructor(height=100, width=200, bg='white', fontSize=16, textAlign='left'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newBlock(someText){
        this.someText=someText;
        let newDiv=document.createElement("div");
        let textnode = document.createTextNode(`${this.someText}`);
        newDiv.appendChild(textnode);
        let forNewDiv = document.getElementById("forNewDiv");
        newDiv.style.cssText = `background:${this.bg};height: ${this.height}px; width: ${this.width}px; font-size: ${this.fontSize}px; text-align:${this.textAlign};`;
        forNewDiv.appendChild(newDiv);
    }
}

let newDiv = new Options(50,500,'red',20,'center');
newDiv.newBlock('Test text');
let secondDiv = new Options();
secondDiv.newBlock('Second div text');
