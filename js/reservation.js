function calc() {
    var p=document.getElementById("people").value;
    var r=document.getElementById("run").value;

    var price=parseInt(p)*parseInt(r)*2000;

    return price;
}


function confirmOrder() {
    calc()
    confirm("예약일: "+document.getElementById("date").value+", 방문시간: "+document.getElementById("time").value+
    ", 총 " +document.getElementById("people").value + "명, "+
    document.getElementById("run").value+"시간 게임하실 것으로 확인 되셨습니다. 가격은 "+
    calc()+"입니다. 예약하시겠습니까?")
}

function change() {
    location.href="./reservation_clear.html"
}