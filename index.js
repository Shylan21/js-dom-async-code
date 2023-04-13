console.log("hello")
const div = document.querySelector("div")
const numbers= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
function callingnumber(){
    for(let i = 0; i< numbers.length; i++){
        const nums = numbers[i]
        console.log(nums)
        const list = document.createElement('li')
        div.append(list)
        list.append(nums)
    }
}
callingnumber()