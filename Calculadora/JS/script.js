function addToInput(value) {
    document.getElementById('calc-number').value += value;
}
function clearInput() {
    document.getElementById('calc-number').value = '';
}
function calculate() {
    try {
    document.getElementById('calc-number').value = eval(document.getElementById('calc-number').value);
    } catch (error) {
    document.getElementById('calc-number').value = 'Erro';
}}