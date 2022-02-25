let main = document.getElementById('main')
let randomChnage = document.getElementById("chnageButton");
randomChnage.addEventListener('click',function(){
    main.innerHTML = ''
    fecthData("https://www.thecocktaildb.com/api/json/v1/1/random.php");

})   
function fecthData(url){
    fetch(url)
      .then((response) => response.json())
      .then((data) => allDataDisplay(data))
      .catch((e) => {
        console.log(e);
      });
}
function allDataDisplay(data){
  let title = data.drinks[0].strDrink;
  let h2 = createElemnt("h2", "text-danger", title);
  let img = createElemnt("img");
  img.src = data.drinks[0].strDrinkThumb; 
//   main.([h2, img]);
  appendTag(main,[h2,img])
}

function appendTag(parent,tags){
    console.log(tags);
   return [...tags].forEach((ele)=>{
        parent.appendChild(ele)
    })

}
function createElemnt(tagName, ClassName, innerHtml) {
  let tag = document.createElement(tagName);
  tag.className = ClassName || "";
  tag.innerHTML = innerHtml || "";
  return tag;
}



