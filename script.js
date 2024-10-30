//Writed by gwparsa - https://github.com/gwparsa

//Introduction:
  // JS is most popular programming language. it is the language of the web and now well beyond the web. also, we can use JS in robots, gaming etc as well. but JS is a native web programming language.




//Story of JS:
  // dar sal 1995 avalin version js dar 10 rooz be vasile Brandon Eich tarahi shod. in zaban ebteda Mocha nam dasht va sepas be JavaScript taghir peyda kard.
  // hamchenin dar saal haye aval js shakhsi be nam Douglas Crockford be pishraft in zaban komak kard va dar mored an ketabi ba nam JavaScript:The Good Parts nevesht.




//JavaScript Versions:
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




//Comment:
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




//Encapsulation: in ebarat yani ma data hayeman ra dar ja haye mokhtalef ba estefade az scope ha mohafezat konim va nagozarim ta data hayi ke nmikhaiim az dakhel function hayeman nasht konad.
//State Retention: betavanim dar amaliateman shomaresh yek data khas ra negah darim.
//Lexical Scope: mafhoomi ke yek function be che variable haii dastresi darad migooyand.
//Memorization: yek function closure mitavanad baraye chandin variable estefade shavad va har kodam maqadir makhsoos khod ra dahte bashand.




//Variables:
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




//Data Types:      
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




//Memory: 
  //vaghti data haii ro dar variable zakhire mikonim anha niz dar memory computer ma zakhire mishavand. 2 noe memory darim: 1- Stack memory 2- Heap memory
  //Stack memory: dar stack memory speed rate bala ama hafezeii ke mitavanim dar an data zakhire konim, kam ast. ham chenin data ha be soorat moratab va be tartib zakhire mishavand.
  //Heap memory: baraks stack speed rate paiini drad ama meghdar hafeze bishtari ra be ma midahad. baraks stack data ha be soorat random dar memory zakhire mishavand va yek address khas dar memory darad.

//Primitive & Reference type:
  //hameye variable haye ma zir majmooe primitive type va reference type hastand. Primitive type: string - number - boolean - null - undefined - symbol. Reference type: array - object - function.
  //vaghti ma yek varriable taarif mikonim, js noe an ra dar nazar migirad va be soorat primitive ya reference type an ra dar stack ya heap memory zakhire mikonad.
  //dar primitive type ha vaghti yek data ra mikhaiim zakhire konim,js baste be noe data, an ra dar stack zakhire mikonad.
  //ama dr reference type ha agar yek array dashte bashim, js khod array ra dar stack va meghdar array ra dar heap memory zakhire mikonad. data haye array zakhire shode dar heap yek address ya reference darand ke an address be variabli ke dar stack zakhire shode dade mishavad ta betavanad an ra farakhani konad.
  //be hamin khater agar az referencce type ha dar jomalat sharti estefade konim momken ast fargh konad chon agar 2 array ya 2 object joda dashte bashim ref variable ha fargh konad, moghayese in 2 false mishavad.

//Garbage collector: vaghti yek seri data dar heap memory darim ke hich jaye barname estefade nmishavand va hich ja reference ii nadarand ra hazf mikonad va be performance barname komak mikonad. ya vaghti mikhaiim dasti yek data ra az variable ii pak konim, kafi ast meqdar an ra ba null gharar dahim. ex: let x = null;

//Mutation: be qabeliat taghirat dar meghdar ye variable ya taghirat dar property haye meqdar haye yek variable ra mutation miguyand. hame primitive type ha gheir mutable hastand ama reference type ha mutable hastand. ex: agar yek string mesl "milad" darim. ma nmitavanim caracter haye in string ra mesl array avaz konim ama mitavanim be medar haye array ya object meqdari ra ezafe ya kam konim.

//Shallow copy & Deep copy(Clone deep): baraye copy krdn meqdar yek variable ast. shallow copy ra mitavanim zamani anjam dahim ke array ya object ma flat bashad va daroon anha array digeii nabashad, dar in halat ba method slice mitavanim az array khod shallow copy begirim. ama agar dar array ya object khod gheir az meqdar primitive type ha, reference type ham dashte bashim bayad ba dastoor JSON.parse(JSON.stringify()) deep copy anjam dahim. ravesh deep copy bekhater estefade ziad az ram va cpu pishnahad nmishavad.




