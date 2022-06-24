function generateTextPort(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\
    <div class="generated-text">\
      <div class="row">\
        <div id="scroll-to" class="box">\
          <img src="${jsondata.portfolio.foto1}" alt="Plaatje laad niet">\
        </div>\
        <div class="text-box">\
          ${jsondata.portfolio.tekst1.join('\n')}\
        </div>\
      </div>\
      <hr>\
      <div class="row">\
        <div class="text-box">\
          ${jsondata.portfolio.tekst2.join('\n')}\
        </div>\
        <div class="box">\
          <img src="${jsondata.portfolio.foto2}" alt="Plaatje laad niet">\ 
        </div>\
      </div>\
      <hr>\
      <div class="row">\
        <div class="box">\
          <img src="${jsondata.portfolio.foto3}" alt="Plaatje laad niet">\
        </div>\
        <div class="text-box">\
          ${jsondata.portfolio.tekst3.join('\n')}\
        </div>\
      </div>\
        <a href='#top'><button type='button' class="button" onclick="center()">Scroll naar boven</button></a>\
    </div>`
  })
  .then(()=>{
    setTimeout(()=>{
    document.getElementById("scroll-to").scrollIntoView();
  }, 100)
  })
}

function generateCv(){
  document.getElementById("text-in").innerHTML =`\
  <div id='scroll-to'>\
    <embed src="image/cv.pdf" type="application/pdf" width="100%" height="1200px" />\
  </div>\
  <div class='generated-text'>\
    <a href='#top'><button type='button' class="button" onclick="center()">Scroll naar boven</button></a>\
  </div>`

    setTimeout(()=>{
    document.getElementById("scroll-to").scrollIntoView();
  }, 100)
  
}

function generateTextWerk(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\
    <div class="generated-text" style=padding-top:20px>\
      <img id="scroll-to" src="${jsondata.werk.foto}" alt="Plaatje laad niet" style="width:1500px">\   
      <div>\
        <a href='#top'><button type='button' class="button" onclick="center()">Scroll naar boven</button></a>\  
      </div>\
    </div>`
  })
  .then(()=>{
    setTimeout(()=>{
    document.getElementById("scroll-to").scrollIntoView();
  }, 100)
  })
}

function generateTextOverMij(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\
    <div class="generated-text">\
      <div class="row">\
        <div class="box">\
          <img src="${jsondata.overmij.foto}" alt="Plaatje laad niet" style="image-rendering: pixelated">\
        </div>
        <div class="text-box">\
          ${jsondata.overmij.tekst.join('\n')}\
        </div>\
      </div>\
      <div>\
        <a href='#top'><button type='button' class="button" onclick="center()">Scroll naar boven</button></a>\
      </div>\  
    </div>`
  })
  .then(()=>{
    setTimeout(()=>{
    document.getElementById("scroll-to").scrollIntoView();
  }, 100)
  })
}

function getGame(){
  window.location = "./cv_game/index.html"
  // document.getElementById("text-in").innerHTML ='<object type="text/html" data="./cv_game/index.html" ></object>';
  // fetch("./data.json")
  // .then(response => {
  //   return response.json();
  // })
  // .then(jsondata => {
  //   document.getElementById("text-in").innerHTML =`\ 
  //   <div class="container-fluid bg-light">\
  //     <div class="row">\
  //       <div class="col-xl-6 col-lg-6 col-md-6" >\
  //         <img src="${jsondata.interesses.foto}" alt="Plaatje laad niet" class="img-fluid">\
  //       </div>\
  //       <div class="col-xl-6 col-lg-6 col-md-6" style='height:23.7cm'>\
  //         ${jsondata.interesses.tekst.join('\n')}\
  //         <a href='#top'><button type='button'>Scroll naar boven</button></a>\
  //       </div>\
  //     </div>\
  //   </div>`
  // })
  // .then(()=>{
  //   setTimeout(()=>{
  //   document.getElementById("scroll-to").scrollIntoView();
  // }, 100)
  // })
}

function west(){
  document.getElementById("img-tom").src = "/image/09_Tom.png"
}

function northwest(){
  document.getElementById("img-tom").src = "/image/01_Tom.png"
}

function north(){
  document.getElementById("img-tom").src = "/image/03_Tom.png"
}

function northeast(){
  document.getElementById("img-tom").src = "/image/05_Tom.png"
}

function east(){
  document.getElementById("img-tom").src = "/image/08_Tom.png"
}

function center(){
  document.getElementById("img-tom").src = "/image/11_Tom.png"
}