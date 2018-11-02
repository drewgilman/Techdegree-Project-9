const ctx = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          data: [540, 360, 720, 800, 770, 860, 900],
        }]
      },
      options: {
        maintainAspectRatio: false,
      }
});

const ctx2 = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
          data: [54, 36, 62, 50, 60, 86, 90],
        }]
      },
      options: {
        maintainAspectRatio: false,
      }
});

const ctx3 = document.getElementById('doughnutchart').getContext('2d');
const doughnutchart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
          data: [40, 15, 45],
        }]
      },
      options: {
        maintainAspectRatio: false,
      }
});
