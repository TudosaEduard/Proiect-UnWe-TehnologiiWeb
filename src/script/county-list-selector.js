/* Add and remove items for diagram */

var myList = [];              

function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");

    if(myList.length < 5){

        if(countyContainer.includes(candidate.value) != false){
        
            if(myList.includes(candidate.value) == false){
            
                li.setAttribute('id', candidate.value);
                li.appendChild(document.createTextNode(candidate.value));

                var button = document.createElement("button");
                var i = document.createElement("i");

                button.classList.add("btn-icon-remove");

                i.classList.add("plus");
                
                button.setAttribute("id" , candidate.value);
                button.appendChild(i);

                li.appendChild(button);
                ul.appendChild(li);

                myList.push(candidate.value);

                button.addEventListener("click" , () => {
                    myList.splice(myList.indexOf(button.getAttribute("id")) , 1);
                    li.removeChild(button);
                    ul.removeChild(li);
                })

            }
        }
    }
}

/* Autocomplete */

const searchWrapper = document.querySelector(".input-group");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        
        emptyArray = countyContainer.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });

        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
       
        searchWrapper.classList.add("active");
        showSuggestion(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for(let i = 0 ; i < allList.length ; i ++)
            allList[i].setAttribute("onclick" , "select(this)");

    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(elem){
    let selectUserData = elem.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestion(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userData + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
