const date = document.getElementById('date')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const datetime = new Date()

let week = ["Воскресенье","Понеделньик","Вторник","Среда","Четверг","Пятница","Суббота"]
let montH = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Cентябрь","Октябрь","Ноябрь","Декабрь"]

date.innerHTML = datetime.getDate()
day.innerHTML=week[datetime.getDay()]
month.innerHTML=montH[datetime.getMonth()]
year.innerHTML=datetime.getFullYear()







