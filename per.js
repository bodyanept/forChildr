// var baloons=100
// baloons/=4
// // baloons=2
// console.log(baloons);


// var cWord1='контикул'
// var cWord2='баня'
// var cWord3='кирпич'
// var cWord4='лошадь'
// let word=cWord1[0]+cWord2[1]+cWord3[2]+cWord4[3]     //получим слово кара
// console.log(word);


// let longString='Эта длинная строка такая длинная'
// longString=longString.slice(3,18)           //получим просто длинная строка
// console.log(longString);


// let caps='че как оно?'
// caps=caps.toUpperCase()             //вывели текст загл буквами
// console.log(caps);  



// let downcaps='ЧЕ кАк ОнО?'
// downcaps=downcaps.toLowerCase()             //вывели текст строчными буквами
// downcaps=downcaps.slice(1)                  //удалили первую букву
// let firstB=downcaps[0].toUpperCase()        //первую букву оглавили
// downcaps=firstB+downcaps                    //первую заглавную букву вернули обратно

// let downcaps='чЕ кАк ОнО?'
// downcaps=downcaps[0].toUpperCase()+downcaps.slice(1).toLowerCase()          //оформили все в одной строке
// console.log(downcaps);  


                            //boolean

//&&-и
//||-или
//!-не
                        //&&
// var hadShower=true
// var hadBackpack=false
// var canGo=hadShower&&hadBackpack                //сравнение и вывод true or false
// console.log(canGo);                     //false тк одно из условий не выполнено


// var hadShower=true
// var hadBackpack=true
// var canGo=hadShower&&hadBackpack                //сравнение и вывод true or false
// console.log(canGo);                     //true тк условия выполнены

                    //||
// var apple=true
// var orange=false
// var get=apple||orange                 //или,рез-т будет true,тк одно из значений правдиво
// console.log(get);

// var apple=true
// var orange=true
// var get=apple||orange                   //true
// console.log(get);

// var apple=false
// var orange=false
// var get=apple||orange                   //false
// console.log(get);

                        //! НЕ

// var isHolyday=true
// var monday=!isHolyday                    //даст false,тк понедельник не выходной
// console.log(monday);

// var isHolyday=false
// var sunday=!isHolyday                    //даст true  ,тк воскресенье выходной
// console.log(sunday);


//совмещение булева

// var isHolyday=false
// var hadShower=true
// var apple=true
// var orange=false
// var res=!isHolyday&&hadShower&&(apple||orange)
// console.log(res);                                   //true,тк все условия значения выполненыц 

                // сравнения

// var a=140
// var b=100
// // var itog=a<b                    //false,тк а(140)не может быть меньше b(100)
// // var itog=a>b                        //true,тк а(140)больше b(100)
// // var itog=a>=b                    //true,тк а(140)больше или равно b(100)
// // var itog=a<=b                    //false,тк а(140)больше или равно b(100)
// var itog=a===b                    //false,тк а(140)не равен b(100)

// console.log(itog);


                // проверка равенства
// === - стройчайшее сравнение
// == - практическое сравнение

// var a=5
// var b='5'
// var c=5
// var d=6
// // var strog= a===b            //false,тк он заметил что мы сравниваем строку с числом    
// var strog= a===c               //true
// console.log(strog);
// // var pract= a==b            //true,тк он не обращает внимание что мы сравниваем строку с числом,главное что содержимое строки и число равны 
// var pract=b==d              //false    
// console.log(pract);



// var age=12                          //возраст ребенка
// var accompanied=false               //проверяем есть ли взрослый сопровождающий
// age=age>=12                     //проверяем есть ли посетителю 12 лет 
// var acces=age || accompanied                    //можно ли ему в кино
// console.log(acces);


                                //МАССИВЫ

// var dinosaurs=[
//     'Тиранозавр',
//     'Белоцираптор',
//     'Чиназавр',
//     'Пивозавр',
//     'Гарикозавр',
//     'Камилезавр',
//     'Полинозавр',
//     'Брахионзавр',
//     'Стегозавр',
// ]
// dinosaurs[0]='Тиранозавр Rex'               //изменение элемента
// console.log(dinosaurs[0]);                  //доступ к элементу
// console.log(dinosaurs);                     //доступ ко всему массиву


