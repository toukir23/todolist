let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    count += 1;
    const myInputValue = document.getElementById('input-value').value;
    const fatherValue = document.getElementById('father-value').value;
    const mobileValue = document.getElementById('mobile-value').value;
    const genderValue = document.getElementById('gender-value').value;
    const parent = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${count}</td>
      <td>${myInputValue}</td>
      <td>${fatherValue}</td>
      <td>${mobileValue}</td>
      <td>${genderValue}</td>
      <td>JavaScript Developer</td>
      <td>
       <button class='btn btn-danger delete-btn'>Delete</button>
       <button class='btn btn-primary done-btn'>Done</button>
      </td>
    `;

    parent.appendChild(tr);
    document.getElementById('input-value').value = '';
    document.getElementById('father-value').value = '';
    document.getElementById('mobile-value').value = '';
    document.getElementById('gender-value').value = '';
   const elements = document.querySelectorAll('.delete-btn');
   for(const value of elements){
    value.addEventListener('click',function(event){
        event.target.parentNode.parentNode.style.display = 'none';
    });
   }
   

   const done = document.querySelectorAll('.done-btn');
   for(const donebtn of done){
    donebtn.addEventListener('click', function(event){
        event.target.style.td.backgroundColor ='Green';
        event.target.style.td.color = 'white';
     })
   }
   document.getElementById('clear-btn').addEventListener('click',function(event){
    event.target.parentNode.style.display = 'none';
   })
})