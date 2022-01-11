import '../style/style.scss';



class Rating{

    constructor() {
        this.ratingStars = [...document.querySelectorAll('.form-rating__item > div')];
        this.init();
    }

    executeRating(stars){
        const starClassActive = "star-full";
        const starClassInactive = "star-empty";
        const starsLength = stars.length;
        let i;

        stars.map((star) => {

            star.onclick = () => {
                i = stars.indexOf(star);
                console.log(i+1)
                if(star.className === starClassInactive)
                    for(i; i >= 0; --i) stars[i].className = starClassActive;
                else
                    for(i; i < starsLength; ++i) stars[i].className = starClassInactive
            };
        });
    }

    init(){
        this.executeRating(this.ratingStars);
    }
}


window.addEventListener('DOMContentLoaded', ()=>{

    new Rating();




    // const ratingStars = [...document.querySelectorAll('.form-rating__item > div')];
    //
    // function executeRating(stars){
    //     const starClassActive = "star-full";
    //     const starClassInactive = "star-empty";
    //     const starsLength = stars.length;
    //     let i;
    //
    //     stars.map((star) => {
    //
    //         star.onclick = () => {
    //             i = stars.indexOf(star);
    //             console.log(i+1)
    //             if(star.className === starClassInactive)
    //                 for(i; i >= 0; --i) stars[i].className = starClassActive;
    //             else
    //                 for(i; i < starsLength; ++i) stars[i].className = starClassInactive
    //
    //
    //
    //         };
    //
    //     });
    //
    //
    // }
    //
    // executeRating(ratingStars);

})
