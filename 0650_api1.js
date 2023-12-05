function sort() {
    let price=document.getElementById('price');
    let title=document.getElementById('title');
    if(price.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse()}

    if(title.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse1()}
}

async function getResponse() {

    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
//    let responce = await fetch("../../tmp/g06u28.shop.json")
    let response = await fetch("shop.json")

    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    console.log(content)
    let key


    content_price=content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_price) {
        node_for_insert.innerHTML += `
        <li style="width: 210px;" class="d-flex flex-column m-1 p-1 bg-body">
        <img style="width: 180px;" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text" >${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden"  name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >В корзину <input class="w-25" type="number" name="quantity"  value="0" > </p>
        </li>
                `
    }
}

async function getResponse1() {

   let response = await fetch("shop.json")

    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    console.log(content)
    let key

    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_title) {
        node_for_insert.innerHTML += `
        <li style="width: 210px; " class="d-flex flex-column m-1 p-1 bg-body">
        <img style="width: 180px;  "class="align-self-center" src=${content[key].img}>
        <h5 class="card-title" >${content[key].title}</h5>
        <p class="card-text" >${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden"  name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text"  >В корзину <input  class="w-25" type="number" min="0" name="quantity" value="0" > </p>
        </li>
                `
    }
}

sort()



