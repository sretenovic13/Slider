import Person from './person.js'
import Course from './course.js'

const fullName = document.getElementById('fullName')
const title = document.getElementById('title')
const slides1 = document.getElementById('slides1')
const slides2 = document.getElementById('slides2')
const slides3 = document.getElementById('slides3')

const stefan = new Person('Stefan','Sretenovic','basketball player',25,'blue')

fullName.innerHTML = stefan.fullName()
title.innerHTML = stefan.education

let arrayOfCourses = []

for(let i = 0; i < 9;i++) {
    arrayOfCourses[i] = new Course() 
}

let arrayOfDivs = []

async function fetchDataJSON() {
    const response = await fetch('https://mocki.io/v1/58c1aa46-06fb-48ff-9378-83c34e87ab07')
    const slide = await response.json()
    return slide 
}
fetchDataJSON().then(slides => {
    for(let i = 0; i < arrayOfCourses.length; i++){
            arrayOfCourses[i].setName(slides.data[i].title)
            arrayOfCourses[i].setData(slides.data[i].post)
            arrayOfCourses[i].setIcon(slides.data[i].faclass)

            arrayOfDivs.push(`
                <div class="col-sm-4 text-center serviceBox">
                    <span class="fa-stack fa-3x">
                        <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                        ${
                            (arrayOfCourses[i].getIcon() === "fa-mobile" || arrayOfCourses[i].getIcon() === "fa-database")
                            ? `<i class="fa ${arrayOfCourses[i].getIcon()} fa-stack-1x fa-inverse"></i></span>`
                            : `<i class="fab ${arrayOfCourses[i].getIcon()} fa-stack-1x fa-inverse"></i></span>`
                        }
                    <h4 id="kurs${i + 1}a">${arrayOfCourses[i].getName()}</h4>
                    <p id="kurs${i + 1}b">${arrayOfCourses[i].getData()}</p>
                </div>
        `
        )
    }
    for(let i = 0; i < arrayOfDivs.length; i++){
        if(i < 3){
            slides1.innerHTML += arrayOfDivs[i]
        } else if(i > 2 && i < 6){
            slides2.innerHTML += arrayOfDivs[i]
        } else {
            slides3.innerHTML += arrayOfDivs[i]
        }
    }
})