//Oprators:
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

  //Spread operator: meqdar haye dakhel yek array ra bedoon comma ta brackt haye dor an be ma neshan midahad. hamchenin mitavanim yek shallow copy az yek array ra be soorat sade dar biavarim.ex:
    const copyData = [...data];//--> [1, 2, 3]
    const names = ["parsa", "ali", "mamad"]; 
    const newNameData = [...data, ...names]//-->[1, 2, 3, "parsa", "ali", "mamad"] //edgham kardan 2 array mesl method concat.

    const veryNewObj = {...myNewObj}; //copy gereftan az yek object
    const finalNewObj = {...myNewObj, ...myNewObj}; //jam krn mohtaviat 2 object

  //chaining operator: yek dot ( . ) ke bein object va key ha, function ha va ... gharar migirad. ex:
    console.log(data.name);
  
  //Optional chaning operator: ?.
  //mesl haman chaining operatoe amal mikonad ke dar address haye too dar too estefade mishavad. ex:
  console.log(data?.name);




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
  //function haii ke dar object bashand method ha hastand ke baraye ma kar haii ra anjam midahand.
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

  //Continue & Break:
  //mamoolan dar loop ha ejra mishavad. break mitavanad yek loop ra motevaghef konad. ex:
    while ( i < 10 ) {
      console.log(i);
      if(i === 6) break; //vaghti ke i barabar ba 6 bood loop ra motevaghef mikonad.
      i++;
    }
  //continue mokhalef break ast va loop ra edame midahad.
    while ( i < 10 ) {
      console.log(i);
      if(i === 6) continue; //vaghti ke i barabar ba 6 bood loop ra pause mikonad va az dafee baad loop ra edame midahad. masalan inja az 1 ta 10 ra log migirad ama 6 ra nmigirad.
      i++;
    }



//Arrays:
  //yek data type az JS ke daste ii az data ra dar khod ja midahad va daroon bracket ( [] ) gharar migirand. array ha niz daraye index hastand ke az 0 shoru mishavad. tartib dar array mohem ast. ravesh haye sakht array:
    const myArray = [1, 2, 3];
    const secArray = [[1, 2], [3, 4], [5, 6]];
    const nextArray = Array(4, 5, 6);
    const newArray = new Array(4, 5, 6);

  //hame data type hara mitavan dar array gharar dahim. hata array haye digar. ex:
    const exArray = ["Parsa", 20, true, ["programmer", "2years", 11], {name: "Parsa", age: 20}];

  //ba in soorat mishavad yeki az item haye yek array ra begirim. ex:
    const yekArray = exArray[2]; //--> 20

  //method haye array:
  //method push baraye ezafe krdn yek item be array ast. item be akhar array ezafe mishavad va index haye item haye ghabli taghiri nmikonad. ex:
    myArray.push(4, 5, 6); //--> [1, 2, 3, 4, 5, 6]

  //method unshift mesl method push ast ama item jadid ra be aval array ezafe mikonad.
    myArray.unshift(4); //--> [4, 1, 2, 3]

  //method pop akharin item array ra pak mikonad. ex:
    myArray.pop(); //--> 3

  // method toString baraye tabdil array be string ast. tavajoh konid ke rooye array asli tasir nmigozarad va yek array jadid baraye ma misazad. ex:
    myArray.toString(); //--> "1", "2", "3"

  //method delete baraye hazf yek item delkhah dar array. ex:
    delete myArray[0]; // [2, 3]

  //agar bekhaiim jaye yek item data digari gharar dahim be in soorat amal mikonim:
    myArray[0] = "Parsa"; //--> ["Parsa", 2, 3]

  //method join item haye yek array ra ba ham yeki mikonad. agar be method voroodi dahim bar asas an voroodi item hara kenar ham migozarad. ex:
    myArray.join(" and "); //--> 1 nad 2 and 3
    myArray.join(); //--> 1,2,3

  //method concat 2 array ra ba ham yeki mikonad va yek array jadid misazad. ex:
    myArray.concat(nextArray); //--> [1, 2, 3, 4, 5, 6]

  //method flat dar soorati ke mab yek array dashte bashim ke dar khod chand array digar dashte bashad (mesl secArray) , in method hame array haye dovom ra hazf krde va hame item hara dar array asli zakhire mikonad. ex:
    secArray.flat(); //--> [1, 2, 3, 4, 5, 6]
  
  //method indexOf mitavanad index yek item dar array ra be ma bedahad. va agar an item vojood nadashte bashad index -1 ra neshan midahad. ex:
    exArray.indexOf(20); //--> 1
    exArray.indexOf("salam"); //--> -1

  //agar bekhaiim bebinim aya yek item dar array ma vojood darad va be soorat boolean ( true ya false ) be ma neshan dahad az nethod includes estefade mikonim. ex:
    exArray.includes("Parsa") //--> true
    exArray.includes("Ali") //--> false

  //agar bekhaiim az yek daste az item ha estefade konim va baghie ra kenar bogzarim az slice estefade mikonim. 2 voroodi migirad ke index aval va akhar array shoma ast. ex:
    const slicedArray = myArray.slice(1, 3) //--> [2, 3]
    const slicedArray2 = myArray.slice() //--> [1, 2, 3] //in yek method khoob baraye copy gereftan az yek array ast. agar be method voroodi nadahim kol array ghabli ra be ma midahad.

  //method splice mitavanad yek bakhsh az array ra hazf konad. in method niz 2 voroodi migiriad ama ba slice fargh mikonad. voroodi aval indexi ast ke mikhaiim az an shoru be hazf krdn konim va voroodi dovom tedad item haii ast ke mikhaiim hazf konim. agar be in method 3 voroodi bedim mitavanad item jadid ni be array ezafe konad. ex:
    myArray.splice(1, 1); //-->[1, 3] //az index 1 shoru mikonad va 1 item ra hazf mikonad.
    myArray.splice(1); //-->[1] //agar faghad index ra voroodi bedahim, az an index be baad ra hazf mikonad.
    myArray.splice(1, 0, "Parsa", "mamad"); //-->[1, "Parsa", "mamad", 2, 3] //dar voroodi aval goftim az index 1 shoru konad va ba tavajoh be voroodi dovom goftim ke 0 item ra hazf konad va ba voroodi sevom va chaharom goftim ke item "Parsa" va "mamad" ra be array ezafe konad.

  //method sort mitavanad yek array ra be soorat horoof alefba moratab konad. ex:
    const unsortArray = ["erfan", "ali", "babak", "mamad"];
    unsortArray.sort(); //--> ["ali", "babak", "erfan", "mamad"]

  //method reverse jaye hame item haye array ra avaz mikonad va akharin item ra be aval array miavarad. ex:
    myArray.reverse(); //--> [3, 2, 1]

  //Array Destructuring: rahi sade tar baraye mortab kardan meqdar haye array baraye estefade krdn dar yek string ast. ex:
    const [name, lName, age] = ["Parsa", "Sorsori", 20]; //meqdar haye array dar variable haii ke dar bracket moshakhas shodand be tartib index hayeshan zakhire mishavand.
    console.log(name, lName, age);//--> "Parsa", "Sorsori", 20

    //agar bekhaiim lName ra zakhire nakonim an ra ba comma rad mikonim. ex:
    const [name, , age] = ["Parsa", "Sorsori", 20]; 
    console.log(name,  age);//--> "Parsa", 20
    
    //agar bekhaiim yek seri az data ha ra ham daroon yek array ghrar dahad niz mitavanim az spread operator( ... ) estefade konim. ex:
    const [name, lName2, age, ...otherData] = ["Parsa", "Sorsori", 20, 1, 2, 3, 4]; //baad az age hame meqdar ha ra daroon array migozarad.
    console.log(otherData);//--> [1, 2, 3, 4]




