//yek string va harf khas ra begirid va ba function begooiid ke che tedad az an harf dar string vojood darad.

const finder = (letter, text) => {
    text = text.toLowerCase(); //baraye inke letter haye bozorg va koochik ra hesab konad.
    let counter = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === letter){
            counter++;
        }
    };
    return counter;
};

const result = finder("a", "hello, my name is Parsa and I'm so happy to see you again.");
console.log(result); //--> 7