// var dinosaurs=['Шинаозавр']                    // создали пустой массив

// dinosaurs[0]='Тиранозавр'
// dinosaurs[1]='Белоцираптор'
// dinosaurs[2]='Чиназавр'          //внесли изменения в массив(создали новый элемент)
// dinosaurs[3]='Пивозавр'
// dinosaurs[44]='Завр'            //создали новый элемент,попутно создали 40 пустыx эл-тов 

// console.log(dinosaurs[39]);

// var dinoAndNum=[
//     3,
//     'Белоцираптор',
//     ['Чиназавр',
//     'Пивозавр',                     //создали в массиве еще один массив
//     'Гарикозавр',
//     43.2,],
//     10

// ]
// console.log(dinoAndNum);
// console.log(dinoAndNum[2]);         //обратились к массиву в массиве(выдаст внутренний массив)
// console.log(dinoAndNum[2][0]);         //обратились к элементу массива в массиве(выдаст чиназавр)

// var dlin=dinoAndNum.length          // создали переменную которая передает длину массива
// console.log(dinoAndNum[dlin-1]);        //вернули последний илемент

// console.log(dlin);


                                    // ДОБАВЛЕНИЕ ЭЛ-ТОВ В МАССИВ
                                    
// var animals=[]
// animals.push('Кот')
// animals.push('Пес')             //добавили эл-ты в конец в том порядке,котором написали
// animals.push('Пума')

// // console.log(animals);
// // console.log(animals.length);

// animals.unshift('monkey')            //добавили эл-т в начало

// // console.log(animals);
// // console.log(animals.length);

// animals.unshift('white bear')            //добавили эл-т в начало

// console.log(animals);
// console.log(animals.length);


                                    //УДАЛЕНИЕ ЭЛ-ТОВ В МАССИВ

// var animals=[
//     'Кот',
//     'Пес',
//     'Пума',
//     'monkey',
//     'white bear'
// ]
// console.log(animals);

// var lastDel=animals.pop()           //удаление последнего эл-та,и сохранение его в новой переменной 
// console.log(animals);

// animals.pop()           //удаление последнего эл-та
// console.log(animals);

// animals.unshift(lastDel)            //добавление эл-та спереди из переменной lastDel
// console.log(animals);

// animals.unshift(lastDel)            //добавление такого же эл-та спереди из переменной lastDel,тк pop запоминает только последнее удаление
// console.log(animals);

                            // метод shift
// var animals=[
//     'Кот',
//     'Пес',
//     'Пума',
//     'monkey',
//     'white bear'
// ]
// console.log(animals);

// var firstDel=animals.shift()           //удаление первого эл-та,и сохранение его в новой переменной 
// console.log(animals);


                        // ОБЪЕДИНЕНИЕ МАССИВОВ

// var firstList=[
//     'cat',
//     'dog',
//     'lama',
//     'beef',
// ]
// console.log(firstList);


// var secondList=[
//     'anaconda',
//     'uzh',
//     'shuka',
//     'yasherica',
// ]
// console.log(secondList);

// commonList=firstList.concat(secondList)
// console.log(commonList);                        //создали новый массив,в котором объединились два массива,в начало которого лег первый массив

// var fLetList=['a','b','c','d','e',]
// var sLetList=['f','g','h','i','j',]
// var numberList=['1','2','3','4','5',]

// var commonList=fLetList.concat(sLetList,numberList)         //создание нов масс,с добавл нескольких др масс-в 
// console.log(commonList);


                // ПОИСК ЭЛ-ТА В МАССИВЕ

// var clrs=['red','green','blue',]

// console.log(clrs.indexOf('red'));           //ПОИСК ПО СОДЕРЖАНИЮ ИНДЕКСА(0)
// console.log(clrs.indexOf('blue'));           //ПОИСК ПО СОДЕРЖАНИЮ ИНДКЕСА(2)
// console.log(clrs[2]);           //ПОИСК ПО ИНДЕКСУ[2](blue)

// console.log(clrs.indexOf('blueviolet'));           //ПОКАЖЕТ -1,ТК ТАКОГО ЭЛ-ТА НЕ СУЩЕСТВУЕТ


                    // МАССИВ В СТРОКУ

