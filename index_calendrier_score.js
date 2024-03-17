
function change(Gauge){
    const num = Gauge.substring(5, 6);
    console.log(num);

    let numChange = 0;
    let numChange2 = 0;
    if (Number(num)<=4) {
        numChange = Number(num) + 1;
        numChange2 = Number(num) + 2;
      } else {
        numChange = Number(num) - 1;
        numChange2 = Number(num) - 2;
      }
    console.log(numChange);

    const gaugeRef = document.querySelectorAll(".cell"+num+" img[src^='img/gauge']");
    console.log(gaugeRef);

    gaugeRef.forEach((item)=>{
        console.log(item);
        item.addEventListener('mouseenter', function(event){
            event.target.setAttribute("src","img/gauge"+numChange+".png");
            setTimeout(() => {
                event.target.setAttribute("src","img/gauge"+numChange2+".png");
            }, 150);
            setTimeout(() => {
                event.target.setAttribute("src","img/"+Gauge+".png");
            }, 400);
        }, false);
    })
}

change("gauge0");
change("gauge1");
change("gauge2");
change("gauge3");
change("gauge4");
change("gauge5");
change("gauge6");
change("gauge7");
change("gauge8");
change("gauge9");



