// Writed by GwParSa - https://GitHub.com/GwParSa - Lang: Persian - Finglish

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
  /* hamchenin mitavanid az / va * estefade konid */








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

  //ravesh haye esmgozari: 1.camel case 2.snake case 3.kebab case 4.pascal case
  //camel case: 
  // esm haii ke 2 bakhshi hastan, aval harf bakhsh dovom ra be soorat Uppercase minevisim:
    let lastName;
    let firstName;
  //snake case:
  // har vaght esm ma 2 bakhsh dasht bein an ha underscore ( _ ) gharar midahim:
    let last_name;
  //pascal case:
  // mesl camel case ama harf haye aval har 2 bakhsh UpperCase neveshte mishavand:
    let LastName;
    let FirstName;
  // behtar ast bishtar az camel case estefade shavad.

  //Rules:
  // dar variables ha nmitavanim az name haye zir estefade konim:
    var 1test ="test"; // ba adad shoru nmishavand.
    var test-test ="test"; // nmitavan beyn name az hyphen ( - ) estefade kard.
    var test test ="test"; // nmitavan az space bein name estefade kard.
    var new ="test"; // nmitavan az keyword haye js baraye name estefade kard.
  // mitavanid az $ ya _ baraye esm variable khod estefade konid.( saii konid aval esm ha gharar dahid )
    let $name;
    let _name;
  // js yek zaban case sensetive ast. yani be bozorgi ya kochiki horoof hasas ast:
    var name ="";
    var Name ="";
    var nAme ="";
    var Myname ="";
    var MyName ="";
    var myName ="";  // ...
  // mitavan do moteghaier ra ba ham jam kard va an ra be moteghaier jadidi ezafe kard :
    var mynum = 6 ;
    var myNum = 5 ; 
    var plus = mynum * myNum ; //  = 30
  //vaghti adadi ra dar "" minevisim dar vaghe an adad string ast na number:
    var notNum = "5";
    var newNum = 10;
      newNum + notNum; // = "105"

  //Update: Dar ES5 ma az var estefade mikardim ama baad az ES6 behtare az let va const estefade beshe.
    let name = 'parsa'; // let variableii ast ke mitavan dat tool porozhe meghdar an ra taghir dad.
    const lastname = 'sorsori'; // const mokhafaf constant be maani sabet ast va meqdar an ra nmishavad taghir dad.
  
  // agar dar ebteda be in do variable meghdar nadahim che mishavad?
    const surname; // error khahad khord! hatman bayad dar ebteda meqdar dehi shavad.
    let age; // mitavan baadan be an meqdar dad va moshkeli nadarad.

  // che zamani az let va key az const estefade konim?
  // be soorat default hatman az const estefade konim. magar inke bekhaiim meqdar variable ra taghir dahim. chera? 1. rahat boodan dar khoondan code 2. amniat bishtari darad, kase digari nmitavanad data haye dakhel const ra taghir dahad 3. speed motor haye js baraye run krdn const bishtar ast.











// Data Types:      
  // variable ha anvae mokhtalefi darand manand Number, String, undefined, Object etc
    var mynum = 3; //Number, fargh nmikone adad Integer ( adad haye sahih ) ya Float ( adad haye ashari ) bashe.
    let mynum2 = 1.45;
    var mystring = "hello"; //String, mohem nist baraye string ha az "" ya '' estefade konim (hardo yeksan hastand). ama baraye inke be moshkel grammeri nakhorim behtare az "" estefade beshe.
    let myundefined; // Undefined, meghdar dehi nashode.
    const mynull = null; // Null, meghdar dehi shode ama null yani hich ya pooch.
    var isFinished = true; //Boolean, saii konim variable haii ke meqdar boolean darand dar esm ba is ya are shoroo konim. ex: let isDone = true; ya const areGone = false; . hamchenin 0, null, undefined, NaN dar boolean ha be manaye false hastand.
    const courses = ["JS Course", 15, true]; //Array, dar dakhel arrey baghie data type ha ham mitavanand gharar begirand va ba , az ham joda mishavand.
    const jsCourse = {fullName: "JavaScript Course", courseHours: 35, episodes: 100}; //Object, data haye mokhtalef yek chiz ra dar object gharar midahim. masalan inja data haye js course mesl saat amoozesh ya modares course va ... ra gharar dadim.

  // mitavan ba method typeof noe variables ha ra peyda konim:
    typeof mynum; //Number
    typeof mystring; //String
    typeof myundefined; //Undefined
    typeof isFinished; //Boolean (true or false)
    typeof mynull; //Object
    typeof jsCourse; //Object
    typeof courses; //Object
  // in method array va null ra ham object neshan midahad!
  // in method yek noe Oprator ast.
    









    
// Oprators:
  //oprator ha shamel symbol hayi hastand ke harkodam amaliat mokhtalefi ra shekl midahand, mesl: = , == , >< , + , - , / etc.

  //Arithmetic Operators (amalgar riazi): +  -  *  /  **  ++  --  %
  //baraye be tavan resadan adad x ba adad y az ( ** ) estefade mikonim. ex: x ** y --> x be tavan y.
  //baraye ezafe kardan yek vahed be yek variable mitavanim ++ be an variable ezafe konim. ex: x++; . baraye kam kardan yek vahed ham az -- estefade mikonim. ex: x--; .

  //Assignment Oprators (amalgar haye entesabi): 
  //
  








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
    if (myNum === notNum) {} // false...
  










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
<<<<<<< HEAD
  // gahhi oghat ma mikhahim meghdari az code hara be tor modavem ejra konim ta be javab akhar beresad, gahi oghat niaz darim ta enghadr yek statement tekrar shavad ta be javab beresad.
  // marsoom tarin halat loops dar js be vasile for anjam mishavad
    for(var i = 0; i < 10; i++){
        //code haye in ghesmat darsoorati ke shart bala yani ta zamani ke i koochek tar az 10 bashad, in code ejra mishavad.
      console.log(i);
    }

  //
=======
  
>>>>>>> 528444155155b8fa7069efb75e8a3c5af50a7b4c
