import '../style/style.scss';


class FormLogic{

    constructor() {
        this.ratingStars = [...document.querySelectorAll('.form-rating__item > div')];
        this.checkBox = document.querySelector('.custom-checkbox');
        this.inputsWrapper = document.querySelector('.form-contact__inputs');
        this.inputContactName = document.getElementById('contactName');
        this.inputMobileNumber = document.getElementById('mobileNumber');
        this.inputEmail = document.getElementById('email');
        this.textArea = document.getElementById('textArea');
        this.buttonSubmit = document.querySelector('.form-button__submit');

        this.submitInfo = {
            rating: null,
            feedback: "",
            contactName: "",
            mobile: "",
            email: "",
        }

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
                this.submitInfo.rating = i + 1;
                if(star.className === starClassInactive)
                    for(i; i >= 0; --i) stars[i].className = starClassActive;
                else
                    for(i; i < starsLength; ++i) stars[i].className = starClassInactive
            };
        });
    }

    validateEmail(email){
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    checkBoxToggle(checked){
        checked ? this.inputsWrapper.classList.add('active') : this.inputsWrapper.classList.remove('active')
    }

    eventCheckBox(){
        this.checkBox.addEventListener('change',  ()=>{
            this.checkBoxToggle(this.checkBox.checked)
        })
    }

    addListeners(event, elements){
        elements.forEach(item=>{
            item.input.addEventListener(event, (e)=>item.cb(e));
        })
    }

    eventsInputs(){

        const feedback = (e) => this.submitInfo.feedback = e.target.value;
        const contactName = (e) => this.submitInfo.contactName = e.target.value;
        const mobile = (e) => this.submitInfo.mobile = e.target.value;
        const email = (e) => this.submitInfo.email = e.target.value;

        const elems = [
            { input: this.inputContactName, cb: contactName },
            { input: this.inputMobileNumber, cb: mobile },
            { input: this.textArea, cb: feedback },
            { input: this.inputEmail, cb: email },
        ]

        this.addListeners('keyup', elems);
    }

    submit(){
        this.buttonSubmit.addEventListener('click', (e)=>{

            if(!this.checkBox.checked){
                console.log(this.submitInfo)
            }
            else if(this.checkBox.checked && (!this.validateEmail(this.submitInfo.email) || !this.submitInfo.contactName || !this.submitInfo.mobile)){

                !this.validateEmail(this.submitInfo.email) ? this.inputEmail.classList.add('error') : this.inputEmail.classList.remove('error');
                !this.submitInfo.mobile ? this.inputMobileNumber.classList.add('error') : this.inputMobileNumber.classList.remove('error');
                !this.submitInfo.contactName ? this.inputContactName.classList.add('error') : this.inputContactName.classList.remove('error');

                e.preventDefault();
            }
        })
    }

    init(){
        this.executeRating(this.ratingStars);
        this.eventCheckBox();
        this.eventsInputs();
        this.submit();
    }
}


window.addEventListener('DOMContentLoaded', ()=>{

    new FormLogic();

})
