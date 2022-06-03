function generateTextPort(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\
    <div class="container-fluid bg-light">\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.portfolio.foto1}" alt="Plaatje laad niet" class="img-fluid">\
        </div>\
        <div class="col">\
          ${jsondata.portfolio.tekst1.join('\n')}\
      </div>\
      <hr>\
      <div class="row">\
        <div class="col">\
          ${jsondata.portfolio.tekst2.join('\n')}\
        </div>\
        <div class="col">\
          <img src="${jsondata.portfolio.foto2}" alt="Plaatje laad niet" class="img-fluid" style="padding:1cm">\ 
        </div>\
      </div>\
      <hr>\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.portfolio.foto3}" alt="Plaatje laad niet" class="img-fluid" style="padding:1cm">\
        </div>\
        <div class="col">\
          ${jsondata.portfolio.tekst3.join('\n')}\
      </div>\
      <div class='text-center'>\
        <a href='#top'><button type='button' class="btn btn-success btn-lg" onclick="happy()">Scroll naar boven</button></a>\
      </div>\
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
  <div id='scroll-to' class="container-cv">\
    <embed src="image/cv.pdf" type="application/pdf" width="100%" height="1200px" />\
  </div>`

  setTimeout(()=>{
    window.scrollTo(120, document.body.scrollHeight);
}, 100)

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
    <div class="container-fluid bg-light">\
      <div class="row">\
          <img src="${jsondata.werk.foto}" alt="Plaatje laad niet" class="img-fluid" style="padding-top:2cm">\
          <div class='text-center'>\
            <a href='#top'><button type='button' class="btn btn-success btn-lg" onclick="happy()">Scroll naar boven</button></a>\
          </div>\
      </div>\
    </div>`
  })
  .then(()=>{
    setTimeout(()=>{
      window.scrollTo(0, document.body.scrollHeight);
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
    <div class="container-fluid bg-light">\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.overmij.foto}" alt="Plaatje laad niet" class="img-fluid" style="padding-left:3cm">\
        </div>\
        <div class="col">\
          ${jsondata.overmij.tekst.join('\n')}\
        </div>\
        <div class='text-center'>\
          <a href='#top'><button type='button' class="btn btn-success btn-lg" onclick="happy()">Scroll naar boven</button></a>\
        </div>\
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

function happy(){
  document.getElementById("img-tom").src = "/image/11_Tom.png"
}