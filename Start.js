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
    console.time("hello my friend!");
    









//Shortcuts:
// ctrl + enter --> raftan be khat baad dar vasat line ha bedoon beham rikhtan line ghabli.
// alt + arrow down or up --> ja be ja kardan yek line dar bein baghie line ha.
// ctrl + / --> comment kardan kol text haii ke select kardim.
// alt + click --> ghabeliat neveshtan dar chand line hamzaman.









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
    //var 1test ="test"; // ba adad shoru nmishavand.
    //var test-test ="test"; // nmitavan beyn name az hyphen ( - ) estefade kard.
    //var test test ="test"; // nmitavan az space bein name estefade kard.
    //var new ="test"; // nmitavan az keyword haye js baraye name estefade kard.
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
    //const surname; // error khahad khord! hatman bayad dar ebteda meqdar dehi shavad.
    let age; // mitavan baadan be an meqdar dad va moshkeli nadarad.

  // che zamani az let va key az const estefade konim?
  // be soorat default hatman az const estefade konim. magar inke bekhaiim meqdar variable ra taghir dahim. chera? 1. rahat boodan dar khoondan code 2. amniat bishtari darad, kase digari nmitavanad data haye dakhel const ra taghir dahad 3. speed motor haye js baraye run krdn const bishtar ast.











// Data Types:      
  // variable ha anvae mokhtalefi darand manand Number, String, undefined, Object etc
    var mynum = 3; //Number, fargh nmikone adad Integer ( adad haye sahih ) ya Float ( adad haye ashari ) bashe.
    let mynum2 = 1.45;
    var mystring = "hello"; //String, mohem nist baraye string ha az "" ya '' estefade konim (hardo yeksan hastand). ama baraye inke be moshkel grammeri nakhorim behtare az "" estefade beshe.
    let myundefined; // Undefined, meghdar dehi nashode.
    const mynull = null; // Null, meghdar dehi shode ama null yani hich ya pooch. baraye reset krdan meqdar yek variable estefade mishavad. masalan vaghti bekhaiim meqdar ghabli yek variable ra pak konim an ra null gharar midahim.
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
  //agar dar jaii chand amalgar hesabi kenar ham dashte bashim, js midanad ke kodam amalgar ra aval hesab konad. mesl amaliat riazi ke aval zarb anjam mishavad va baad jam o tafrigh.


  //Assignment Operators (amalgar entesabi): =  +=  -=  *= /=  %=  **=
  //ba estefade az = meqdar haye mokhtalef ra be variable haye mokhtalef assign mikonim.
  //hamantor ke dar amalgar haye riazi ++ ya -- dashtim mitavanim baraye ezafe krdn yek vahed be variable az += ya -= ya *= ya /= ya %= ham estefade kard(ravesh behtari ast).


  //Comparison Operators (amalgar moqayeseii): ==  !=  ===  !==  >  <  >=  <=
  //Be soorat boolean(true ya false) Khorooji midahad.
  //Az == baraye moqayese meqdar haye 2 variable estefade mishavad. ex: (x=5 == y=6) --> false. va baraks mitavanim az != baraye moqayese inke meqdar 2 variable barabar nabashand estefade konim. ex: (x=5 != y=6) --> true.
  //Az === baraye Moqayese type meqdar 2 variable estefade mikonim. ex: (x=5 === y=6) --> true. baraye moqayese barabar naboodan ham az !== estefade mikonim. ex: (x=5 !== y="6") --> true. in amalgar dar ES5 ( 2009 ) ezafe shod.
  //saii konim bishtar az === va !== estefade konim. 

  
  //Logical Operators (amalgar manteghi): ||(or)  &&(and)  !(not)
  //Be soorat boolean(true ya false) Khorooji midahad.
  //Dar && har 2 statement bayad true bashand ta khorooji true bashad. ex: console.log(true && true) --> true.
  //Dar || agar yeki az 2 statement ha true bashad khorooji true khahad bood va niazi nist ke hame statement ha true bashand. ex: console.log(true || false) --> true.
  //Agar dar ebtedaye har statement ! bogzarim, khorooji an statement ra manfi ya baraks mikonad. ex: console.log(!true) --> false.
  // vaghti bekhahim dar statement haye sharti bekhahim do variable ro check konim ke bebinim aya har do true hastand, bein anha && gharar midahim:
  var goodmood = true;
  var gotsleep = true;
  if(goodmood && gotsleep) {
    console.log("emrooz rooz khoobie ;)") //--> khorooji
  } else {
    console.log("emrooz halam khosh nist ;(")
  }
  //ama agar bekhahim bebinim ke aya hata yeki az anha true ast, bayad az || dar beineshan estefade konim:
  var goodmood = true;
  var gotsleep = true;
  var breakfast = false;
  if(goodmood || gotsleep || breakfast) { //faghad breakfast false ast ama do mored digar true hastand.
    console.log("emrooz rooz khoobie ;)") //--> khorooji
  } else {
    console.log("emrooz halam khosh nist ;(")
  }


  //String Operator (amalgar reshteii): +
  //Az + baraye chasbandan string ha estefade mikonim. ex: console.log("Parsa" + " " + "Sorsori") --> Parsa Sorsori.


  //Unary Operators (amalgar haye yekani): +(unary plus)  -(unary negation)
  //Agar yek number dashte bashim ke type string bashad mitavanim ba ezafe kardan + be aval an variable, an ra tabdil be type number konim. ex: value= "5"; console.log(+value) --> 5.
  //Agar - ra be aval har variableii ba type number ezafe konim, an ra manfi mikonad. ex: console.log(-value) --> -5.


  //Nullish Coalescing Operator: ??
  //Agar 2 variable dashte bashim ke yeki az an ha type null ya undefined bashad, ba gozashtan yek ?? bein an ha, variableii ke undefined ya null nabashad be onvan khorooji khahad bood. ex:
    let unName;
    const goodNumber = 45;
    console.log(unName ?? goodNumber) // --> unName undefined ast pas khorooji 45 ast.
  //Agar har 2 variable null ya undefined nabashand, avalin variable ra khorooji migirad. ama agar har do null ya undefined bashand, haman variable dovom ke null ya undefined ast ra khorooji migirad chon az chap be rast check mikonad va akharin variable ra khorooji migirad.


  //Ternary Operator (amalgar 3gane): ?:
  //Agar yek shart dashte bashim ke true ya false bashad va bekhaiim begooim agar true bood felan kar va agar false bood folan kar ra anjam bede, az in operator estefade mikonim. ex: shart ? agar true bood : agar false bood. ex:
    x > y ? console.log(x) : console.log(y);
  //Dar bala agar shart ma yani x bozorg tar az y bashad( true bashad ), code avali yani console.log(x) ra khorooji migirad ama agar x az y bozorg tar nabashad( false bashad ), code dovom yani console.log(y) ra khorooji migirad.












