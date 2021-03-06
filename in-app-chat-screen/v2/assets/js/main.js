/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
function toggleSidebar(){
    let hmbButton = document.querySelector('.menu-icon');
    if(hmbButton.classList.contains('is-active')){
        document.querySelector('.main-sidebar').classList.remove("open");
        document.querySelector('.bg-overlay').classList.remove("is-visible");
        hmbButton.classList.remove('is-active');
    } else {
        document.querySelector('.main-sidebar').classList.add("open");
        document.querySelector('.bg-overlay').classList.add("is-visible");
        hmbButton.classList.add('is-active');
    }
}

let currentDropper;
window.addEventListener('load', function () {
    let dropdowns = document.querySelectorAll('.custom-dropdown');
    for(let i= 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function(e) {
            if( !this.classList.contains('open')) {
                currentDropper= this;
                this.classList.add('open');
                e.stopImmediatePropagation();
            } else {
                this.classList.remove('open');
            }
        });
    }
});

document.addEventListener('click', function () {
    document.querySelectorAll(".custom-dropdown.open").forEach(function(elem) {
        elem.classList.remove('open');
    })
}, false);

function autoGrow (oField) {
    var textareaMaxHeight = 300;
    if (oField.scrollHeight > oField.clientHeight) {
        if(oField.scrollHeight < textareaMaxHeight) {
            oField.style.height = (oField.scrollHeight+2) + "px";
        } else {
            oField.style.height = (textareaMaxHeight+2) + "px";
        }
    }
    else {
        oField.style.height = 0 +"px";
        oField.style.height = (oField.scrollHeight+2) + "px";
    }
}

// collapseCard
window.addEventListener('load', function () {
    let resultTabs = document.querySelectorAll(".collaspe-header .collapse-action");
    for(let i=0; i < resultTabs.length; i++){
        resultTabs[i].addEventListener('click', function(){
            if( !this.parentNode.classList.contains('active')){   
                // document.querySelectorAll('.collaspe-header').forEach(function(elm, indx){
                //     elm.classList.remove('active');
                // });             
                // document.querySelectorAll('.collapse-info-block .collapse-body').forEach(function(elm, indx){
                //     elm.classList.remove('show');
                // }); 
                this.parentNode.classList.add('active');
                document.querySelector('#'+ this.dataset.collapse).classList.add('show');                            
            } 
            else if( this.parentNode.classList.contains('active')) { 
                this.parentNode.classList.remove('active');
                document.querySelector('#'+ this.dataset.collapse).classList.remove('show');
            }
        });
    }
});


document.querySelector('.user-status-dropdown .custom-dropdown-menu li').addEventListener('click', function(){
    var selected_value = this.textContent || this.innerText;;
    console.log(selected_value);
    this.classList.add('active');
})
