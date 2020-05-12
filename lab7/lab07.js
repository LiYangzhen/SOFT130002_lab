const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let justify = document.getElementsByClassName("justify");

window.onload = function () {
    for (let work of works) {
        generate(work);
    }
}

function generate(work){
    let item = document.createElement("div");
    item.className = "item";
    let item_tips = document.createElement("h4");
    item_tips.innerText = "Genre:" + work.tips;
    let item_author = document.createElement("div");
    item_author.className = "inner-box";
    let h3 = document.createElement("h3");
    h3.innerText = work.author;
    h3.style.display = "inline";
    let h5 = document.createElement("h5");
    h5.innerText = "lifetime:" + work.lifetime;
    h5.style.display = "inline";
    h5.style.marginLeft = "1em";
    let item_photos = document.createElement("div");
    item_photos.className = "inner-box";
    item_photos.innerHTML = '<h3>Popular Photos</h3>';
    for (let src of work.photos) {
        let p = document.createElement("img");
        p.className = "photo";
        p.src = src;
        item_photos.appendChild(p);
    }
    let button = document.createElement("button");
    button.innerText = "visit";

    item.appendChild(item_tips);
    item_author.appendChild(h3);
    item_author.appendChild(h5);
    item.appendChild(item_author);
    item.appendChild(item_photos);
    item.appendChild(button);

    justify[0].appendChild(item);
}