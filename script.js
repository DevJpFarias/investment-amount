function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const months = parseFloat(document.getElementById("months").value);
  const monthly = parseFloat(document.getElementById("monthly").value);

  let amount = principal;

  for (let i = 1; i <= months; i++) {
    amount = amount * (1 + (rate / 100)) + monthly;
  }

  const resultDiv = document.getElementById("result");

  resultDiv
      .innerHTML =
      "Montante final: " +
      amount.toLocaleString(
          'pt-br',
          {
              style: 'currency',
              currency: 'BRL'
          }
      );
}
