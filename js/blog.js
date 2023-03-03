let datas = []
const data = `
<div class="card">
<img src="https://source.unsplash.com/360x200?programming" alt="post" >
<h4>Project 1</h4>
<span>durasi : 3 bulan</span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consectetur debitis recusandae. Assumenda eius, eaque, expedita molestias voluptatibus, natus corrupti iure id in tenetur officiis alias illum. Sapiente, cum modi.</p>
<div class="technologyIcon">
    <img src="./assets/img/nodejs.svg" alt="nodejs">
    <img src="./assets/img/reactjs.svg" alt="reactjs">
    <img src="./assets/img/nextjs.svg" alt="nextjs">
    <img src="./assets/img/typescript.svg" alt="typescript">
</div>
<div class="action">
    <button>edit</button>
    <button>delete</button>
</div>
</div>

<div class="card">
<img src="https://source.unsplash.com/360x200?programming" alt="post" >
<h4>Project 2</h4>
<span>durasi : 3 bulan</span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consectetur debitis recusandae. Assumenda eius, eaque, expedita molestias voluptatibus, natus corrupti iure id in tenetur officiis alias illum. Sapiente, cum modi.</p>
<div class="technologyIcon">
    <img src="./assets/img/nodejs.svg" alt="nodejs">
    <img src="./assets/img/reactjs.svg" alt="reactjs">
    <img src="./assets/img/nextjs.svg" alt="nextjs">
    <img src="./assets/img/typescript.svg" alt="typescript">
</div>
<div class="action">
    <button>edit</button>
    <button>delete</button>
</div>
</div>

<div class="card">
<img src="https://source.unsplash.com/360x200?programming" alt="post" >
<h4>Project 3</h4>
<span>durasi : 3 bulan</span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consectetur debitis recusandae. Assumenda eius, eaque, expedita molestias voluptatibus, natus corrupti iure id in tenetur officiis alias illum. Sapiente, cum modi.</p>
<div class="technologyIcon">
    <img src="./assets/img/nodejs.svg" alt="nodejs">
    <img src="./assets/img/reactjs.svg" alt="reactjs">
    <img src="./assets/img/nextjs.svg" alt="nextjs">
    <img src="./assets/img/typescript.svg" alt="typescript">
</div>
<div class="action">
    <button>edit</button>
    <button>delete</button>
</div>
</div>
`
document.getElementById('startDate').value = new Date().toISOString().substr(0,10) 

const getData = (event) => {
    event.preventDefault()

    let projectName = document.getElementById('projectName').value
    let startDate = document.getElementById('startDate').value 
    let endDate = document.getElementById('endDate').value
    let description = document.getElementById('description').value
    let nodejs = document.getElementById('nodejs')
    let nextjs = document.getElementById('nextjs')
    let reactjs = document.getElementById('reactjs')
    let typescript = document.getElementById('typescript')
    let image = document.getElementById('image').files

    if(projectName == '' || projectName == null) return alert('Project name is required')
    if(startDate == '' || startDate == null) return alert('Date is required')
    if(endDate == '' || endDate == null) return alert('Date is required')
    if(endDate <= startDate) return alert('invalid date')
    if(description == '' || description == null) return alert(' Description is required')
    if(!nodejs.checked && !nextjs.checked && !reactjs.checked && !typescript.checked) return alert('Technologies is required')
    if(image.length == 0 ) return alert('Upload image is required') 
    image = URL.createObjectURL(image[0])

    let data = {
        projectName,
        startDate, 
        endDate,
        description, 
        nodejs : nodejs.checked ? true : false,
        nextjs : nextjs.checked ? true : false,
        reactjs : reactjs.checked ? true : false,
        typescript : typescript.checked ? true : false,
        image
    }
    datas.push(data)
    showData()
}
const showData = () => {
    document.getElementById('posting').innerHTML = data
    for(let i = 0; i < datas.length; i++){
        document.getElementById('posting').innerHTML += `
            <a href="blog-detail.html">
                <div class="card" >
                    <img src="${datas[i].image}" alt="post" >
                    <h4>${datas[i].projectName}</h4>
                    <span>Duration : ${getTime(datas[i].startDate , datas[i].endDate)} </span>
                    <p>${datas[i].description}</p>
                    <div class="technologyIcon">
                        ${datas[i].nodejs ? '<img src="./assets/img/nodejs.svg" alt="nodejs">' : ''}
                        ${datas[i].reactjs ? '<img src="./assets/img/reactjs.svg" alt="reactjs">' : ''}
                        ${datas[i].nextjs ? '<img src="./assets/img/nextjs.svg" alt="nextjs">' : ''}
                        ${datas[i].typescript ? '<img src="./assets/img/typescript.svg" alt="typescript">' : ''}
                    </div>
                    <div class="action">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
            </a>

            `
    }
}

const getTime = (startDate, endDate) => {
    let distance = new Date(endDate) - new Date(startDate)
    const milisecond = 1000
    const second = 60
    const hour = 60
    const day = 24
    const week = 7
    const month = 4
    const year = 12

    let yearDistance = Math.floor( distance / ( year * month * week * day * hour * second * milisecond ))
    if( yearDistance >= 1) return `${yearDistance} Year`

    let monthDistance = Math.floor( distance / (month * week * day * hour * second * milisecond))
    if(monthDistance >= 1) return `${monthDistance} Month`

    let weekDistance = Math.floor( distance / (week * day * hour * second * milisecond))
    if(weekDistance >= 1) return `${weekDistance} Week`

    let dayDistance = Math.floor( distance / (day * hour * second * milisecond ))
    if(dayDistance >= 1) return `${dayDistance} Day`

    // let hourDistance = Math.floor( distance / (hour * second * milisecond ))
    // if(hourDistance >= 1) return `${hourDistance} Hour`

    // let minuteDistance  = Math.floor( distance / (second * milisecond ))
    // if(minuteDistance >= 1) return `${minuteDistance} Minute`

    // let secondDistance = Math.floor( distance / milisecond )
    // if(secondDistance >= 1) return `${secondDistance} Second`

}   