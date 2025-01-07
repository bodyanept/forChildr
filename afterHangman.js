//8 Functions

//     var firstFunc= function () {                    //СОЗДАЛИ ПЕРВУЮ ПРОСТУЮ ФУНКЦИЮ
//     console.log('Hello world');
    
// }

// firstFunc()                                           //ВЫЗВАЛИ ПЕРВУЮ ПРОСТУЮ ФУНКЦИЮ


// var sayHello=function(name){            // name при написании функции является аргументом
//     alert('Привет, '+ name +'!!!')
    
// }

// name=prompt('введи имя')

// sayHello(name)                                        //ВЫЗВАЛИ ФУНКЦИЮ С ПАРАМЕТРОМ


// var drawCats = function(how){                //функция с количеством ее повторений 
//     for(var i=0;i<how;i++){                      //цикл где используем  аргумент функции
//         console.log(i+' =^.^=');
        
//     }
// }

// how=+prompt('сколько раз нарисовать тебе котиков?')
// drawCats(how)

// var print=function(how,what){                   //Ф-Я С ДВУМЯ АРГУМЕНТАМИ
//     for(let i=0;i<how;i++){
//         console.log(i+' '+what);
        
//     }
// }
// print(10,'=^.^=')


// var double=function(num){
//     return alert(num*2);
     
// }

// // double(9)
// double(double(3))


//ДРАЗНИЛКИ С ИСП Ф-ЦИЙ

// var pickRandWords=function(words){
//     return words[Math.floor(Math.random()*words.length)]
// }

// var randBody=['спина','челюсть','локоть','ухо','нога',]
// var randAdjects=['какашечная','шлепачная','кудрявая','дурацкая',]
// var randWords=['живот','жопа','лапа','морда','хвост','туша']


// var randString=`У тебя ${pickRandWords(randBody)} cловно ${pickRandWords(randAdjects)} ${pickRandWords(randWords)}`

// console.log(randString);


// 2VARIANT
// var pickRandWords=function(words){          //СОЗДАЛИ Ф-Ю ДЛЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО ЧИСЛА ЛЮБОГО МАССИВА ИЛИ ДИАПАЗОНА
//     return words[Math.floor(Math.random()*words.length)]
// }

// var genRand=function(){                 //ДЛЯ ОБЛЕГЧЕНИЯ ГЕНЕРАЦИИ ДРАЗНИЛКИ,Т.Е. ЧТО БЫ НЕ КОПИРОВАТЬ ПОСТОЯННО ОДИН И ТОТ ЖЕ КОД
//     var randString=`У тебя ${pickRandWords(randBody)} cловно ${pickRandWords(randAdjects)} ${pickRandWords(randWords)}`
//     return randString
// }
// console.log(genRand());
// console.log(genRand());
// console.log(genRand());


// var fifthLet=function(name){
//     if(name.length<5){
//         return alert()
        
//     }
//     return alert('Пята буква твоего имени : '+name[4])
// }

// fifthLet('мат')


// var medalFor=function(score){
//     if(score<3){
//         return alert('Бронзовую медаль тебе')
//     }if(score<7){
//         return alert('Серебряную медаль тебе')
//     }
//         return alert('Золотую медаль тебе')
    
// }

// medalFor(2)


// function double(num){
//     return alert(2*num)
// }

// double(3)

//АДЖУМАНИЯ


//1
// function add(a,b){
//     return console.log(a+b);   
// }
// function multiply(c,d){
//     return c*d   
// }
// add(multiply(36325,9824),777)

//2
function areArrSame(a,b){
    if(a.length!==b.length){
        return  false
        
    }
    for(let i=0;i<a.length;i++){
    if(a[i]===b[i]){
        return true
    }
    return false
}}

alert(areArrSame([1,2,3],[5,2,3]))
alert(areArrSame([1,2,3],[1,2,3]))
alert(areArrSame([1,2,3],[1,2,3,4]))
