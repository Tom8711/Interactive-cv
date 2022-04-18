function generateTextPort(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\
    <div class="container-fluid">\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.portfolio.foto1}" alt="Plaatje laad niet" class="img-fluid">\
        </div>\
        <div class="col">\
          ${jsondata.portfolio.tekst.join('\n')}\
      </div>\
      <div class="row">\
        <div class="col">\
          ${jsondata.portfolio.tekst.join('\n')}\
        </div>\
        <div class="col">\
          <img src="${jsondata.portfolio.foto3}" alt="Plaatje laad niet" class="img-fluid">\
          <a href='#top'><button type='button'>Scroll naar boven</button></a>\
        </div>\
      </div>\
    </div>`
  })
  // .then(()=>{
  //   setTimeout(()=>{
  //   document.getElementById("scroll-to").scrollIntoView();
  // }, 100)
  // })
}

function generateTextIt(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\ 
    <div class="container-fluid">\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.portfolio.foto}" alt="Plaatje laad niet" class="img-fluid">\
        </div>\
        <div class="col" style='height:23.7cm'>\
          ${jsondata.it.tekst.join('\n')}\
          <a href='#top'><button type='button'>Scroll naar boven</button></a>\
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

function generateTextWerk(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\ 
    <div class="container-fluid">\
      <div class="row">\
          <img src="${jsondata.werk.foto}" alt="Plaatje laad niet" class="img-fluid">\
          <a href='#top'><button type='button' class="btn btn-secondary btn-sm">Scroll naar boven</button></a>\
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
    <div class="container-fluid">\
      <div class="row">\
        <div class="col">\
          <img src="${jsondata.overmij.foto}" alt="Plaatje laad niet" class="img-fluid" style="padding-left:3cm">\
        </div>\
        <div class="col">\
          ${jsondata.overmij.tekst.join('\n')}\
          <a href='#top'><button type='button'>Scroll naar boven</button></a>\
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

function generateTextInter(){
  fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    document.getElementById("text-in").innerHTML =`\ 
    <div class="container-fluid">\
      <div class="row">\
        <div class="col-xl-6 col-lg-6 col-md-6" >\
          <img src="${jsondata.interesses.foto}" alt="Plaatje laad niet" class="img-fluid">\
        </div>\
        <div class="col-xl-6 col-lg-6 col-md-6" style='height:23.7cm'>\
          ${jsondata.interesses.tekst.join('\n')}\
          <a href='#top'><button type='button'>Scroll naar boven</button></a>\
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

function west(){
  document.getElementById("img-tom").src = "/image/west025mp.jpg"
}

function northwest(){
  document.getElementById("img-tom").src = "/image/noordwest025mp.jpg"
}

function north(){
  document.getElementById("img-tom").src = "/image/noord025mp.jpg"
}

function northeast(){
  document.getElementById("img-tom").src = "/image/noordoost025mp.jpg"
}

function east(){
  document.getElementById("img-tom").src = "/image/oost025mp.jpg"
}

function happy(){
  document.getElementById("img-tom").src = "/image/front025mp.jpg"
}