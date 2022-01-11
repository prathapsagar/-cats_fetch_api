document.body.innerHTML = `<div class="heading-container">
<h1> Cats List</h1> </div>

<div id="mainContainer"  class="main-container"> </div>

`;

const getData = async () => {
  try {
    const data = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const cats = await data.json();
    console.log(typeof (cats))
    mainContainer.innerHTML = "";

    displayData(cats);



  } catch (error) {
    console.log(error);
  }
};

getData();

const displayData = (obj) => {
  mainContainer.innerHTML += `
    <div id="subcont" class="container">
   <div i> <span> Cat ID=</div>
   <div id="cat_id">${obj._id}</div>
      <p class="para blue"> user=<span> ${obj.user}</span></p>
       <p class="para blue"> text=<span> ${obj.text}</span></p>
       <p class="para blue"> type=<span> ${obj.type}</span></p>
       <p class="para blue"> deleted=<span> ${obj.deleted}</span></p>
        <p class="para blue"> createdAt=<span> ${obj.createdAt}</span></p>
              <p class="para blue"> updatedAt=<span> ${obj.updatedAt}</span></p>
        
    `;
};