//Object:
  //baraye sakht object:
    const myObject = {name: "Parsa", lastName: "Sorsori", age: 20, skills: ["HTML", "CSS", "JS"]}; // har kodam az in meqdar ha ra pair migooyand ke shamel key ka dar inja avali name ast va value ke "parsa" ast.
  
  //agar bekhaiim yek item makhsoos ra az object begirim chizi be esm index ya tartib item ha nadarim. be jaye an niaz ast key ra dar kenar esm object benevisim. ya mitavanim esm key ra daroon "" va baz ham daroon [] gharar dahim(agar key ma yek adad bashad bayad be in ravesh an ra begirim). ex:
    console.log(myObject.lastName); //--> "Sorsori"
    console.log(myObject["lastName"]); //--> "Sorsori"

  //baraye ezafe kardan data be onvan key be object bayad an ra dar object ba bracket gharar dahim. ama agar bekhaiim be value an ra ezafe konim faghad kafist esm an variable ra benevisim. ex:
    const newSport = "Volleyball";
    const myNewObj = {name: "parsa", lName: "sorsori", [newSport]: "my favorite game", sports: newSport, address: {country: "IR", province: "Qazvin"}};
    
  //baraye taghir dadan yek data khas dar object ha faghad an key ra select va meqdar an ra taghir midahim. ex:
    myNewObj.name = "mamad";
  
  //baraye hazf krdn yek data khas dar object (yek pair az object) az dastoor delete estefade mikonim. ex:
    delete myNewObj.name;

  //ama agar bekhaiim faghad value yek pair ma reset shavad, be an null midahim. ex:
    myNewObj.name = null;

  //in keyword: neshan midahad ke aya yek key dar an object vojood darad ya kheir. key bayad hatman dakhel "" gharar begirad. ex:
    console.log("name" in myNewObj); //--> true.

  //agar bekhaiim key haye yek object ya value haye anha ra jodagane bedast biavarim az method keys ya values estefade mikonim ta meqdar ha ra be soorat yek array be ma neshan dahad. ex:
    console.log(Object.keys(myNewObj)); //--> ["name", "lName", "Volleyball", "sports", "address"]
    console.log(Object.values(myNewObj)); //--> ["parsa", "sorsori", "my favorite game", "Volleyball", {country: "IR", province: "Qazvin"}]

  //Object Destructuring: agar bekhaiim etelaat dakhel object ra daroon variable berizim bayad be soorat zir amal konim. ama in variable ha mesl array destructuring tartib nadarand balke bayad esm key hara ra dorost benevisim. darvaghe esm key ma haman esm variable ma khahad bood. ex:
    const {name, age} = myNewObj; //--> "parsa", 20

  //ama agar ma az ghabl masalan yek variable be esm age dar barname dashtim va alan ham in variable sakhte shode, barae inke error nadahad bayad esm variablei ke mikhaiim age ma dar an zakhire shavad chiz digari bashad. ex:
    const {name, age: age2} = myNewObj;
  
  //vaghti ma chand object dar ham dige dashte bashim va bekhaiim key va value haye dakhel an ha ra destructure konim bayad be soorat zir estefade konim. ex:
    const {name, age, address: {country, province} } = myNewObj;
    console.log(address);//--> "IR", "Qazvin"




