// class Testimonial {
//     constructor( quote, img){
//         this._quote = quote
//         this._img = img
//     }
//     get quote() {
//         return this._quote
//     }

//     get image() {
//         return this._img
//     }

//     get html() {
//         return `
//         <div class="card">
//             <img src="${this.image}" alt="testimonial">
//             <p id="quote">"${this.quote}"</p>
//             <p id="author">- ${this.author}</p>
//         </div>
//         `
//     }
// }
// class AuthorTestimonial extends Testimonial{
//     constructor (author, quote, img){
//         super(quote,img)
//         this._author = author
//     }
//     get author() {
//         return this._author
//     }
// }
// class CompanyTestimonial extends Testimonial{
//     constructor (company, quote, img){
//         super(quote,img)
//         this._company = company
//     }
//     get author() {
//         return `${this._company} Company`
//     }
// }

// const testimonial1 = new AuthorTestimonial ('Alim', 'Mantap-mantap Keren!','https://source.unsplash.com/500x500?man');
// console.table(testimonial1)
// const testimonial2 = new AuthorTestimonial ('Prasetyo', 'Okok mantap','https://source.unsplash.com/500x500?man');
// const testimonial3 = new CompanyTestimonial ('Google', 'Biasa aja.','https://source.unsplash.com/500x500?man');

// const dataTestimonial = [testimonial1,testimonial2,testimonial3]
// let testiCard = "";

// for(let i = 0 ; i < dataTestimonial.length; i++){
//     testiCard += dataTestimonial[i].html
// }

// document.getElementById('testimonial').innerHTML = testiCard

// array of object 
const testimonialData = [
    {
        author : 'Alimm',
        quote : 'Mantap-mantap Keren!!',
        image : 'https://source.unsplash.com/500x500?man',
        rating : 5
    },
    {
        author : 'Prasteyo',
        quote : 'WOW!!',
        image : 'https://source.unsplash.com/500x500?man',
        rating : 4
    },
    {
        author : 'Putra',
        quote : 'Oke!!',
        image : 'https://source.unsplash.com/500x500?man',
        rating : 3
    },
    {
        author : 'Sinambela',
        quote : 'Lumayan Keren!',
        image : 'https://source.unsplash.com/500x500?man',
        rating : 2
    },
    {
        author : 'Ali',
        quote : 'Biasa aja.',
        image : 'https://source.unsplash.com/500x500?man',
        rating : 1
    }
]

function allTestimonials() {
    let testimonialHTML = '';
    testimonialData.forEach( item => {
        testimonialHTML += `
                <div class="card">
                    <img src="${item.image}" alt="testimonial">
                    <p id="quote">"${item.quote}"</p>
                    <p id="author">- ${item.author}</p>
                    <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>
        `
    })
    document.getElementById('testimonial').innerHTML = testimonialHTML
}

function filterTestimonial(rating) {
    let testimonialHTML = '';
    const testimonialFiltered = testimonialData.filter(item => {
        return item.rating === rating
    })

    if(testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    }else {
        testimonialFiltered.forEach(item => {
            testimonialHTML += `
                <div class="card">
                    <img src="${item.image}" alt="testimonial">
                    <p id="quote">"${item.quote}"</p>
                    <p id="author">- ${item.author}</p>
                    <p id="star">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
            `
        })
    }

    document.getElementById('testimonial').innerHTML = testimonialHTML
}