// var clrs=['red','green','blue',]
// console.log(clrs.join());                   //ОБЕРНУЛ В СТРОКУ(ПО УМАЛЧАНИЮ РАЗДЕЛИТЕЛЬ-',')
// console.log(clrs.join('-'));                   //ОБЕРНУЛ В СТРОКУ(C РАЗДЕЛИТЕЛEM- '-')
// console.log(clrs.join('*'));                   //ОБЕРНУЛ В СТРОКУ(C РАЗДЕЛИТЕЛEM- '*')

// var fullName=['Ivanov','Ivan','Ivanovich',]
// console.log(fullName.join(' '));                //ОБЕРНУЛ В СТРОКУ(C РАЗДЕЛИТЕЛEM- '*ПРОБЕЛ*')


// var roadHome=[]
// roadHome.push('my home')                    //СТАЛ ПЕРВЫМ[0]
// roadHome.push('road to home')
// roadHome.push('my school')
// roadHome.push('flickering lantern')
// roadHome.push('cats home')
// roadHome.push('friends home')               //ТЕПЕРЬ ПОСЛЕДНИЙ ЭЛ-Т
// console.log(roadHome);

// // roadHome.pop()              //УДАЛИЛИ friends home
// console.log(roadHome);

// // roadHome.pop()              //УДАЛИЛИ cats home И ТД
// // console.log(roadHome);


                // СЛУЧАЙНЫЙ ВЫБОР

// console.log(Math.random());                 //ПО УМОЛЧАНИЮ ДИАПАЗОН ЧИСЕЛ ОТ 0 ДО 1
// console.log(Math.random()*10);                 //ДИАПАЗОН ЧИСЕЛ ОТ 0 ДО 10
// console.log(Math.random()*3);                 //ДИАПАЗОН ЧИСЕЛ ОТ 0 ДО 3


//                 // ОКРУГЛЕНИЕ

// console.log(Math.floor(3.9283659));             //ОКРУГЛЕНИЕ ДО ЦЕЛОГО ЧИСЛА В НАИМЕНЬШУЮ СТОРОНУ

// console.log(Math.floor(Math.random()*7));             //ОКРУГЛЕНИЕ РАНДО-ГО ЧИСЛА



// var clrs=['red','green','blue','lightblue']

// var randInd=Math.floor(Math.random()*4)             //ПОИСК РАНД ИНДЕКСА
// console.log(clrs[randInd]);                         //ВЫВЩВ ЭЛ-ТА МАССИВА С РАНДОМНЫМ ИНД-СА


                        // ГЕНЕРАТОР СЛУЙЧАЙНЫХ ДРАЗНИЛОК

// var randBodys=['спина','челюсть','походка',]
// var randAdjects=['какашечная','шлепачная','кудрявая','дурацкая',]
// var randWords=['чувырла','конарейка','крыса','курица','ябида','корица']

// // var randBody=randBodys[Math.floor(Math.random()*3)]          // УМНОЖИЛИ НА ПОДСЧИТАННОЕ ВРУЧНУЮ ЧИСЛО   
// var randBody=randBodys[Math.floor(Math.random()*randBodys.length)]          // УМНОЖИЛИ НА АВТОМАТИЧЕСКИ ПОДСЧИТАННОЕ  ЧИСЛО (ДЛИНУ МАССИВА)  
// var randAdject=randAdjects[Math.floor(Math.random()*4)]          
// var randWord=randWords[Math.floor(Math.random()*6)]
// var res='У тебя '+randBody+' словно '+randAdject+' '+randWord +'!!!'        //ПЕРВЫЙ СПОСОБ
// var res2=['У тебя',randBody,'словно',randAdject,randWord,'!!!'].join(' ')        //2 СПОСОБ
// console.log(res);
// console.log(res2);
             
                        //task
                        // 2 ГЕНЕРАТОР СЛУЙЧАЙНЫХ ДРАЗНИЛОК


// var randBodys=['спина','челюсть','локоть','ухо','нога',]
// var randAdjects=['какашечная','шлепачная','кудрявая','дурацкая',]
// var randWords=['живот','жопа','лапа','морда','хвост','туша']
// var randAnimals=['чувырлы','конарейки','крысы','курицы','ябиды','корицы']


