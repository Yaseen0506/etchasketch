let colour = "black"
let click = false
// Function to create the grid layout

function createGridLayout(size)
{
  let board = document.querySelector(".board")
  board.innerHTML=""
  board.style.gridTemplateColumns = `repeat(${size},1fr)`
  board.style.gridTemplateRows = `repeat(${size},1fr)`
  let gridSize = size*size
  for(let i=0;i<gridSize;i++)
  {
    let square = document.createElement("div")
    square.classList.add("square")
    square.style.backgroundColor="#62bec1"
    square.addEventListener("mouseenter",function(){
      if(click)
      {
        if(colour === "random")
        {
          this.style.backgroundColor = `hsl(${Math.random()*368},100%,50%)`
        }
        else
        {
          this.style.backgroundColor = colour
        }
      }
  })
  board.appendChild(square)
  }
}

createGridLayout(16)

function setLimit(input)
{
  if(input >0 && input < 100)
  {
    createGridLayout(input)
  }
  else
  {
    alert("Choose a size between 1 and 100")
  }
}



function colourOfGrid(choice)
{
  colour = choice
}

function reset()
{
  let squares = document.querySelectorAll(".square")  
  squares.forEach(function(div){
    div.style.backgroundColor="#62bec1"
  }) 
}

document.querySelector(".board").addEventListener("click",()=>{
  click = !click
  if(click)
  {
    document.querySelector(".mode").textContent = "Drawing"
  }
  else
  {
    document.querySelector(".mode").textContent = "Not Drawing"
  }
})

let randomBtn = document.querySelector(".random")

setInterval(function(){
  randomBtn.style.backgroundColor = `hsl(${Math.random()*368},100%,50%)`
},500)