//Conditional statement (Jomalat Sharti):
  //ba in jomalat mitavanim shart ha ra be barname biarim.

  //if, else if, else:
    if( x > y ){ console.log(x); }; //shart ma bayad dar () qarar begirad. natije in shart ha be soorat true ya false khahad bood. //agar shart ma bargharar bood dastoor haye dakhel {} ra anjam midahad.

  //hala agar shart dakhel () true nabood va bekhiim yek dastoor dige ejra shavad az dastoor else estefade mikonim. ex:
    if( x > y ){
      console.log("x is bigger than y");
    } else {
      console.log("y is bigger than x"); //agar shart dakhel () true nabashad dastoorat else ma anjam mishavad.
    }

  //age bish az 2 halat khahim dasht va mikhaihim 3 shart be bala bezarim, bayad az else if estefade konim. ex:
    if( x > y ){
      console.log("x is bigger than y");
    } else if( x = y ){
      console.log("x and y are the same"); //inja yek shart digar ezafe kardim. mitavan be soorat binahayat az if else estefade kard.
    } else {
      console.log("y is bigger than x"); //agar shart dakhel () true nabashad dastoorat else ma anjam mishavad.
    }

  //Switch case:
  //gahi oghat mikhaiim bebinim ke aya variable ma ba yek chiz digar barabar ast ya kheir. bozorgtar ya koochiktar boodan dar switch case vojood nadarad. ex:
    switch(name){ //variableii ke maikhaiim moqayese rooye an anjam shavad ra dakhel () minevisim.
      case "Parsa": console.log("esm shoma: Parsa"); break; //baraye inke vaghti statement ma yek javab true gereft az kol statement kharej beshe va dobare amal tekrar nashe az break estefade mikonim.
      case "Ali": console.log("esm shoma: Ali"); break;
      case "Mamad": console.log("esm shoma: Mamad"); break;
      case "Abbas": console.log("esm shoma: Abbas"); break;
      default: console.log("esm shoma dar list nist!"); // zamani ke shart ma dar statement vojud nadashte bashe be soorat default in khat code ejra mishe. 
    }
  

  //Loops:
  //harvaght bekhaiim yek code ra chand bar ejra konim mitavanim az loop estefade konim ta yek code ra baraye ma chandin bar run konad. loop ha bayad noghte payani dashte bashand.

  //For loop:
  //dakhel () neshan midahim ke chandbar in amal bayad anjam shavad va dar {} neshan midahim ke che amal ya code ii bayad anjam shavad. yek variable be esm i be onvan index taarif mikonim va ta zamani ke shart ma true bashad code dakhel {} ejra va yek vahed be i ezafe mishavad.
    for (let i = 1; i < 11; i++) {
      console.log(i); //ta zamani ke shart true bashad in khat code ejra mishavad.
    }
  
  //baraye estefade az for loop faghad baraye array ha az for-of estefade mikonim. ex:
    const myArray = [2, 3, 4, 6];
    for (let i of myArray) { 
    //inja faghad yek variable be onvan index sakhtim. in index be andae length array ma code haye dakhel {} ra ejra mikonad.
      console.log(i); //--> 2, 3, 4, 6
    }

  //baraye estefade az for loop faghad dar object ha az for-in estefade mikonim. ex:
    const myObj = {name: "Parsa", lastName: "Sorsori", age: 20};
    for (let key in myObj) {
      console.log(key); //--> name, lastName, age
      console.log([key]); //--> "Parsa", "Sorsori", 20
    }
  
  
  //While loop:
  //dakhel () shart khod ra minevisim va ta zamani ke trrue bashad code dakhel {} ra run mikonad. ex:
    let i = 1; //variable index bayad biroon while taarif shavad.
    while ( i < 10 ) {
      console.log(i);
      i++; //mesl for bayad be index yek vahed ezafe konim ama inbar daroon {} va dar akhar code ha ezafe mikonim.
    }

  //do-while ham haman while ast ama chon shart ma baad az code ha miayad, hata agar shart false ham bashad yekbar an code ra ejra mikonad.
    do {
      console.log(i);
      i++;
    } while ( i < 10 );




