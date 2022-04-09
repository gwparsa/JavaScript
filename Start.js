// Writed by GwParSa - https://GitHub.com/GwParSa - Lang: Persian

// Introduction:
  // JS is most popular programming language. it is the language of the web and now well beyond the web. also, we can use JS in robots, gaming etc as well. but JS is a native web programming language.


// Story of JS:
  // dar sal 1995 avalin version js dar 10 rooz be vasile Brandon Eich tarahi shod. in zaban ebteda Mocha nam dasht va sepas be JavaScript taghir peyda kard.
  // hamchenin dar saal haye aval js shakhsi be nam Douglas Crockford be pishraft in zaban komak kard va dar mored an ketabi ba nam JavaScript:The Good Parts nevesht.


// JavaScript Versions:
  // ECMA : Europen Computer Manfacture Association ya haman anjoman tolid computer europa ast ke version haye standard ziadi baraye JS montasher kard:
  // ECMAscript1 -> in 1997
  // ECMAscript2 -> never released!
  // ECMAscript3 -> in 1999
  // ECMAscript4 -> never released!
  // ECMAscript5 -> in 2009 and become king of the Web
  // ECMAscript6 -> in 2015 and become the most popular version (ES6)
  // ECMAscript7 -> in 2016
  // ECMAscript8 -> in 2017
  // ECMAscript9 -> in 2018


// Comment:
  // mitavan yek comment baraye tozihat ba // dar aval khat sakht.
  /* hamchenin agar comment shoma toolani ast
   ya agar mikhahid in comment ra dar chand khat benevisid
   mitavanid az / va * estefade konid */

//Notes:
  // ba estefade az method time mitavan zaman be anjam residan an dastoor ra did : 
    console.time("hello my friend!")
    

// Variables:
  // variables are like containers that hold somthing temporarily.
  //Anatomy:
    var chesse = "yummy";
    var age = 25;
  // yummy baraye cheese be soorat movaghat taarif shode.
  // dar mesal dovom addad 25 dar quotes("") gharar nagerefte chon yek adad ast va adad ha dar JS taarif shde hastand ama kalamat kheyr!

  // dar variables ha nmitavanim az name haye zir estefade konim:
    var 1test ="test"; // ba adad shoru nmishavand.
    var $test ="test"; // ba alamat haye %^&$ etc shoru nmishavand.
    var test-test ="test"; // nmitavan beyn name az - estefade kard.
    var test test ="test"; // nmitavan az space bein name estefade kard.
    var new ="test"; // nmitavan az keyword haye js baraye name estefade kard.
  // bozorgi va choochaki dar name var mohem ast va ba ham motefavet hastand:
    var name ="";
    var Name ="";
    var nAme ="";
    var Myname ="";
    var MyName ="";
    var myName ="";  // ...
  // nokat :
  // mitavan do moteghaier ra ba ham jam kard va an ra be moteghaier jadidi ezafe kard :
    var mynum = 6 ;
    var myNum = 5 ; 
    var plus = mynum * myNum ; //  = 30
  //vaghti adadi ra dar "" minevisim dar vaghe an adad string ast na number:
    var notNum = "5";
    var newNum = 10;
      newNum + notNum; // = "105"
  // variable ha anvae mokhtalefi darand manand Number, String, undefined, Object etc
  // mitavan ba method typeof noe var ra peyda konim:
    var mynum = 3;
    var mystring = "hello";
    var myundefined;
    var myobject = null;
    var myboolean = true;
    typeof(mynum); // number
    typeof(mystring); // string
    typeof(myundefined); // undefined
    typeof(myobject); // Object
    typeof(myboolean); // boolean (true or false)
  // mohem nist baraye string ha az "" ya '' estefade konim (hardo yeksan hastand)


// Arrays :
  //array ha manand var ha hastand ama mitavan dar array meghdar bishtari data negahdari kard. manand yek container ke dar an data mirizim.
  // mitavan be 2 ravesh array hara sakht :
    var colors = new Array("red", "green", "blue");
    var colors = ["red", "green", "blue"];
  // array ha az adad 0 shoru mishavad pas dar bala "red" element 0 ma ast.
    colors.length; //ama agar ba in code bekhahim tedad element ha ra daryaft konim in adad fargh va 3 hast.
  // ma mitavanim hame noe data ra dar array gharar dahim.
  // hamchenin mitavanim dar array ha array koochek tari ham dashte bashim:
    var vehicles = [ "ford", ["fiesta", "mitso"], "lambo" ]
  // mitavan ba method push yek element ra be array ezafe kard :
    vehicles.push("pride");
  // hamchenin mitavan ba estefade az method splice yek element ra  az array remove kard :
    vehicles.splice(1,1); // element shomare 1 delete khahad shod.
  // mitavan ba method sort yek array ra be soorat horoof alefba chid:
    vehicles.sort();
  // agar bekhahim akharin onsor array ra peyda konim az method at estefade mikonim:
    var last = colors.at(-1);
  

