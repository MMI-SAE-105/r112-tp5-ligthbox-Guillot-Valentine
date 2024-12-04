// *** LIGHTBOX ***
const lightBox = document.querySelector("#lightbox"); 

document.querySelectorAll("img").forEach(img => { 
    img.addEventListener("click", () => {  
        lightBox.showModal(); 
    }); 
}); 

lightBox.addEventListener("click", (evt) => { 
    if (evt.target === lightBox) lightBox.close(); 
});
