console.log("work"),function(){let e=document.querySelector(".menu__icon"),t=document.querySelector(".menu");e.addEventListener("click",(()=>{document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}(),async function(){let e=await async function(){const e=await fetch("../../pages/main/pets.json");return await e.json()}(),t=document.querySelector(".slider"),n=(document.querySelector(".popup"),"");t.addEventListener("click",(t=>{let o=t.target,s=o.parentNode;"slider-item-button"==o.className&&"slider-item"==s.className&&(n=o.previousElementSibling.innerHTML,e.forEach((e=>{if(e.name==n){let t=document.createElement("div");t.className="popup",t.innerHTML=`\n          <div class="popup__content">\n            <div class="popup__content-image">\n              <img src=${e.img}/>\n            </div>\n            <div class="popup__content-text">\n              <h3 class="popup__content-text-heading">${e.name}</h3>\n              <p class="popup__content-text-subheading">${e.type} - ${e.breed}</p>\n              <p class="popup__content-text-description">${e.description}</p>\n              <div class="popup__content-text-extra">  \n                <p><span>Age:</span>${e.age}</p>\n                <p><span>Inoculations:</span>${e.inoculations}</p>\n                <p><span>Diseases:</span>${e.diseases}</p>\n                <p><span>Parasites</span>${e.parasites}</p>\n              </div>\n            </div> \n          </div>\n          <div class="popup__close">X</div>\n          `,document.body.prepend(t),function(){let e=document.querySelector(".popup__close"),t=document.querySelector(".popup");null!=t&&(e.addEventListener("click",(e=>{t.remove(),console.log("HIDE POPUP",t)})),t.addEventListener("click",(e=>{t.remove(),console.log("HIDE POPUP",t)})))}()}})))}))}(),function(){let e=document.querySelector(".Pets__inner-slider-wrapper");document.querySelector(".slider-button slider-button-prev"),document.querySelector(".slider-button slider-button-next"),e.addEventListener("click",(e=>{let t=e.target;console.log(t.parentNode.className),"slider-button slider-button-prev"==t.parentNode.className&&console.log("work showPets"),"slider-button slider-button-next"==t.parentNode.className&&console.log("work showPets")}))}();