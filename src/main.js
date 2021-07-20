let html = document.querySelector("#html")
let style = document.querySelector('#style')
let n = -1
let string = `/*你好，我非常喜欢网易
虽然我现在还没有足够的能力
等着我吧*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我要施法了*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.7);
    border: none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before {
    width: 100px;
    height: 100px;
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    position: absolute;
    content: "";
    display: block;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
`
let string2 = ''
let step = () => {
    setTimeout(() => {
        n = n + 1
        if (string[n] === '\n') {
            string2 += "<br>"
        }
        else if (string[n] === ' ') {
            string2 += "&nbsp;"
        }
        else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 9999)
        if (n < string.length - 1) { step() }
        else {
            return
        }
    }, 50)
}
step()