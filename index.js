window.onload = function () {
    let setbg = document.getElementById('setbg')
    let setBold = document.getElementById('setBold')
    let del = document.getElementById('del')
    let setFontCol = document.getElementById('setFontCol')
    let setItalic = document.getElementById('setItalic');

    setBold.addEventListener('click',function () {
        document.execCommand('bold',false,null)
    })

    setbg.addEventListener('click',()=>{
        document.execCommand('backcolor',false,'red')
    })
    del.addEventListener('click',()=>{
        document.execCommand('delete',false,null)
    })
    setFontCol.addEventListener('click',()=>{
        document.execCommand('forecolor',true,'yellow')
    })
    setItalic.addEventListener('click',()=>{
        document.execCommand('italic',false,null)
    })
}
