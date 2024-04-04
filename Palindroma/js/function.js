console.log("caricato");
function palindrome(word) {

    let verseA = "";

    for (let i = word.length - 1; i >= 0 ; i--) {
        verseA += word[i];
    }

    if (word === verseA) {
        return true;
    }

    return false;
}