// var randBody=randBodys[Math.floor(Math.random()*randBodys.length)]
// var randAdject=randAdjects[Math.floor(Math.random()*randAdjects.length)]          
// var randWord=randWords[Math.floor(Math.random()*randWords.length)]
// var randAnimal=randAnimals[Math.floor(Math.random()*randAnimals.length)]
// var res='У тебя '+randBody+' еще более '+randAdject+' чем '+randWord +' у '+randAnimal+' !!!'        //ПЕРВЫЙ СПОСОБ

// var res2=['У тебя',randBody,'еще более',randAdject,'чем',randWord,'y',randAnimal].join(' ')
// console.log(res);


// var jn=[3,2,1]
// var inv=jn.join(' больше,чем ')
// console.log(inv);


                                //ОБЪКТЫ

// var cat={
//     legs:4,                 //КЛЮЧ:ЗНАЧЕНИЕ
//     name:'Гарик',
//     color:'тигровый',
// }
// cat['age']='3 month'                //ДОБАВИЛИ ЭЛЕМЕНТ
// cat.lastName='Krasilnikov'          //ДОБАВИЛИ ЭЛЕМЕНТ(2 СПОСОБ)
// console.log(cat);          
// console.log(Object.keys(cat));          //ВЫЗВАЛИ КЛЮЧИ ОБЪЕКТА

                                //ОБЪКТЫ В МАССИВЕ

// var dino=[
//     {name:'тиро рекс',period:'Верхнемеловой'},
//     {name:'стего',period:'Верхнеюркский'},
//     {name:'плате',period:'триасовый'},
// ]
// console.log(dino[0]);               //ВЫЗВАЛИ 1 ЭЛ-Т МАССИВА
// console.log(dino[0]['name']);               //ВЫЗВАЛИ ЗНАЧЕНИЕ ЧЕРЕЗ КЛЮЧ 1 ЭЛ-ТА ИЗ МАССИВА
// console.log(dino[1].period);   //ВЫЗВАЛИ ЗНАЧЕНИЕ ЧЕРЕЗ КЛЮЧ 1 ЭЛ-ТА ИЗ МАССИВА(2СПОСОБ)

                                //МАССИВЫ В ОБЪКТАХ


// var anna ={name:'Аня',age:22,luckyNum:[2,6,9,30]}
// var rus ={name:'Руслан',age:36,luckyNum:[4,5,8,0]}
// var andr ={name:'Андрюха',age:54,luckyNum:[11,23,3]}

// var friends=[anna,rus,andr]         //ЗАСУНУЛИ ОБЪ-ТЫ В МАССИВ

// console.log(friends);
// console.log(friends[0].luckyNum);       //ВЫЗВАЛИ МАССИВ ИЗ ОБЪЕКТА В МАССИВЕ
// console.log(friends[0].luckyNum[1]);       //ВЫЗВАЛИ 2 ЭЛЕМЕНТ МАССИВА ИЗ ОБЪЕКТА В МАССИВЕ


                                // УЧЕТ ДОЛГОВ

// var owedMoney={}

// owedMoney.Джимми=5
// owedMoney.Джимми+=3                     //ОБНОВИЛИ ДАННЫЕ
// owedMoney.Анна=9
// owedMoney.Коля=7
// owedMoney.Самат=300
// console.log(owedMoney);


                                //ОБЪКТЫ В ОБЪЕКТЕ


// var movies={
//     'В поисках Немо':{
//         realise:2003,
//         duration:100,
//         actors:['albert','ellen','alex'],
//         format:'webRip'
//     },
//     'Поймай меня,если сможешь':{
//         realise:2002,
//         duration:141,
//         actors:['лео','том','эми'],
//         format:'webRip'
//     },
//     'Гарри Поттер и кубок огня':{
//         realise:2005,
//         duration:100,
//         actors:['данил','роберт гринт','эмилия уотсон'],
//         format:'webRip'
//     },
// }

// console.log(movies['Поймай меня,если сможешь'].actors);//ВЫЗВАЛИ ЭЛ-Т ОБЪЕКТА ИЗ ОБЪЕКТА
// console.log(movies['Гарри Поттер и кубок огня'].duration);


// var findNemo=movies['В поисках Немо']//ВЫЗВАЛИ ЭЛ-Т ОБЪЕКТА ИЗ ОБЪЕКТА 2 СПОСОБ