//Functions:
  //yek tike code ke har dafee bekhaiim mitavanim an ra farakhani va ejra konim.
  //gahi oghat niaz darim ke chand khat code ra dar barname hayeman chand bar tekrar konim. mitavanim code hara dar function gharar dahim va har dafee an ra farakhani konim, be an voroodi dahim va khorooji begirim. pas ba function ha niazi be tekrar code ha nakhahim dasht.
    function myFunction() {
      console.log("hi")
    }; //syntax koli yek function
  
  //baraye call be function ya haman seda zadan function be soorat zir amal mikonim:
    myFunction(); // --> "hi"

  //mitavanim dar () be function voroodi dahim. yek esm delkhah mesl "adad" dar () minevisim va ba an dar function rooye an amal haii anjam midahim. be voroodi parameter migooim. ex:
    function duplicateFunction(adad) {
        console.log(adad*2);
    }; //yek adad ra be an midahim va n ra baraye ma 2 barabar mikonad.

    duplicateFunction(5); // --> 10    //dakhel () dar seda zanande voroodi ra vared mikonim. 5 be onvan parameter be function bala ersal mishavad va khorooji ra log migirad. adad 5 inja argument mibashad.

  //mitavanim be function ha bishtar az yek voroodi dahim:
    function randomFunction(adad1, adad2, adad3){
      console.log(adad1 + adad2 + adad3);
    };
    randomFunction(5, 10, 15);

  //return keyword: gahi oghat ma be khorooji function ha niaz darim ta dar code hayeman estefade konim va faghad nemikhahim an ra dar console log begirim. code haii ke baad az return neveshte shode bashand ejra nmishavand chon return be manaye in ast ke kare ma dar function tamam shode va code haye baad an ra nmikhanad. ex:
    function randomFunction(adad1, adad2, adad3){
      const result = adad1 + adad2 + adad3;
      return result; //value result ra be onvan khorooji be ma midahad.
    };
    randomFunction(5, 10, 15);

  //Scopes:
  //be manaye mahdoode dastresi be yek variable ast. be 3 daste Global, Local va Block scope taghsim mishavand. 
  //Global Scope: variable haii ke dar global scope gharar migirand mitavandn dar hame jaye barname estefade shavand zira dar birooni tarin laye in variable taarif shode.
  //Local Scope(Function Scope): variable haii ke dar yek function taarif mishavand va faghad dar haman function ghabel estefade mibashad va nmitavanim kharej az function an ra taghir bedahim.
  //Block Scope: be mahdoode ben har {} ra migooyand. variable haii ke dar yek {} sakhte mishavand, dar haman block mishavad be anha dastresi dasht. masalan dar if ya for ke {} darand niz in mozu mohem ast.

  //Tafavot let, const va var:
  //agar ba let ya const 2 variable taarif konim in 2 nmitavanand ham nam bashand ama agar ba var 2 variable besazim mitavanim chand bar ba yek esm variable sakht. ex:
    // const yekVar = 10;
    // let yekVar = 15; // --> Error
    // var name = "ali";
    // var name = "mamad"; // --> No Error
  //let va const qavaed block scope ra raayat mikonand ama var in qaede ra nmishenasad va mitavan dar kharej az block ham be an dastresi dasht.

  //Hoisting: qabl az ejra shodan code ha tavasot browser, har block, variable va function ra be balatarin noghte scope khod mibarad. baraye hamin ast ke vaghti yek fuction ra ghabl khod block function farakhani mikonim, amal mikonad. baraye variable haye let va const hoisting anjam nmishavad va faghad dar var in amal anjam mishavad. ex:
    saySomething(); // --> salam

    function saySomething(){
      console.log("salam");
    };

    //*********

    console.log(hoisted); // --> 5
    console.log(secHoisted); // --> Error
    var hoisted = 5; 
    const secHoisted = 6;

  //Strict Mode: halat sakhtgirane javascript ra migooim. dar in halat bug ha va error haii ke javascript az an cheshmpooshi karde ra vared barname mikonad va baes mishavad ke koochek tarin error ra be ma neshan khahad dad. baraye faal kardn in mode bayad dar avalin khat barname "use strict"; ra benevisim.
    
  //Function Expression: haman taarif kardan function ast ama dar yek variable zakhire mishavad. chon function ma dar yek variable const ya let zakhire mishavad, amaliat hoisting anjam nmishavad. ex:
    const saySomething = function(){};

  //Anonymous Function: function ma hich esmi nadarad. ex:
    //function(){};

  //IIFE(Immediately Invoked Function Expression): function hayi hastand ke haman lahze ke taarifeshan mikonim ejra mishavand. va mesl baghie function ha niaz be farakhani nadarand. az function haye anonymous estefade mikonim va be aval o akhar function yek () ezafe mikonim va yek () ham dar akhar migozarim. ex:
    (function(){
      console.log("hellow");
    })();

  //Arrow Function: functioni ke dar yek variable rikhte mishavad va besiar sade tar az baghie function ha ast. vaghti ke amaliat ma besiar sade ast va dar yek khat ghabel anjam ast mesl mesal paiin niazi be return kardan va gozashtan {} nist va faghad amaliat ra minevisim. ex:
    const sum = (num1, num2) => num1 + num2;
    console.log(sum(1, 2)); //--> 3

  //hata agar faghad yek parameter dashte bashim mitavanim () ra ham nazarim.
    const exSum = num1 => num1 + 2;
    console.log(exSum(1)); //--> 3

  //ama agar chand variable ashte bashim va chand khat code dashte bashim, bayad hame qavaed raayat shavad. ex:
    const newSum = (num1, num2) => {
      const newNum1 = num1 + 2;
      const newNum2 = num2 + 1;
      return newNum1 + newNum2;
    };

  //Higher Order and Callback Function: mitavanim be onvan voroodi ya parameter bejoz number o string o ... yek function dige ro be function jadid be onvan voroodi bedim. functioni ke be onvan voroodi be function digar dade mishavad callback function va functioni ke function voroodi be and dade shode, higher order function gofte mishavad. ex:
    const sum1 = (num1, num2, callback) => { //sevomin parameter function voroodi ast.
      const summation = num1 + num2;
      const result = summation ** 2;
      callback(result);
    };

    const showMessage = (text) => console.log(`the result is ${text}`);

    sum1(1, 2, showMessage); // dar inja argument sevom functioni ast ke be onvan callback dade mishavad.

  //forEach: data hayi ke be samt ma miayand aksaran be soorat array hastand. loop for baraye array ha ast.
  //ma mitavanestim ba for of ham ba array ha kar konim ama forEach be ma index ha ra ham midahad. ex:
    const numbers = [2, 3, 4, 5, 6, 7];
    numbers.forEach((number, index, array)=>{ //ba yek seri kalamat kelidi mesl index va array mitavanim etelaat begirim.
      console.log(number*2); //--> 4, 6, 8, 10, 12, 14
      console.log(index); //--> 0, 1, 2, 3, 4, 5
      console.log(array); //--> [2, 3, 4, 5, 6, 7]
    });
  
  //map: nahve piadesazi taghriban mesl forEach ast ama ba kami taghirat. tavafot map ba forEach in ast ke natije ra baraye ma dar yek array mirizad va return mikonad. pas bayad an ra dar yek variable berizim. ex:

    const newNumbers = numbers.map((number)=>{
      return number * 2; // faghad kafist amaliat ra return konim ta dar array zakhire va return dade shavad.
    }); //--> [4, 6, 8, 10, 12, 14]

  //find: baraye peyda krdan yek item dar yek array mibashad. mesl map neveshte mishavad ba kami taghirat ke baz ham natije ra dar yek array be ma bar migardanad. dar find ma boolean return mikonim. hamishe avalin natije ra be ma midahad va baraye list hayi ke chand bar yek chiz dar anha tekrar shode bashad monaseb nist. ex:
    const result = numbers.find((number) => number === 5); // adadi ke ba 5 mosavi bashad ra ba true return mikonad, dar variable zakhire va amaliat ra motevaghef mikonad.
    const indexResult = numbers.findIndex((number) => number === 5); // haman kar find ra anjam midahad ama inbar index 5 ra dar array be ma midahad.

  //filter: shabih be find ast ama ba kami taghirat. dar filter hameye natije haii ke migooim ra peyda mikonad ama find baad az peyda kardan yek natije an ra motevaghef mikard. ex:
    const anothrerNumbers = [2, 3, 4, 5, 6, 7, 5, 8, 5];
    const filteredItem = anothrerNumbers.filter((number) => number === 5); //--> [5, 5, 5] hame be soorat yek array dar variable filteredItem zakhire mishavad.
    const againFilteredItem = anothrerNumbers.filter((number) => number > 5); //--> [6, 7, 8]

  //reduce: kol value array ra baraye ma ba ham jam mikonad va yek meghdar vahed be ma return mikonad. ex:
    const myNumbers = [2, 3, 4, 5, 6, 7, 8];
    const myResult = myNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //baraye reduce bayad yek function va yek adad be an dahim ke az an adad shoru be jam krdn mikonad. dar inja yek arrow function be onvan voroodi aval va adad 0 be onvan voroodi dovom be reduce dade shode.
    console.log(accumulator); //--> 35

  //every & some: in method ha baresi mikonand ke aya dar array ma aya yek shart bargharar ast ya kheir. baraye method every bayad hame value ha true bashand ta true shavad ama baraye some, agar hata yeki az anha true bashad khorooji ham true mishavad. khorooji be soorat boolean khahad bood. ex:
    const data = [1, 2, 3];
    const numberVerify = data.every((item) => typeof item === "number") //--> true. agar type hame item haye array number bashad true mishavad.
    const data2 = [1, "salam", 3];
    const stringVerify = data2.some((item) => typeof item === "string") //--> true. agar faghad yeki az item haye array string bashad true mishavad.

  //this: in this be parent ya owner khod eshare mikonad va an ra neshan midahad. bastegi be an darad ke dar koja ya dar che scope ii ejra shavad. ex:
    const data3 = {
      fName: "parsa",
      lName: "sorsori",
      showAge: function() {
        console.log(this); // owner ya parent khod ra neshan midahad ke dar inja object data3 ast.
      },
    };
    data3.showAge();
  //this in arrow functions: 

    const data4 = {
      fName: "parsa",
      lName: "sorsori",
      showAge: () => {
        console.log(this); // dar arrow function be owner an object ke dar an dar hal ejra ast eshare mikonad ke inja global scope ast ya Window ra neshan midahad.
      },
    };
    data4.showAge();

  //bind method: be keyword this yek maqsad moshakhas midahad. this digar object haye digar ra khorooji nmidahad ela objecti ke ma baraye an moshakhas mikonim.
    const myData = {name: "Ali"};
    data4 = data4.bind(myData); //dar inja migooim this dar function data4 ke dar bala in object ra neshan midad alan object myData ra neshan khahad dad.
    data4.showAge();

  //call & apply methods: mesl bind amal mikonad ama digar nmikhahad ta ma mesl syntax bala function bind shode ra dakhel khodash berizim va sepas an ra ejra konim. dar call va apply faghad az method estefade mikonim va niaz be farakhani dobare function ya object nist zira khod ejra mishavad. ex:
    data4.call(myData, 27, "mamad"); //argument aval baraye meqdar this mibashad va baad az an baghi argument haii ast ke mikhaiim be function befrestim.
    data4.apply(myData, [27, "mamad"]); //apply ham haman kar ra mikonad ama baghie argument ha bejoz meqdar this bayad dar array neveshte shavand.

  //Setter & Getter: qablan baraye dashtan do value mesl firstname va lastname, anha ro ba `` va ${} an ra khorooji mikardim ama alan mitavanim yek getter va setter ke yek function hastand, dakhel objecteman tarif konim (ba keyword get va set) va code anha ra benevisim. ex:
    const personalData = {
      firstName: "Parsa",
      lastName: "Sorsori",
      get fullName(){ //agar dataii ke dar object ast ra dar paiin farakhani konim, in function vared amal mishavad va code ha ra ejra mikonad.
        return `${firstName} ${lastName}`;
      },
      set fullName(string){ //agar dar paiin abject be fullName data dade shavad vared in function mishavad va ba method split az ham joda va ba index hayeshan dar object mineshinand.
        this.firstName = string.split(" ")[0];
        this.lastName = string.split(" ")[1];
      },
    };

    console.log(personalData.fullName); //baraye get //--> Parsa Sorsori
    personalData.fullName = "Ali Karimi" // baraye set

  //closure: yek function ke dar khod yek function digar darad ke yek meqdari ra return mikonad. functioni ke dakhel ast closure va function birooni factory function ast. ex:
    const like2 = () => {
      let likeccounter = 0; //dar in function state retention nadarim chon har dafe ke ejrayash konim like counter reset mishavad va har dafe 1 ra namayesh midahad.
      likeccounter++;
      return likeccounter;
    };

    const like = () => { //factory function
      let likescounter = 0; //dar inja ham paydari etelaat raayat shode va ham amniat etelaat.
      return function(){ //closure function
        likescounter++;
        return likescounter;
      };
    };

    const likesPost1 = like(); //agar 3 post dashte bashim ke bekhaim like haye an ra beshmarim mitavanim be in soorat az yek function estefade konim va faghad esm variable ra taghir dahim.
    const likesPost2 = like(); 
    const likesPost3 = like(); 

    console.log(likesPost1());
    console.log(likesPost1());
    console.log(likesPost2());
    console.log(likesPost2());
    console.log(likesPost1());
    console.log(likesPost1());
    console.log(likesPost3());
    console.log(likesPost3());
    console.log(likesPost1()); //--> post1: 5likes, post2: 2likes, post3: 2likes

  //Pure functions: function haii ke be ezaye voroodi haye yeksan be ma khorooji haye yeksan bedahand va tasiri rooye baghie data haye barname nadashte bashand, pure function hastand. mesl function dobarabar kardan adad haye voroodi.
  //Impure function: agar begheir az khorooji haii ke midahand, yek data ya value chiz digari ra ham avaz konand impure function khahand dasht.




