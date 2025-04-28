function kereses(){
    let sz = ""
    let beEv = document.getElementById("beEv").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>{
y.prizes.forEach(elem => {
    // console.log(elem)
    if(elem.year == beEv){
        sz+=`
        <p style="font-size:20px; text-decoration:underline; color:darkgreen;">
        ${elem.year} ${elem.category}
        </p>
        
        `
        for (const elemEmber of elem.laureates) {
            sz+=`
            <p style="font-size: 15px; font-style:italic;">
            <b>${elemEmber.firstname}
            ${elemEmber.surname}</b>
            </p>
            
            <p style="font-size:15px;">
            ${elemEmber.motivation}
            </p>`
        }
        sz+=`<hr>`
    }
});
if(sz=""){
    sz+="Nincs találat."
}
document.getElementById("evKiAdat").innerHTML=sz
    }
    )}