//Truthy and Falsy Values:
  //Dar JS number ha va string ha ham mitavanand be soorat boolean (true ya false) bashand. masalan adad 0 hamishe false ast ama digar adad ha (mesl 1 34234 -45 va...) true khahand bood ke be estelah migooiim 0 falsy va baghie adad ha truthy hastand.
  //String ha ham boolean khahand bood, string khali ya "" falsy va baghie string ha ke value darand truthy hastand.
  //Null va undefined ham falsy hastand. khod false ham falsy va true ham truthy hastand.
  //Array ha che khali che por truthy khahand bood. object ham hamingoone ast.






  

//NaN (Not a Number):
  //zamani ke bekhahim rooye yek data type gheir az Number mohasebat anjam bedim, in khata rokh midahad.
    console.log("Parsa" / 2); // --> NaN
  //NaN yek zir majmooe az data type Number ast!







//Methods:
  //agar bekhaiim yek number ra be string tabdil konim. ( .toString() ) 
    const anString = number.toString();
  //va baraks baraye tabdil yek string be number az method zir estefade mikonim:
    const anNumber = Number(string); 
  // method parseInt ham mitavanad string ra be number tabdil konad (agar dar string ma space bein adad ha bood az in method estefade mionim ke bakhsh baad space ra hazf mikonad). 
    const AnNumber = parseInt(string);
  // in method baraye tabdil string haii ast ke adad ashari dar an vojood darad. 
    const anNumber2 = parseFloat(string) 
  
  //adad haye ashari ra fix mikonad va ragham haye ashar an ra pak mikonad. mitavan dar () haye in function yek adad nevesht ke chand ragham ashar ra neshan dahad. ( .toFixed() )
    const anotherString = number.toFixed(); // 3.23124 --> 3
    const AnotherString = number.toFixed(2); // 3.23124 --> 3.23

  //vaghti dar matn ha az ' estefade mikonim momken ast bug dashte bashad baraye hamin az backslash ( \ ) estefade mikonim. ex:
  // ba \ mitavan be barname fahmand ke yek symbol jozv matn ast va etebar coding nadarad.
    const text = 'Hi I\'m Parsa'; 
  //vaghti bekhaiim dar mohid codenevisi yek matn ra dar chand khat neshan dahim mitavanim aval yek \ va sepas enter bezanim va matn khod ra benevisim (dar khorooji taghiri nmikonad faghad dar mohid codenevisi taghir mikonad). ex:
    const Text = "Hi I'm Parsa \
    I'm 20 yo \
    living in Qazvin";
  //ama agar bekhaiim ke dar khorooji ham dar chand khat neshan dade shavad, az \n (line break) estefade mikonim. ex:
    const Text1 = "Hi I'm Parsa \n I'm 20 yo";

  //agar bekhaiim tul string ra be soorat adad be dast biarim az method length estefade mikonim. ex:
    console.log(text.length); // --> 12
  
  //index: shomarande ii ke har string ya numberi an ra darad. har caracter ya adad yek index darad, ke az 0 shoroo mishavad va ta harcheghadr ke variable ma tul dashte bashad tamam mishavad. agar bishtar az tedad index ha darkhast konim be ma undefined midahad. ex:
    const text2 = "Parsa Sorsori";
    console.log(text2[3]); // caracter ba index 3 --> "s"
    console.log(text2[30]); // --> undefined

  //ya agar bekhaiim befahmim dar yek variable yek caracter indexash chand ast, az method indexOf estefade mikonim. agar barname be ma -1 bargardand yani an caracter dar variable vojood nadarad. ex:
    console.log(text2.indexOf("i")); // --> 12
    console.log(text2.indexOf("H")); // --> -1
  //ya baraks be an index bedahim va character an ra begirim. ex:
    console.log(text2.charAt(4)); // --> "s"

  //mikhaiim ba method includes befahmim aya yek caracter ya kalame khas dar variable ma vojood darad ya kheir. be soorat true ya false (boolean) javab midahad. ex:
    console.log(text2.includes("Parsa")); // --> true

  //ba method lowercase va uppercase mitavanim jomalat dakhel string ra be horoof koochak ya bozorg tabdil konim. ex:
    console.log(text2.toLowerCase()); // --> "parsa sorsori"
    console.log(text2.toUpperCase()); // --> "PARSA SORSORI"

  //baraye joda kardan yek string az ham bar asas yek caracter khas az split estefade mishavad. agar be method voroodi nadahim, tak tak caractar ha ra joda mikonad. ex:
    console.log(text2.split(" ")); // --> 'Parsa', 'Sorsori'
    console.log(text2.split("")); // --> 'P', 'a', 'r', 's', 'a', ' ', 'S', 'o', 'r', 's', 'o', 'r', 'i'

  //agar bekhaim yek kalameh khas ra ba yek kalameh dige jaigozin konim az methd replace estefade mikonim. ex:
    console.log(text2.replace("Parsa", "Akbar")); // --> Akbar Sorsori

  //method concat ke mesl jam kardan string ha ba ham amal mikonad va 2 string ra be ham vasl mikonad. ex:
    const text3 = "is a Developer";
    const finalText = text2.concat(" ", text3); //--> Parsa Sorsori is a Developer

  //method trim faza haye khali va whitespace haye aval o akhar yek reshte ra hazf mikonad. ex:
    const text4 = "    Parsa Sorsori    ";
    console.log(text4.trim()); //--> "Parsa Sorsori"

  //baraye extract kardn yek tike az matn bayad az method slice ya substring estefade konim. voroodi an index shoroo va index payan baraye estekhraj matn ast. tavajoh konim ke vaghti miguiim ta index 5 ra extract kon khod index 5 estekhraj nmishavad pas bayad yek index ezafe tar vared konim. agar be an yek index bedahim az an index shoroo va ta akhar string ra chap mikonad. agar be an adad manfi bedahim az akhar strig shoroo be estekhraj mikonad (be substring nmitavan adad manfi dad). ex:
    console.log(text2.slice(0, 5)); //--> "Parsa"
    console.log(text2.substring(0, 5)); //--> "Parsa"
    console.log(text2.substr(0, 5)); //--> "Parsa" // substr ghadimi shode va digar estefade nmishavad.

  //Template Literals: baraye estefade az variable ha dar ye string mitavanim be soorat zir amal konim. bejaye "" az `` (backtick) baraye neveshtan string estefade konim va agar mikhaim variablei ra dakhel in string gharar dahim bayad az ${variable} estefade konim. ex:
    const textWithVars = `Hi. My name is ${text2}.`; //--> "Hi. My name is Parsa Sorsori."









//Arrays:
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









//Loops:
  // gahhi oghat ma mikhahim meghdari az code hara be tor modavem ejra konim ta be javab akhar beresad, gahi oghat niaz darim ta enghadr yek statement tekrar shavad ta be javab beresad.
  // marsoom tarin halat loops dar js be vasile for anjam mishavad
    for(var i = 0; i < 10; i++){
        //code haye in ghesmat darsoorati ke shart bala yani ta zamani ke i koochek tar az 10 bashad, in code ejra mishavad.
      console.log(i);
    }