// docs/assets/script.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderChart(data);
      renderList(data);
    });
});

function renderChart(data) {
  const chart = echarts.init(document.getElementById('chart'));
  const option = { /* 同之前的图表配置 */ };
  chart.setOption(option);
}

function renderList(data) {
  const list = document.createElement('ul');
  data.results.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
    list.appendChild(li);
  });
  document.body.appendChild(list);
}
