var ip;
let met, fea, lit, gal, kil, pou;
function calc(){
    ip=document.getElementById("input").value;
    ip=parseFloat(ip);
    fea=ip*3.281;
    fea=fea.toFixed(3);
    met=ip/3.281;
    met=met.toFixed(3);
    lit=ip/3.785;
    lit=lit.toFixed(3);
    gal=ip*3.785;
    gal=gal.toFixed(3);
    kil=ip*2.205;
    kil=kil.toFixed(3);
    pou=ip/2.205;
    pou=pou.toFixed(3);
    document.getElementById("length-content").textContent=ip+" meters = "+fea+" feet | "+ip+" feet = "+met+" meters";
    document.getElementById("volume-content").textContent=ip+" liters = "+gal+" gallons | "+ip+" gallons = "+lit+" liters";
    document.getElementById("mass-content").textContent=ip+" kilos = "+pou+" pounds | "+ip+" pounds = "+kil+" kilos";
}