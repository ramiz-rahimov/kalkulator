
const aitem = document.querySelector('.aitem')
const backMy = document.querySelector('.back')
const cleanYour = document.querySelector('.clean')
const equalMy = document.querySelector('.egual')
 
// aitem.addEventListener('click' ,insert)
// backMy.addEventListener('click' ,back)
// cleanYour.addEventListener('click' , clean)
// equalMy.addEventListener('click' , egual)






function insert(num){
    document.form.textview.value = document.form.textview.value + num ;
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,
        exp.length-1);
}
function egual(){
    const exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}