export class Portrait {
    createPortrait(src:string,name:string):HTMLDivElement{
        const container = document.createElement('div');
        container.innerHTML = `
        <div class="img__container">
            <img src="${src} "class="portraitImg" />
        </div>
        <p className="portrait--name">${name}</p>        
        `
        container.className = 'portrait__container'
        return container;
    }
}