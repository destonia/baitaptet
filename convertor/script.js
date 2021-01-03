function convert() {
    let money1 = parseFloat(document.getElementById("money1").value);
    let money2 = parseFloat(document.getElementById("money2").value);
    let ammoney = parseFloat(document.getElementById("ammoney").value);
    let cvmoney = ((money2 / money1) * ammoney).toFixed(1);
    document.getElementById("mon1").innerHTML = ammoney;
    let mx = document.getElementById("money1");
    let my = mx.options[mx.selectedIndex].text;
    document.getElementById("mon2").innerHTML = my;
    document.getElementById("mon3").innerHTML = cvmoney;
    let ma = document.getElementById("money2");
    let mb = ma.options[ma.selectedIndex].text;
    document.getElementById("mon4").innerText = mb;
}
function convert2() {
    let length1 = parseFloat(document.getElementById("length1").value);
    let length2 = parseFloat(document.getElementById("length2").value);
    let amlength = parseFloat(document.getElementById("amlength").value);
    let cvlength = ((length2 / length1) * amlength).toFixed(1);
    document.getElementById("leng1").innerHTML = amlength;
    let lx = document.getElementById("length1");
    let ly = lx.options[lx.selectedIndex].text;
    document.getElementById("leng2").innerHTML = ly;
    document.getElementById("leng3").innerHTML = cvlength;
    let la = document.getElementById("length2");
    let lb = la.options[la.selectedIndex].text;
    document.getElementById("leng4").innerText = lb;
}
function convert3() {
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);
    let amweight = parseFloat(document.getElementById("amweight").value);
    let cvweight = ((weight2 / weight1) * amweight).toFixed(1);
    document.getElementById("wei1").innerHTML = amweight;
    let wx = document.getElementById("weight1");
    let wy = wx.options[wx.selectedIndex].text;
    document.getElementById("wei2").innerHTML = wy;
    document.getElementById("wei3").innerHTML = cvweight;
    let wa = document.getElementById("weight2");
    let wb = wa.options[wa.selectedIndex].text;
    document.getElementById("wei4").innerText = wb;
}