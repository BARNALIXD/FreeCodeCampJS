function wordBlanks(noun, verb, adjective, adverb) {
    var result = "";
    result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb + ".";
    return result;
}

console.log(wordBlanks("dog", "ran", "quick", "quickly"));
console.log(wordBlanks("cat", "jumped", "lazy", "slowly"));