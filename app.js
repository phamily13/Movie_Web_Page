

const main = ()=>
{


    const movieDetails = document.querySelector("#gurdians a");  
    const modal = document.querySelector(".modal");
   
    movieDetails.addEventListener("click",()=>{

      
      const modalContainer = document.querySelector(".modal-container");
    
      modal.classList.remove("hide");

    });

    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener("click",()=>{

        modal.classList.add("hide");
    });
    
    
    const heroImg = document.querySelector(".hero-container");
    const imgArray = ["url(images/background1.jpg", "url(images/background2.jpg", "url(images/background3.jpg", "url(images/background4.jpg", "url(images/background5.jpg"]
    let counter = 0;

    setInterval(()=>{

        heroImg.style.backgroundImage = imgArray[counter]
        counter++;
        if(counter >= imgArray.length) { counter = 0; }
    
    }, 5000)

}   




main();



