// creating blurbWord.
export const blurbWord = (string, length) => {
    let blurbString;
    if(string.length > length){
        blurbString = string.substring(0, length) + "...";
        return blurbString;
    }
    return string;
}