// console.log(findNemo.realise);


                            //ДОБАВЛЕНИЕ НОВОГО ОБЪЕКТА В ОБЪЕКТ

// var cars={
//     realise:2006,
//     duration:117,                       //СОЗДАЛИ ОБЪЕКТ
//     actors:['олег уилсон','борис хант','паша ньюман'],
//     format:'webRip'    
// }
// movies['Тачки']=cars        //СОЗДАЛИ КЛЮЧ И ПРИСВОИЛИ К НЕМУ НОВОЕ ЗНАЧЕНИЕ

// console.log(movies);




// var trains={
//     bodya:1,
//     danik:2,
//     samat:1
// }
// trains.bodya+=1
// trains.danik+=0
// trains.samat+=1
// console.log(trains);


// var unusualObj={
//     name:'crazy obj',
//     someArr:[7,9,{purpose:'путаница',mum:123},3.3],
//     randAnimal:'Bananas aculas'
// }

// var numb=unusualObj.someArr[2].mum
// console.log(numb);


            //УСЛОВИЯ И ЦИКЛЫ


                //УСЛОВИЕ IF

// var names='Ник'
// console.log('Привет '+names);
// if(names.length>6){              //ВЫПОЛНИТСЯ ЕСЛИ УСЛОВИЕ ИСТИННО
//     console.log('ну и линющее же у вас имя');  
// }else{
//     console.log('да ты ваще красавчик');
    
// }


// var chicken=true
// var pork=false
// var beef=false
// if(chicken){
//     console.log('Я буду курцу');  
// }else if(pork){
//     console.log('я буду свинину');
// }else if(beef){
//     console.log('я буду говядину');
// }else{
//     console.log('ну че,остается только хлеб с солью');   
// }

// var name='Body'
// var mama='Nat'
// var papa='Yur'
// if(name==='Bodya'){
//     console.log('Привет '+name);
    
// }else if(mama==='Nata'){
//     console.log('Привет тетя '+mama)
    
// }else if(papa==='Yura'){
    
//     console.log('Привет дядя '+papa);
// }



                        //ЦИКЛЫ WHILE

// var sheeps=0
// while(sheeps<=10){          //БУДЕТ ПОВТОРЯТЬСЯ ПОКА УСЛОВИЕ НЕ СТАНЕТ FALSE
//     console.log('овец насчитано: '+sheeps);
//     sheeps++
// }
// console.log('hrrrrrrrrr-pssssssss');


                        //ЦИКЛЫ FOR

// var timeHi=3
// for(let i=0;i<timeHi;i++){
//     console.log('salam');
    
// }

// var animals=[
//     'lion','tiger','white bear','mister pin','anaconda'
// ]
// for(let i=0;i<animals.length;i++){
//     console.log('в этом зоопарке есть '+animals[i]);
    
// }

// for (let x = 3;x<10000;x=x*3){
//     console.log(x);
    
// }
// var x=1
// while(x<10000){
//     console.log(x*=3); 
// }


// var animals=[
//     'lion','tiger','white bear','mister pin','anaconda'
// ]
// for(let i=0;i<animals.length;i++){
//     animals[i]+='-beautifull animal'
//     console.log(animals[i]);
    
// }
// console.log(animals);


// var alph='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
// let rand=[]
// var randa=Math.floor(Math.random()*alph.length)
// rand[0]=Math.floor(Math.random()*alph.length)
// rand[1]=Math.floor(Math.random()*alph.length)
// rand[2]=Math.floor(Math.random()*alph.length)
// rand[3]=Math.floor(Math.random()*alph.length)
// rand[4]=Math.floor(Math.random()*alph.length)
// rand[5]=Math.floor(Math.random()*alph.length)
// var string=''
// for(let i=0;i<6;i++){
//     string+=alph[rand[i]]
// }

// console.log(string);
//stopped on 108


//task3

// let input='shlopa epta'
// let output=''
// for(let i=0;i<input.length;i++){
//     if(input[i]=='a'){
//        output+=4
        
//     }else if(input[i]=='e'){
//         output+=3
//     }else if(input[i]=='o'){
//         output+=0
//     }else if(input[i]=='i'){
//         output+=1
//     }else{

//         output+=input[i]
//     }
// }
// console.log(output);


