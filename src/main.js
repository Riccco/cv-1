let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let string  = `
/*
*你好，陌生人 :D
*我叫流水，接下来，我将在这张网页上展示一个太极图
*首先我需要一个div
*/

#div1{
    border: 1px solid red;

}

/*
*然后将他变成一个圆形
*/

#div1{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/*
*八卦图是阴阳两面，所以我要将圆形变成黑白的
*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
*古人云，日为阳，月为阴。相生相克，由此我要为八卦图加上阴阳
*/

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`;
let string2= "";
let n = 0;



let step = () =>{
setTimeout(()=>{

    // 试试三元运算符
    if (string[n] === "\n") {
        string2 += "<br>"
    }else if(string[n] === " "){
        string2 += "&nbsp;"

    } else{
        string2 += string[n]
    }

    // string2 += string[n] === '\n' ? "<br>" : string[n];




    demo.innerHTML = string2;
    style.innerHTML = string.substring(0,n)
    if (n < string.length-1) {
        n +=1;
        step();
        
    }else{

    }

},50)

}

step();

