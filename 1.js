

function transposeChordTo(amount) {
    var scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    var normalizeMap = { "Cb": "B", "Db": "C#", "Eb": "D#", "Fb": "E", "Gb": "F#", "Ab": "G#", "Bb": "A#", "E#": "F", "B#": "C" }
    var texts = document.querySelectorAll(".note_chordastic")
    var length = texts.length;
    var key = document.querySelectorAll(".key")[0].innerText
    var keyType = key.length
    console.log(keyType);
    if(keyType>2)var idx = scale.indexOf(key.charAt(0)+key.charAt(1))
    else var idx = scale.indexOf(key.charAt(0))
    keyType > 1 ? keyType = "m" : keyType = ""
    if (amount === 0) {
        if (key === "Am") return
        else {
            amount = 9 - idx
        }
    }
    for (var i = 0; i < length; i++) {
        var chords = texts[i].innerText
        var newChords = chords.replace(/[CDEFGAB](b|#)?/g, function (match) {
            var i = (scale.indexOf((normalizeMap[match] ? normalizeMap[match] : match)) + amount) % scale.length;
            return scale[i < 0 ? i + scale.length : i];
        })
        texts[i].innerText = newChords
    }
    if((idx+amount)<=11&&(idx+amount)>=0)document.querySelectorAll(".key")[0].innerText = scale[idx + amount]+keyType
    else if((idx+amount)<0)document.querySelectorAll(".key")[0].innerText = scale[11]+keyType
    else document.querySelectorAll(".key")[0].innerText = scale[0]+keyType
    console.log(document.querySelectorAll(".key")[0].innerText);
}