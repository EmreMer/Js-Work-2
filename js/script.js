// Yeni yapılıucak ekleme   
let inputDOM = document.querySelector("#task")
let spanDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector ("#list")


function newElement(){
    if(inputDOM.value)
        {   
            let createLi =document.createElement("li");
            createLi.append(inputDOM.value)
            listDOM.appendChild(createLi)
            inputDOM.value=""

            const a =document.createElement('a');
            a.classList='delete-item float-right';
            a.setAttribute('href','#');
            a.innerHTML='<i id="icon" class="fas fa-trash-alt "></i>';
            createLi.appendChild(a)
        }
    else
        {
        
        alert("yanlış giriş yaptınız")
        }
   
    
}
// Listeden Elaman Çıkarma
let iconDOM = document.querySelector("#icon")

listDOM.addEventListener("click" , function(item){
    
      
    
            if (item.target.className === iconDOM.className) {//listeden çıkarma
                if (confirm('Emin misin ?')) {
                    item.target.parentElement.parentElement.remove()
                }
            }
            if(item.target.tagName = "li"){ //Yapılıcakları işaretlemek
                item.target.classList.toggle("checked")
                }
        item.preventDefault();
    
})




