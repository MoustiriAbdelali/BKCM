const apiTires = "http://127.0.0.1:5000/api/GTires"

const getDataClinet = async ()  => {
  const res = await fetch ( apiTires);
  const data = await res.json();
  console.log(data);
}

getData();