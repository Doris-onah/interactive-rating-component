var ans;
function answer(){
    document.getElementById("content1").style.display= "none";
    document.getElementById("response").innerHTML= ans;
    document.getElementById("content2").style.display= "block";


}

function selected(num)
{
    ans = num;
}