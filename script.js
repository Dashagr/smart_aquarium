      function fun() {
      var acidity = document.getElementById("ph").valueAsNumber;
      var oxidation = document.getElementById("oxid").valueAsNumber;
      var nitrites = document.getElementById("nitr").valueAsNumber;
      var carbonate = document.getElementById("carbon").valueAsNumber;

  var res;
  var q;
  q = Math.round((acidity*0.25 + oxidation*0.4 + nitrites*0.15 + carbonate*0.2)*100) / 10;
  k = Math.round((acidity*0.25 + oxidation*0.4 + nitrites*0.1 + carbonate*0.1)*100) / 10;

  if (acidity < 5 && oxidation < 5 && nitrites < 5 && carbonate < 5 ) {
    res = "<p class =\"text\">Це не найкращі умови для життя рибок!<br> Будь ласка, збільшість кислотність, окиснення, додайте карбонатну і калієву селітру!<br> </p>";
  } 
  else if (acidity > 4 && oxidation < 5 && nitrites < 5 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Це не найкращі умови для життя рибок. <br> Будь ласка, збільшість окиснення та додайте карбонатну і калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation > 4 && nitrites < 5 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Це не найкращі умови для життя рибок. <br> Будь ласка, збільшість кислотність та додайте карбонатну і калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
   else if (acidity < 5 && oxidation < 5 && nitrites > 4 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Це не найкращі умови для життя рибок. <br> Будь ласка, збільшість кислотність, окиснення та додайте калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation < 5 && nitrites < 5 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Це не найкращі умови для життя рибок. <br> Будь ласка, збільшість кислотність, окиснення та додайте карбонатну селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation > 4 && nitrites < 5 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, додайте карбонатну і калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation < 5 && nitrites > 4 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, збільшість рівень окиснення та додайте карбонатну і калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation < 5 && nitrites < 5 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, збільшість рівень окиснення та додайте карбонатну селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation > 4 && nitrites > 4 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, збільшість кислотність та додайте калієву селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation > 4 && nitrites < 5 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, збільшість кислотність та додайте карбонатну селітру! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation < 5 && nitrites > 4 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Зараз Вашим рибкам комфортно, але якість середовища можна покращити. <br> Будь ласка, збільшість кислотність та рівень окиснення! <br><br> </p> Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation > 4 && nitrites > 4 && carbonate < 5 )  
  {
    res = "<p class =\"text\">Чудово! Ваші рибки почуваються добре, але їм трохи не вистачає калієвої селітри. <br><br> </p>  Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation > 4 && nitrites < 5 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Чудово! Ваші рибки почуваються добре, але їм трохи не вистачає карбонатної селітри. <br><br> </p>  Придатність води:  " + q + "%";
  }
  else if (acidity > 4 && oxidation < 5 && nitrites > 4 && carbonate > 4 )  
  {
    res = "<p class =\"text\">Чудово! Ваші рибки почуваються добре, але їм трохи не вистачає окиснення. <br><br> </p>  Придатність води:  " + q + "%";
  }
  else if (acidity < 5 && oxidation > 4 && nitrites > 5 && carbonate > 5 )  
  {
    res = "<p class =\"text\">Чудово! Ваші рибки почуваються добре, але їм трохи не вистачає кислотності. <br><br> </p>  Придатність води:  " + q + "%";
  }
   else if (acidity > 4 && oxidation > 4 && nitrites > 4 && carbonate > 4 )  
  {
    res = "<p class =\"text\"> Зараз ідеальні умови для життя рибок! <br> <br></p> Придатність води:  " + q + "%";
  }
  else {
    res = "Ваші рибки почуваються добре, поки що їм усього достатньо." + q + "%";
  }

  if (nitrites > 8 && carbonate > 8){
     res = "Ваші рибки почуваються добре, нічого не додавайте. <br><br> </p>  Придатність води:  " + k + "%";
  }
  document.getElementById("result").innerHTML = res;
}