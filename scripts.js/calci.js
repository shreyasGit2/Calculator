let currentInput = '';

function press(value) 
{
  currentInput += value;
  document.querySelector('.displayElement').value = currentInput;
}

function deleteLast() 
{
  currentInput = currentInput.slice(0, -1);
  document.querySelector('.displayElement').value = currentInput;
}

function clearDisplay() 
{
  currentInput = '';
  document.querySelector('.displayElement').value = '';
}

function calculate() 
{
  try 
  {
    currentInput = eval(currentInput).toString();
    document.querySelector('.displayElement').value = currentInput;
  } 
  catch (error) 
  {
    document.querySelector('.displayElement').value = 'Error';
  }
}


