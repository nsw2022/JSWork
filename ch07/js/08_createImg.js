function addContents(){
    let newP = document.createElement("p")
    let text = document.createTextNode("은은하고 다채로운 꽃향")
    newP.appendChild(text) // <p>은은하고 다채로운 꽃향</p>

    let info=document.getElementById('info').appendChild(newP)
    // info.insertBefore(newP,null)// 이건 맨끝에 삽입  //info.firstChild 이건당연히 처음

    let newImg = document.createElement("img")
    let src = document.createAttribute("src")
    // src 속성
    src.value = "./images/coffee-blue.jpg"
    newImg.setAttributeNode(src)

    // alt 속성
    let alt = document.createAttribute("alt")
    alt.value = "커피 이미지"
    
    // div 태그안에 img 태그 포함
    document.getElementById("info").appendChild(newImg)
    
    
}