var arr;
// async function logJSONData() {
//     arr = await response.json();
//     // console.log(arr);
// }
// logJSONData();
const response = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
response.then(function(data){
    x = data.json();
    x.then(function(arr){
        arr.forEach(function(element,i){
            const main = document.getElementById("main");
            const div = document.createElement("div");
            div.className = "box";
            main.appendChild(div);
            div.innerHTML = ` <div class="name">
                                <div class="logo"></div>
                                <div class="logoname"></div>
                            </div>
                            <div class="sf"></div>
                            <div class="price"></div>
                            <div class="lprice"></div>
                            <div class="per"></div>
                            <div class="mkt"></div>`;
        
            // document.getElementsByClassName("name")[0];
            const logo = document.getElementsByClassName("logo")[i];
            logo.innerHTML = `<img src="${element.image}" alt="">`
            const logoname = document.getElementsByClassName("logoname")[i];
            logoname.innerText = `${element.name}`
            const sf = document.getElementsByClassName("sf")[i];
            sf.innerText = `${element.symbol}`
            const price = document.getElementsByClassName("price")[i];
            price.innerText = `$${element.current_price}`
            const lprice = document.getElementsByClassName("lprice")[i];
            lprice.innerText = `$${element.fully_diluted_valuation}`
            const per = document.getElementsByClassName("per")[i];
            const perValue = (element.price_change_percentage_24h).toFixed(2);
            per.innerText = `${perValue}%`
            if(perValue > 0.03){
                per.style.color = "rgba(27, 243, 27, 0.836)";
            }
            else{
                per.style.color = "red";
            }
            const mkt = document.getElementsByClassName("mkt")[i];
            mkt.innerText = `Mkt Cap : $${element.market_cap}`
        
            
        })
    })
})

const sortmkt = document.getElementById("mkt");
sortmkt.addEventListener("click",function(){
    let mktArr = arr.map(function(e){
        return e;
    });
    mktArr.sort(function(a,b){
        return a.market_cap - b.market_cap;
    });
    mktArr.reverse();
    mktArr.forEach(function(element,i){
        const logo = document.getElementsByClassName("logo")[i];
        logo.innerHTML = `<img src="${element.image}" alt="">`
        const logoname = document.getElementsByClassName("logoname")[i];
    logoname.innerText = `${element.name}`
    const sf = document.getElementsByClassName("sf")[i];
    sf.innerText = `${element.symbol}`
    const price = document.getElementsByClassName("price")[i];
    price.innerText = `$${element.current_price}`
    const lprice = document.getElementsByClassName("lprice")[i];
    lprice.innerText = `$${element.fully_diluted_valuation}`
    const per = document.getElementsByClassName("per")[i];
    const perValue = (element.price_change_percentage_24h).toFixed(2);
    per.innerText = `${perValue}%`
    if(perValue > 0.03){
        per.style.color = "rgba(27, 243, 27, 0.836)";
    }
    else{
        per.style.color = "red";
    }
    const mkt = document.getElementsByClassName("mkt")[i];
    mkt.innerText = `Mkt Cap : $${element.market_cap}`
    });
});

const sortpercent = document.getElementById("percent");
sortpercent.addEventListener("click",function(){
    let percentArr = arr.map(function(e){
        return e;
    });
    percentArr.sort(function(a,b){
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
    });
    percentArr.reverse();
    percentArr.forEach(function(element,i){
        const logo = document.getElementsByClassName("logo")[i];
        logo.innerHTML = `<img src="${element.image}" alt="">`
        const logoname = document.getElementsByClassName("logoname")[i];
    logoname.innerText = `${element.name}`
    const sf = document.getElementsByClassName("sf")[i];
    sf.innerText = `${element.symbol}`
    const price = document.getElementsByClassName("price")[i];
    price.innerText = `$${element.current_price}`
    const lprice = document.getElementsByClassName("lprice")[i];
    lprice.innerText = `$${element.fully_diluted_valuation}`
    const per = document.getElementsByClassName("per")[i];
    const perValue = (element.price_change_percentage_24h).toFixed(2);
    per.innerText = `${perValue}%`
    if(perValue > 0.03){
        per.style.color = "rgba(27, 243, 27, 0.836)";
    }
    else{
        per.style.color = "red";
    }
    const mkt = document.getElementsByClassName("mkt")[i];
    mkt.innerText = `Mkt Cap : $${element.market_cap}`
    });
});

function searching(searchedValue){
    return arr.filter(function(e,i){
        if(e.name.includes(searchedValue) || e.symbol.includes(searchedValue)){
            return true;
        }
        return false;
    })
}
var count = 0;
const input = document.getElementById("search");

input.addEventListener("keyup",function(e){
    let main = document.getElementById("main");
    main.innerHTML = "";
    
    let newdiv = document.createElement("div");
    newdiv.className = "box";
    main.appendChild(newdiv);
    newdiv.innerHTML = ` <div class="name">
    <div class="logo"></div>
    <div class="logoname"></div>
    </div>
    <div class="sf"></div>
    <div class="price"></div>
    <div class="lprice"></div>
    <div class="per"></div>
    <div class="mkt"></div>`;
    
    // let searchedValue = e.target.value;
    // let filteredUsers = searching(searchedValue);
    // console.log(filteredUsers.length);
    // if(filteredUsers.length >= 1){
        arr.forEach(function(element,i){
            const logo = document.getElementsByClassName("logo")[i];
            logo.innerHTML = `<img src="${element.image}" alt="">`
            console.log(logo.innerHTML);
            const logoname = document.getElementsByClassName("logoname")[i];
        logoname.innerText = `${element.name}`
        const sf = document.getElementsByClassName("sf")[i];
        sf.innerText = `${element.symbol}`
        const price = document.getElementsByClassName("price")[i];
        price.innerText = `$${element.current_price}`
        const lprice = document.getElementsByClassName("lprice")[i];
        lprice.innerText = `$${element.fully_diluted_valuation}`
        const per = document.getElementsByClassName("per")[i];
        const perValue = (element.price_change_percentage_24h).toFixed(2);
        per.innerText = `${perValue}%`
        if(perValue > 0.03){
            per.style.color = "rgba(27, 243, 27, 0.836)";
        }
        else{
            per.style.color = "red";
        }
        const mkt = document.getElementsByClassName("mkt")[i];
        mkt.innerText = `Mkt Cap : $${element.market_cap}`
        });
    // }
});