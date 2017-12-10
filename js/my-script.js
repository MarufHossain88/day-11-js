/**
 * Created by Web App Develop-PHP on 12/10/2017.
 */


//    var paragraphElement=document.getElementsByTagName('a');
//    for (var key in paragraphElement){
//        document.write(paragraphElement[0].innerHTML,'<br>');
//    }
//    var paragraphElement=document.getElementsByTagName('p');
//    for (var key=0; key<paragraphElement.length;key++){
//        document.write(paragraphElement[key].innerHTML,'<br>');
//    }

//    var x;
//    x=10;
//    document.write(x);

//    var data=new Array();
//    var data1=Array();

//    var data=[];
//    data[0]=10;
//    data[1]=20;
//    data[2]=30;
//    data[3]=40;
//    data ['name']='mosiur';
//    data ['city']='mirpur-10';
//    data ['country']='Bangladesh';
//    document.write(data[20]);
//    document.write(data['name']);
//
//    for(var key in data){
//        document.write(data[key]+'<br>');
//    }

//var data=['fg','hd','rg'];
//document.write(data.length-1);

//
//    function demo() {
////        document.write('Hello Bangladesh');
//    var firstName='rubina';
//    var lastName='rubi';
//    var fullName=firstName+' '+lastName;
//    document.write(fullName);
//}

//function demo(firstName,lastName) {
//    var fullName=firstName+' '+lastName;
//    document.write(fullName);
//}
//
//
//
//
//    document.write('<br>=========================<br>');
//    demo('Imran','Hossain');
//document.write('<br>=========================<br>');
//demo('Maruf','Hossain');
//document.write('<br>=========================<br>');
//demo('Mehedi','Hasan');
//


var btnElement= document.getElementById('btn');
btnElement.onclick=function () {
    var firstNamevalue= document.getElementById('firstName').value;

    var lastNamevalue= document.getElementById('lastName').value;

    var fullName=firstNamevalue +' '+lastNamevalue;

    document.getElementById('fullName').value=fullName;
};



var btnElement= document.getElementById('add');
btnElement.onclick=function () {
    var firstNumbervalue= Number(document.getElementById('firstNumber').value);

    var secondnumbervalue= Number(document.getElementById('secondNumber').value);

    var result=firstNumbervalue+secondnumbervalue;

    document.getElementById('Result').value=result;
};




var btnElement= document.getElementById('sub');
btnElement.onclick=function () {
    var firstNumbervalue= document.getElementById('firstNumber').value;

    var secondnumbervalue= document.getElementById('secondNumber').value;

    var result=firstNumbervalue - secondnumbervalue;

    document.getElementById('Result').value=result;
};



var btnElement= document.getElementById('mul');
btnElement.onclick=function () {
    var firstNumbervalue= document.getElementById('firstNumber').value;

    var secondnumbervalue= document.getElementById('secondNumber').value;

    var result=firstNumbervalue * secondnumbervalue;

    document.getElementById('Result').value=result;
};



var btnElement= document.getElementById('div');
btnElement.onclick=function () {
    var firstNumbervalue= document.getElementById('firstNumber').value;

    var secondnumbervalue= document.getElementById('secondNumber').value;

    var result=firstNumbervalue / secondnumbervalue;

    document.getElementById('Result').value=result;
};



var btnElement= document.getElementById('mod');
btnElement.onclick=function () {
    var firstNumbervalue= document.getElementById('firstNumber').value;

    var secondnumbervalue= document.getElementById('secondNumber').value;

    var result=firstNumbervalue % secondnumbervalue;

    document.getElementById('Result').value=result;
};