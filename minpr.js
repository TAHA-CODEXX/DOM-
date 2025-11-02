let names = []
function addName() {
const page = document.getElementById('page')
const inpt = document.getElementById('inpt')
const namList = document.getElementById('NamList')
const newone = document.createElement('li') 
const isNumber = Number.isInteger(parseInt(inpt.value))
if(inpt.value == '' || isNumber==true ){alert('Please enter a name or a valid name')}
else{
newone.textContent = inpt.value
names.push(inpt.value)
namList.appendChild(newone)
inpt.value = ''
}

}


const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',function (){
const overlay = document.getElementById('popup')
const closePopup = document.getElementById('closePopup')
const contanier = document.getElementById("container")
closePopup.addEventListener('click', function(){
overlay.style.display = 'none'
contanier.style.display = 'block'
})
const showName = document.getElementById('choseName')
contanier.style.display = 'none'
overlay.style.display = 'block'
const choseName = Math.floor(Math.random()*names.length)
showName.textContent = names[choseName]
const index = names.indexOf(names[choseName])
names.splice(index, 1);
})
























