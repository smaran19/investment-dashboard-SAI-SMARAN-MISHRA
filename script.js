const ctx = document.getElementById('portfolioChart').getContext('2d');
const data = {
  labels: ['Adani Power', 'Infosys', 'HDFC Bank'],
  datasets: [
    {
      label: 'Invested (₹)',
      data: [100000, 80000, 60000],
      backgroundColor: '#0077b6'
    },
    {
      label: 'Current Value (₹)',
      data: [150000, 91000, 66000],
      backgroundColor: '#90e0ef'
    }
  ]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Investment vs Current Value'
      }
    },
    responsive: true
  }
};
new Chart(ctx, config);
