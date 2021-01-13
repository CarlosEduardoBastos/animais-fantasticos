import outsideClick from './outsideclick.js';
export default function dropDownMenu(){
    const dropDownMenu = document.querySelectorAll('[data-dropdown]');
    dropDownMenu.forEach(menu =>{
        ['touchstart','click'].forEach(userEvent =>{
            menu.addEventListener(userEvent,handleClick)
        })
    })
    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this,['touchstart','click'],()=>{
            this.classList.remove('active')
        });
    }
}