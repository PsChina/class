class Div{
    constructor(obj){
        this.$el = document.createElement('div');
        this[0] = this.$el;
        this.css(obj['css']);
        this.on(obj['fn']);
    }
    html(html){
        this.$el.innerHTML = html;
        return this;
    }
    text(test){
        this.$el.innerText = text
        return this;
    }
    css(obj){
        for( let key in obj ){
            this.$el.style[key] = obj[key];
        }
        return this;
    }
    on(eventName,fn){
        this.$el.addEventListener(eventName,fn,false);
        return this;
    }
    find(string){
        const flage = string.charAt(0);
        switch (flage) {
            case '.':
                return this.$el.getElementsByClassName( string.substring(1) );
            case '#':
                return this.$el.getElementById( string.substring(1) );
            break;
            default:
                return this.$el.getElementsByTagName( string );
            break;
        }
        return this;
    }
}

class Button extends Div {
    constructor(fn){
        super();
        this.$el.onclick = fn;
        this.$el.style.cursor = 'pointer';
        this.$el.style.userSelect = 'none';
    }
}