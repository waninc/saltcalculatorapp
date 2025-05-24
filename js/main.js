// Main functionality for calculators

function calculateSalt() {
  const weightInput = document.getElementById("weight").value;
  const saltPercentage = parseFloat(document.getElementById("saltPercent").value);

  if (validateInput(weightInput)) {
    const saltData = calculateSaltAmount(weightInput, saltPercentage);
    document.getElementById("salt").value = `${saltData.ml.toFixed(2)} ml | ${saltData.tsp.toFixed(2)} tsp | ${saltData.percent.toFixed(2)}%`;
    updateChart(saltData.percent, saltData.tsp);
    saveToHistory(saltData);
    updateConvertedUnits(saltData);
    showHealthTips(saltData.percent);
    addProgressBar(saltData.percent, saltData.tsp);
  } else {
    alert("Please enter valid weight (e.g., 500g or 1kg)");
  }
}

function validateInput(weight) {
  return /^[0-9]+(\.[0-9]+)?\s*(g|kg)$/i.test(weight);
}

function calculateSaltAmount(weight, percentage = 0.5) {
  let numericWeight = parseFloat(weight);
  const unit = weight.toLowerCase().includes("kg") ? 1000 : 1;
  numericWeight *= unit;
  const saltRatio = percentage / 100;
  const saltInGrams = numericWeight * saltRatio;
  const saltInMl = saltInGrams * 1.2;
  const saltInTsp = saltInMl / 5;
  const saltPercent = (saltInGrams / numericWeight) * 100;

  return {
    ml: saltInMl,
    tsp: saltInTsp,
    percent: saltPercent,
    weight: numericWeight,
    grams: saltInGrams
  };
}

function addProgressBar(percent, measure) {
  const container = document.querySelector('.progress-container');
  if (!container) return;
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.innerHTML = `
    <div class="progress-fill" style="width: ${percent}%">
      <div class="progress-text">
        ${percent.toFixed(1)}% (${measure.toFixed(2)} ${document.getElementById('chart-tsp') ? 'tsp' : 'tbsp'})
      </div>
    </div>
  `;
  container.insertBefore(bar, container.firstChild);
  container.scrollTop = 0;
}

function updateChart(percent, measure) {
  const chart = document.querySelector('.donut-chart');
  if (!chart) return;
  const chartPercent = document.getElementById('chart-percent');
  let chartMeasure = document.getElementById('chart-tsp') || document.getElementById('chart-tbsp');
  chart.style.background = `conic-gradient(var(--primary-color) 0% ${percent}%, #eee ${percent}% 100%)`;
  if (chartPercent) chartPercent.textContent = `${percent.toFixed(1)}%`;
  if (chartMeasure) {
    const unitLabel = chartMeasure.id === 'chart-tsp' ? 'tsp' : 'tbsp';
    chartMeasure.textContent = `${measure.toFixed(2)} ${unitLabel}`;
  }
}

function saveToHistory(data) {
  const historyList = document.getElementById('historyList');
  if (!historyList) return;
  const entry = document.createElement('div');
  entry.className = 'history-entry';
  entry.innerHTML = `
    <strong>${new Date().toLocaleTimeString()}:</strong>
    ${data.weight}g → ${(data.tsp || data.tbsp).toFixed(2)} ${data.tsp ? 'tsp' : 'tbsp'}
  `;
  historyList.prepend(entry);
}

function showHealthTips(percent) {
  // For salt calculations
  const tips = document.getElementById('healthTips');
  if (!tips) return;
  let message = "";
  if (percent < 0.5) {
    message = "⚠️ Very low salt content. May affect food preservation.";
  } else if (percent < 1) {
    message = "👍 Healthy range for most adults";
  } else {
    message = "⚠️ Consider reducing salt for heart health";
  }
  tips.innerHTML = `<div class="tip">${message}</div>`;
}

function showSugarHealthTips(percent) {
  const tips = document.getElementById('healthTips');
  if (!tips) return;
  let message = "";
  if (percent < 5) {
    message = "👍 Healthy sugar level for most recipes";
  } else if (percent < 10) {
    message = "⚠️ Moderate sugar level – acceptable for desserts";
  } else {
    message = "⚠️ High sugar content – consider reducing for health benefits";
  }
  tips.innerHTML = `<div class="tip">${message}</div>`;
}

function updateConvertedUnits(data) {
  const convertedUnits = document.getElementById('convertedUnits');
  if (!convertedUnits) return;
  // Placeholder: Add any conversion logic if needed.
  convertedUnits.textContent = '';
}

document.getElementById('unitToggle').addEventListener('change', function () {
  const isMetric = !this.checked;
  document.getElementById('weight').placeholder = isMetric ? "e.g., 500g or 1kg" : "e.g., 16oz or 2lb";
});

document.getElementById('saltPercent')?.addEventListener('input', function () {
  document.getElementById('adjustedValues').textContent = `Using ${this.value}% of food weight for calculations`;
});

document.getElementById('sugarPercent')?.addEventListener('input', function () {
  document.getElementById('adjustedValues').textContent = `Using ${this.value}% of food weight for calculations`;
});

function resetFields() {
  document.getElementById("weight").value = '';
  if (document.getElementById("salt")) document.getElementById("salt").value = '';
  if (document.getElementById("sugar")) document.getElementById("sugar").value = '';
  const progressContainer = document.querySelector('.progress-container');
  if (progressContainer) progressContainer.innerHTML = '';
  const historyList = document.getElementById('historyList');
  if (