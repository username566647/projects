function ask(question, yes, no) {
    if (prompt(question)== "просто") yes()
    else no();
}
function showOk() {
    alert("Лан, оставайся и наслаждайся)")
}
function showCancel() {
     alert("Эй, уходи быстро!!!")
 }
ask("Зачем вы тут?", showOk, showCancel)