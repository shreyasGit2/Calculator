let currentInput ='';
function press(value)
{
  currentInput += value;
  document.querySelector('.displayElement').value = currentInput;
}
function calculate(ntg)
{
  currentInput = eval(currentInput);
  document.querySelector('.displayElement').value = currentInput;
}
function clearDisplay()
{
  currentInput = '';
  document.querySelector('.displayElement').value = '';
}
function deleteLast() {
  const display = document.querySelector('.displayElement');
  display.value = display.value.slice(0, -1);
}

