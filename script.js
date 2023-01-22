'use strict';

const toDoInput = document.getElementById('to-do');
const button = document.getElementById('btn');
const toDoDemo = document.getElementById('to-do-demo');


button.addEventListener('click', function (e) {
    const toDoList = document.createElement('div');
    console.log(toDoInput.value);
    toDoList.innerHTML = `<p>${toDoInput.value}</p>`;
    
    toDoDemo.append(toDoList)
    toDoInput.value = '';

})

// const nums = [2,7,11,15];
// const target = 9;
// const i = 0
// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length; i++){
//         for(let j = 0; j<nums.length;)
//        if(nums[i] + nums[i+1] == target){
        
//        };
//     }
// };