//Math Object:
  //objecti az maqadir riaziat ke js dar ekhtiar ma migozarad ta betavanim dar barname hayeman az anha estefade konim.
    console.log(Math); //ingoone mitavanim hame maqadiri ke js dar ekhtiar ma gozashte ra bebinim.

  //round: baraye rond kardan yek adad ashari az in method estefade mishavad. agar ashar in adad az nim paiin tar bashad be samt paiin va agar az nim bishtar bashad be samt bala rond mishavad. ex:
    const unround = 5.23;
    Math.round(unround); //--> 5

  //ceil: agar bekhaiim adad haye ashari ra faghad be samt bala rond konim. ex:
    Math.ceil(unround); //--> 6

  //floor: agar bekhaiim adad haye ashari ra faghad be samt paiin rond konim. ex:
    Math.floor(unround); //--> 5

  //trunc: agar bekhaiim faghad ashar yek adad ra hazf konad va adad kamel ra be ma bargardanad. ex:
    Math.trunc(unround); //--> 5

  //pow: baraye be tavan resanden yek adad. voroodi aval adad ma va voroodi dovom, tavan ma khahad bood. ex:
    Math.pow(2, 3); //--> 8

  //sqrt: baraye jazr gereftan az yek adad estefade mishavad. ex:
    Math.sqrt(2); //--> 1.414213...
  
  //abs: qadr motlagh yek adad ra midahad. ex:
    Math.abs(-3); //--> 3
    
  //mosalasat: voroodi ra be sooorat radian migirad va khorooji midahad. ex:
    Math.sin(1.34); //--> 1.2246...
    Math.cos();
    Math.tan();

  //log: logaritm ra hesa mikonad. ex:
    Math.log();

  //min & max: minimum va maximum yekseri adad ra mitavanim peyda konim. ex:
    Math.min(1, -3, 3, 4, 5, 6) //--> -3
    Math.max(1, -3, 3, 4, 5, 6) //--> 6

  //random: ba in method mitavanim adad haye random tolid konim. ama in adad ha bein 0 ta 1 hastand. ex:
    Math.random();
  //agar bekhaiim adad haye bishtar az 1 begirim mitavanim an ra zarb konim, masalan agar bekhaiim az 0 ta 10 ra be ma bedahad, natije ra zarb dar 10 mikonim. ex:
    console.log(Math.random() * 10); //--> 8.12324... //--> 3.12324...




