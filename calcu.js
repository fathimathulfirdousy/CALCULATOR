function appendcharacter(value){
    const display=document.getElementById('display');
    display.value += value;

}
function resultcalculator()
{
    const display=document.getElementById("display");
    try{
        display.value =eval(display.value)||'';
    }
    catch(error){
        display.value='Error';

    }
}
function clearcharacter()
{
    const display = document.getElementById('display');
    display.value = '';
}

function deletecharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}