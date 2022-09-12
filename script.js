var card =document.getElementsByClassName('container')

//function to new game
function reloadFunction(){
    window.location.reload()
}

function showRandom(){
    //shuffle the number from 1 to 6 to be shown on the card
    function shuffle(array) {
        array.sort(() => Math.random()- 0.5)
    }
    let arr = [1,2,3,4,5,6]
    shuffle(arr)
 
    //shuffle the cards where the shuffled numbers is to be shown
    const children =document.querySelector('.container').children
    function shuffleChild(childArr){
        childArr.sort(() => Math.random()- 0.5)
    }
    let numOfChild = [0,1,2,3,4,5,6,7,8,9,10,11]
    shuffleChild(numOfChild)

    var child1 =children.item(numOfChild[0])
    var child2 =children.item(numOfChild[1])
    var child3 =children.item(numOfChild[2])
    var child4 =children.item(numOfChild[3])
    var child5 =children.item(numOfChild[4])
    var child6 =children.item(numOfChild[5])
    var child7 =children.item(numOfChild[6])
    var child8 =children.item(numOfChild[7])
    var child9 =children.item(numOfChild[8])
    var child10 =children.item(numOfChild[9])
    var child11 =children.item(numOfChild[10])
    var child12 =children.item(numOfChild[11])

 

    child1.innerHTML=arr[0]
    child2.innerHTML=arr[1]
    child3.innerHTML=arr[2]
    child4.innerHTML=arr[3]
    child5.innerHTML=arr[4]
    child6.innerHTML=arr[5]
    child7.innerHTML=arr[0]
    child8.innerHTML=arr[1]
    child9.innerHTML=arr[2]
    child10.innerHTML=arr[3]
    child11.innerHTML=arr[4]
    child12.innerHTML=arr[5]
   

   
}


card[0].addEventListener('click', clickFunction);

window.setValue=[]
window.values=[]
window.cardElement=[]
//function to get the first and second value selected or clicked
function clickFunction (e){
    var card = e.target
   window.values.push( e.target.innerHTML)
   window.cardElement.push( e.target)
   cardElement[0].classList.add('show')
   cardElement[1].classList.add('show')



if(window.values.length > 0){}{
    if(window.values[0] === window.values[1]){
        card.classList.add('show')
        cardElement[0].classList.add('show')
        cardElement[1].classList.add('show')
        window.setValue.push(window.values)
        
        if (window.cardElement.length >1) {
            window.cardElement=[]
        }
    }
    else{
            
        setTimeout(()=>{
            cardElement[0].classList.remove('show')
            cardElement[1].classList.remove('show')
            }, 1000)
        }
    }
    
    // if the legth of the array is greater than 2
    if (window.values.length > 1) {
        window.values=[]
        
    }

    if (window.cardElement.length >1) {
        
        setTimeout(()=>{
        cardElement[0].classList.remove('show')
        cardElement[1].classList.remove('show')
            window.cardElement=[]
        }, 1000)
        }


    if(window.setValue.length == 6){
        alert('you won, new game!')
        reloadFunction()
    }
} 