// Oprators, Booleans and Selections :
  //oprator ha shamel symbol hayi hastand ke harkodam amaliat mokhtalefi ra shekl midahand, mesl: = , == , >< , + , - , / va ... 
  //Boolean ha be noei data gofte mishavad ke ya true ast ya false ! pas meghdar dataye boolean ha true , false ast. hamchenin 0, null, undefined, NaN dar boolean ha be manaye false hastand.
  //dar selection ma mitavanim baraye boolean ha shart true ya false bogzarim etc..


//Comparing Values: 
  //Dar JS == be manaye "mesle.." ast yani dar shorut agar bein do variable in oprator ra bogzarim be manaye yeksan boodan anha ast:
    if (myNum == otherNum) {}
  //hamchenin != be manaye gheir yeksan boodan an do variable ast :
    if (myNum != otherNum) {}
  //hamchenin < ya > be manaye bozorg tar ya koochik tar boodan value yek variable ast (bishtar dar number ha estefade mishavad):
    if (myNum > otherNum) {}
    if (myNum < otherNum) {}
  // **Type Coercion: vaghti do variable ba value haye gheir ham noe masalan string va number dar shorut ba == test mishavand, test an true ast zira dar in statement noe value mohem nmibashad balke khode value mohem ast:
    var myNum = 5;
    var notNum = "5";
    if (myNum == notNum) {} // true...
  //Dar ES5 (2009) oprator === be JS add shod, ke baraks mored bala amal mikonad va noe value ham baraye in oprator mohem ast:
    var myNum = 5;
    var notNum = "5";
    if (myNum == notNum) {} // false...
  

//Else If:zamani ke ma yek statement sharti darim az if va else estefade mikonim ama agar bekhahim shart ma option haye bishtari dashte bashad mitavan da bein if va else yek Else If gharar dad: 
  var colors = ['blue', 'red', 'green', 'yellow'];
  var selectedColor = colors[1]; // Dar inja yeki az rang haye colors ro entekhab va dar statement paiin mikhahim peydayash konim:

  if (selectedColor == colors[0]) {
    console.log("rang entekhabi: " + colors[0]);
  } else if(selectedColor == colors[1]) {
    console.log("rang entekhabi: " + colors[1]);
  } else if(selectedColor == colors[2]) {
    console.log("rang entekhabi: " + colors[2]);
  } else {
    console.log("rang entekhabi: " + colors[3]);
  }
  

//Switch:
  //gahi oghat shart haye ma be ghadri ziad ast ke nmitavanim az if va else estefade konim pas mitavanim az switch statement estefade konim :
  switch(selectedColor){
      case colors[0]: console.log("rang shoma: " + colors[0]); break; //baraye inke vaghti statement ma yek javab true gereft az kol statement kharej beshe va dobare amal tekrar nashe az break; estefade mikonim.
      case colors[1]: console.log("rang shoma: " + colors[1]); break;
      case colors[2]: console.log("rang shoma: " + colors[2]); break;
      case colors[3]: console.log("rang shoma: " + colors[3]); break;
    default: console.log("Rang shoma dar in list nist !"); // zamani ke shart ma dar statement vojud nadashte bashe be soorat default in khat code ejra mishe. 
  }


// && and || oprators:
  // vaghti bekhahim dar statement haye sharti bekhahim do variable ro check konim ke bebinim aya har do true hastand, bein anha && gharar midahim:
    var goodmood = true;
    var gotsleep = true;

    if(goodmood && gotsleep) {
      console.log("emrooz rooz khoobie ;)")
    } else {
      console.log("emrooz halam khosh nist ;(")
    }

  //ama agar bekhahim bebinim ke aya hata yeki az anha true ast, bayad az || dar beineshan estefade konim:
    var goodmood = true;
    var gotsleep = true;
    var breakfast = false;

    if(goodmood || gotsleep || breakfast) { //faghad breakfast false ast ama do mored digar true hastand.
      console.log("emrooz rooz khoobie ;)")
    } else {
      console.log("emrooz halam khosh nist ;(")
    }


//Loops:
  