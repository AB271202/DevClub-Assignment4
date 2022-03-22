let date= new Date()
let begin =String(date.getFullYear())+"-"+String(date.getMonth())+"-"+String(date.getDate())
let end= String(date.getFullYear())+"-"+String(date.getMonth()+1)+"-"+String(date.getDate())

let req2= new XMLHttpRequest();
req2.open("GET",`https://api.covid19api.com/country/india/status/confirmed?from=${begin}T00:00:00Z&to=${end}T00:00:00Z`,false)
req2.send()

let month=JSON.parse(req2.response)
let cases=[], dates=[]
for (let i=0; i<month.length; i++){
    cases.push(month[i].Cases)
    dates.push(month[i].Date.slice(0,-10))
}

const labels = dates

  const data = {
    labels: labels,
    datasets: [{
      label: 'COVID Cases in India In the last few days',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: cases
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };