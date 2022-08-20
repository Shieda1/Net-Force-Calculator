// https://calculator.swiftutors.com/net-force-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netForceRadio = document.getElementById('netForceRadio');
const massRadio = document.getElementById('massRadio');
const accelerationRadio = document.getElementById('accelerationRadio');

let netForce;
let mass = v1;
let acceleration = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netForceRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass (kg)';
  variable2.textContent = 'Acceleration (m/s²)';
  mass = v1;
  acceleration = v2;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Force (N)';
  variable2.textContent = 'Acceleration (m/s²)';
  netForce = v1;
  acceleration = v2;
  result.textContent = '';
});

accelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Force (N)';
  variable2.textContent = 'Mass (kg)';
  netForce = v1;
  mass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(netForceRadio.checked)
    result.textContent = `Net Force = ${computeNetForce().toFixed(2)} N`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} kg`;

  else if(accelerationRadio.checked)
    result.textContent = `Acceleration = ${computeAcceleration().toFixed(2)} m/s²`;
})

// calculation

function computeNetForce() {
  return Number(mass.value) * Number(acceleration.value);
}

function computeMass() {
  return Number(netForce.value) / Number(acceleration.value);
}

function computeAcceleration() {
  return Number(netForce.value) / Number(mass.value);
}