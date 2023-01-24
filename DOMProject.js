// Restart Game BUtton

var restart=document.querySelector("#b")

// Grabs all the Squares

var squares = document.querySelectorAll('td');


//Clear all the Squares

function clearBoard(){
    for(var i=0; i<squares.length; i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard);

//Check the sqaure marker
// var cellOne = document.querySelector("#one")

// cellOne.addEventListener('click',function(){
//     // cellOne.textContent='X';
//     if(cellOne.textContent === ''){
//         cellOne.textContent == 'X';
//     }
//     else if(cellOne.textContent === 'X'){
//         cellOne.textContent === 'O';
//     }
//     else{
//         cellOne.textContent = '';
//     }
// })
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }
    else if (this.textContent === 'X') {
      this.textContent = 'O';
    }
    else {
      this.textContent = '';
    }
};

//For loop to add event Listeners to all the Squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}