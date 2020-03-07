const button = document.getElementById('submitButton');
const output = document.getElementById('decimalOut');
const input = document.getElementById('binaryIn');

function calculateDecimal() {
  let binary = input.value;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== '0' && binary[i] !== '1') {
      alert('Please enter only 0 and 1');
      input.value = '';
      return;
    }
  }

  output.innerHTML = parseInt(binary, 2);
  input.value = '';
}
