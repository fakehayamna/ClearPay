const transactionsInput = document.querySelector("#transactions");
const averageInput = document.querySelector("#average");

const totalVolume = document.querySelector("#total-volume");
const feeAmount = document.querySelector("#fee-amount");
const totalCost = document.querySelector("#total-cost");

function calculatePricing() {
  if (!transactionsInput || !averageInput) return;

  const transactions = Number(transactionsInput.value) || 0;
  const average = Number(averageInput.value) || 0;

  const volume = transactions * average;

  const fee = volume * 0.015;

  totalVolume.textContent = `$${volume.toLocaleString()}`;
  feeAmount.textContent = `$${fee.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;

  totalCost.textContent = `$${fee.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

transactionsInput?.addEventListener("input", calculatePricing);
averageInput?.addEventListener("input", calculatePricing);

calculatePricing();
