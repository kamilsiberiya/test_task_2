///дописать нормальный вывод


///переводить букву в цифру
function LitterToNamberal(Litter) {
  if ( 9 < parseInt(Litter, 18)) {
        return  parseInt(Litter, 18) % 9;
  }
alert("вы не правиль ввели клетку")
}
///переводить цифру в букву
function NamberalToLitter(Namberal) {
  var Litter;
  switch (Namberal) {
    case 1:Litter = "A";
      break;
    case 2:Litter = "B";
      break;
    case 3:Litter = "C";
      break;
    case 4:Litter = "D";
      break;
    case 5:Litter = "E";
      break;
    case 6:Litter = "F";
      break;
    case 7:Litter = "G";
      break;
    case 8:Litter = "H";
      break;
  }
  return Litter;
}
  var Moves=[];
function HorseMoves() {
  var NumberCell = document.getElementById("Cell").value;
  if (NumberCell.length < 2) {
  alert("введен 1 символ что не может быть клеткой на доске");
  return ;
  }
  if (NumberCell.length > 2) {
  alert("введено больше 2-х символов что не может быть клеткой на доске");
  return ;
  }
  var Letter = + LitterToNamberal(NumberCell[0]);
  var Numberal = + NumberCell[1];
  var InitialCell=[Letter,Numberal];
  ///проверка правильного ввода чисел
  if ((Numberal>8)||(Letter>8)) {
    alert("поле меньше введёного вами значения");
    return;
  }
  if (Numberal<1) {
    alert("вы не правиль ввели клетку");
    return;
  }
  if (Letter<1) {
    alert("вы не правиль ввели клетку");
    return ;
  }


  //вверхвниз вправовлево на 2
  for (var j = 0; j < 2; j++) {
  //вправовлево вверхвниз на 1
    for (var k = 0; k < 2; k++) {
  //по горизонтали или вертикали
      Moves[j*2 +k ] = [InitialCell[0] + 2- 4* j ,InitialCell[1] +1 - 2*k];
      Moves[4 +j*2 +k ] = [InitialCell[0]+1 - 2*k ,InitialCell[1]+ 2- 4* j];
    }
  }

alert(Moves);


  ///удаляем значения не прошедшие проверку
  for (var i = 0; i < 8; i++) {
    if ((Moves[i][0]>8)||(Moves[i][1] > 8)||(Moves[i][1]< 1)||(Moves[i][1] < 1)) {
      delete Moves[i];
    }
  }
    ///удалеям пустые
  Moves = Moves.filter(function(x) {
      return x !== undefined});
      ///конвертируем в буквы
  for (var i = 0; i < Moves.length; i++) {
    console.log(Moves);
    Moves[i][0]=NamberalToLitter(Moves[i][0]);
  }
    console.log(Moves);
//выводим значения
  alert(Moves);

}
