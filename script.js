function animation(nom){
    var element = document.getElementById(nom);
    if (element.classList.contains("tourne")){
        element.classList.remove("tourne");
    }
    
    else   
    element.classList.add("tourne");
    
}

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(datas => {
    console.log(datas);
    const res = datas.data.map(element => {
        return `
    <li class="carte">
        <div class="image">
            <a href="mailto:${element.email}" title="Adresse email"> <img class="avatar" src="${element.avatar}" href="${element.email}"></a>
        </div>
        <div class="nom">
            <span class="firstName">${element.first_name}</span>
            <span class="lastName">${element.last_name}</span>
        </div>
    </li>
    `
    })
    document.getElementById('personnes').innerHTML += res.join('');
})

fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(datas => {
    const res = datas.data.map(element => {
        if (element.id < 9){
            return `
        <li class="carte">
            <div class="image">
               <a href="mailto:${element.email}" title="Adresse email"> <img class="avatar" src="${element.avatar}"></a>
            </div>
            <div class="nom2">
                <span class="firstName">${element.first_name}</span>
                <span class="lastName">${element.last_name}</span>
            </div>
        </li>
        `
        }
    })
    document.getElementById('personnes').innerHTML += res.join('');
})