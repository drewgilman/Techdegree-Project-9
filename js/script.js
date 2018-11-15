const closeAlertButton = document.querySelector('.alert-close');
const alertBox = document.querySelector('.alertbox');
const notificationDot = document.querySelector('.notification-dot');
const messageSubmitButton = document.querySelector('#userMessageSubmit');
const usersearch = document.querySelector('#usersearch');
const usermessage = document.querySelector('#usermessage');

closeAlertButton.addEventListener('click', (e)=>{
  alertBox.style.display = 'none';
  notificationDot.style.display = 'none';
});

messageSubmitButton.addEventListener('click', (e)=>{
  if (usersearch.value == ""){
    usersearch.style.border = "2px solid red";
    alert("Username field required. Please type name of user.");
  } else if(usermessage.value == ""){
    usersearch.style.border = "1px solid lightgrey";
    usermessage.style.border = "2px solid red";
    alert("Message field required. Please type a message.");
  } else {
    usersearch.style.border = "1px solid lightgrey";
    usermessage.style.border = "1px solid lightgrey";
    confirm("Message sent!");
    usersearch.value = "";
    usermessage.value = "";
  }
});



const ctx = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          data: [640, 510, 690, 600, 670, 650, 915],
          backgroundColor: 'rgba(115, 119, 191, 0.3)',
          lineTension: 0,
          pointRadius: 8,
          pointHoverRadius:10,
          pointBorderWidth: 3,
          pointBorderColor:'rgba(115, 119, 191)',
          pointBackgroundColor:'white',
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        layout: {
          padding:20,
        }
      }
});

const ctx2 = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
          data: [54, 36, 62, 50, 60, 86, 90],
          backgroundColor: '#7477bf',
          barThickness: 1,
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: false,
        scales:{
          xAxes:[{
            barPercentage: .66,
          }]
        }

      }
});

const ctx3 = document.getElementById('piechart').getContext('2d');
const doughnutchart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
          data: [40, 15, 45],
          backgroundColor: ['#7477bf','#81c98f','#74b1bf' ],
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: 'right',
        }
      }
});
