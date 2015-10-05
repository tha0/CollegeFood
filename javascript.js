window.onload = oppstart;
            
function oppstart()
{
    document.getElementById("test").onclick = test;
}

function test()
{
    document.getElementById("visning").innerHTML = "<img src=\"test.png\" alt=\"navnrett\">" + "<br/>";
}