//Time & Date:
  //yek object az etelaat mokhtelef baraye estefade az zamna va tarikh ast.
  //mah ha dar js bejaye mahe 1 ta 12, az 0 ta 11 khahad bood.
  //hamchenin rooz haye hafte ham bejaye 1 ta 7, az 0 ta 6 shemorde mishavand.
    const date = new Date();
    console.log(date); //--> Thursday May 9 2024 19:56:23 GMT+0330

  //zaman dar js az sal 1970 dar hale shomorde shodan ast.
  //getTime method: in method zaman separi shode ra be mili second be ma neshan midahad. ex:
    console.log(date.getTime()); //--> 1682364184321 // meqdar zaman separi shode az sale 1970 ta be alan be soorat mili second.

  //hata mitavanim ba voroodi dadan be function Date yek tarikh va zaman khas ra vared konim. ex:
    const date2 = new Date(2004, 7, 22); //--> Aug 22 2004
    const date3 = new Date(2004, 7, 22, 22, 31, 15); //--> Aug 22 2004 22:31:15
    const date4 = new Date(1682364184321); //--> Aug 23 2011 16:30:15 //tabdil milisecond be tarikh o zamin.
    const date5 = new Date("4/9/2024"); //--> May 9 2024
    const date6 = new Date("9 May 2024"); //--> May 9 2024

  //getFullYear: sale konooni ra neshan midahad. ex:
    console.log(date.getFullYear()); //--> 2024
  //getMonth: mahe konooni ra menhaye yek neshan midahad chon index mah ha az 0 ta 11 ast. ex:
    console.log(date.getMonth()); //--> 4
  //getDate: rooze konooni ra neshan midahad. ex:
    console.log(date.getDate()); //--> 9
  //getHours, getMinutes, getSeconds, getMiliseconds: saat, daghighe, saniye va milisaniye konnoni ra neshan midahad. ex:
    console.log(date.getHours()); //--> 20 (saat 8 shab)
    console.log(date.getMinutes()); //--> 31
    console.log(date.getSeconds()); //--> 56
    console.log(date.getMilliseconds()); //--> 45
  //getDay: rooz konooni ra neshan midahad ama mesl mah ha daraye index hastand. hamchenin akhar hafte dar js rooz shanbe (sat) ast va baraye hamin index 0 az yekshanbe shoru mishavad. ex:
    console.log(date.getDay()); //--> 4

  //UTC time: baraye inke saat jahani ra be dast avarim faghad kafi ast beyn get va Hours ya baghie method ha yek UTC ezafe konim. ex:
    console.log(date.getUTCHours()); //--> 15
    console.log(date.getUTCMinutes()); //--> 35

  //baraye behtar neshan dadan tarikh va zaman be karbar ha mitavanim inkar ra konim:
    console.log(date.toLocaleDateString()); //--> 5/9/2024
    console.log(date.toLocaleTimeString()); //--> 20:31:53 PM

  //setInterval: mitavanim yek code khas ra dar yek time moshakhas be soorat loop ejra konim. voroodi aval yek function ya code va voroodi dovom timeii ke mikhaiim baad an code ejra shavad ra be soorat millisecond vared mikonim. ex:
    const interval = setInterval(()=>console.log(counter++), 1000);
  //va vaghti bekhaiim baad yek modat an ra motevaghef konim, bayad dar function voroodi, yek shart benevisim va vaghti be an shart resid, az clearInterval estefade konim. ex:
    const interval2 = setInterval(() => {
      let counter = 0
      console.log(counter++);
      if (counter >= 5){
        console.log(finished);
        clearInterval(interval2); // dar () nayad esm variableii ke function interval ma zakhire shode ra benevisim.
      }
    }, 1000);
    
  //setTimeout: mesl setInterval voroodi migirad ama fargh an dar in ast ke baad az zamani ke be an dadim faghad yekbar code hara ejra mikonad.
    const timeout = setTimeout(()=>console.log("salam"), 2000); //baad az 2 saniye yekbar salam ra chap mikonad.

  //va baraye clear kardan timeout ham az clearTimeout estfade mikonim. ex:
    clearTimeout(timeout); //esm variable dar () neveshte mishavad. 



    
//Error Handling:
  //gahi oghat vaghti barname ma ke havi function ha ya code haye ziadi ast ra ejra mikonim, momkene be errori dar yek ya chand bakhsh barname bar bokhorim ke baes crash shodan kol barname mishavad va nmigozarad baghie code ha ejra shavand. baraye rafe in moshkel az trry va catch estefade mikonim:
    const like3 = (likes) => {
      let likeccounter = likes;
      likeccounter++;
      return likeccounter;
    };
    console.log(like3("salam")); //--> Error!

    try {
      console.log(like3("salam")); //bakhsh ejraii barname ke ehtemal borooz error ra dar inja gharar midahim.
    } catch (error) {
      console.log("Error! Please try again."); //agar function be error nakhorad bakhsh bala dar try ejra mishavad ama agar be error khord bakhsh dakhel catch ejra mishavad va baghie barname ra ham crash nmikonad.
    }

  //