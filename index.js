

fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>megjelenit(y))

function megjelenit(y){
    console.log(y)

    let sz=""

    for (const elem of y.prizes) {
        sz+=`
        <div>
        <div id="keret" class="row">
        <div class="col-sm-3"><div id="szegely">
        <p>${elem.year}</p>
        <p>${elem.category}</p>
        </div></div>
        </div>
        
        </div>
        `
    }


    document.getElementById("keret").innerHTML=sz
}

