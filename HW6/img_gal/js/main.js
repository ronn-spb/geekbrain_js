function displayBigImg(e) {
    let strFile = e.src;
    strFile = strFile.replace(/small/gi, "big");
    strFile = strFile.replace(/png/gi, "jpg");
    let bigImg = document.getElementById("img_big").src = strFile;
    let bigImgBlock = document.getElementsByClassName("img_big_card")[0];
    bigImgBlock.style.display = "block";

}