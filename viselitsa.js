// let q=confirm('Тебе нравятся кощки?')
// if(q){
//     console.log('Ты молодец!Тебе нравятся кошки!');
    
// }else{
//     console.log('ты все равно красавчик!');
    
// }

// Выбрать случайное слово
//     слово не угадано{
//         показать игроку текущее состояние игры
//         Запросить у игрока вариант ответа
//     игрок хочет выйти из игры{
//         выйти из игры
//     }
//         вариант ответа-не одиночная буква{
//             сообщить игроку что нужна буква
//         }
//         {
//             такая буква есть в слове{
//                 Обновить состояние игры,подставив новую букву
//             }
//         }
//     }
//     поздравить игрока с победой


var words=[             //СОЗДАЛИ МАССИВ СО СЛОВАМИ
    'оладушек',
    'апельсин',
    'корица',
    'котик'
]

var word=words[Math.floor(Math.random()*words.length)]             //ВЫБИРАЕМ РАНДОМНОЕ СЛОВО ИЗ МАССИВА ВЫШЕ

var answerArr=[]            //СОЗДАЛИ МАССИВ ДЛЯ ВВОДА ОТВЕТА
for(let i=0;i<word.length;i++){
    answerArr[i]='_ ';          //ЗАШИФРОВАЛИ ПОПАВШЕЕСЯ СЛОВО
    
}
var remainingLetters=word.length            //ОСТАВШИЕСЯ БУКВЫ



// ОПИСАНИЕ ЦИКЛА
// while(remainingLetters>0){
//     ОСНОВНОЙ КОД
//     ПОКАЗЫВАЕМ СОСТОЯНИЕ ИГРЫ
//     ЗАПРАШИВАЕМ ВАРИАНТ ОТВЕТА
//     ОБНОВЛЯЕМ answerArr и remainingLetters ДЛЯ КАЖДОГО ВХОЖДЕНИЯ УГАДАННОЙ БУКВЫ
// }


while(remainingLetters>0){
    
    alert(answerArr.join(''))
    var quess=prompt('угадай букву или тык "отмена" ')
    if(quess==null){
        break               //ПРОПИСАЛИ УСЛОВИЕ ДЛЯ ВЫХОДА ИЗ ИГРЫ
    }else if( quess.length!==1){
        alert('для ввода допускается не больше одной буквы')               //ПРОПИСАЛИ УСЛОВИЕ ДЛЯ НЕДОПУЩЕНИЯ ВВОДА БОЛЕЕ ОДНОГО СИМВОЛА
    }else{
        for(let j=0;j<word.length;j++){
            if(word[j]===quess){
                answerArr[j]=quess
                remainingLetters--
            }
        }
    }
}
alert('Ура ты отгадал слово '+ answerArr.join +'!!!')
