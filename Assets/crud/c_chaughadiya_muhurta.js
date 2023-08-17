document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "chaughadiya_muhurta";
  const userId = "625157";
  const apiKey = "ed404cb643e1adff2c107a2ec245c9f0";

  const now = new Date()
  const data = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    min: now.getMinutes(),
    lat: document.getElementById("lat").value,
    lon: document.getElementById("lon").value,
    tzone: now.getTimezoneOffset() / 60
  };

  const auth = "Basic " + btoa(userId + ":" + apiKey);

  //   console.log(data);
  fetch("https://json.astrologyapi.com/v1/" + api, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("API request failed. Status: " + response.status);
      }
      const res = response.json();
      // console.log(res)
      return res;
    })
    .then(function (responseData) {
      // console.log(responseData)
      fetch("http://localhost:8080/r_chaughadiya_muhurta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, ...responseData }),
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("API request failed. Status: " + response.status);
          }
          const res = response.json();
          // console.log(res)
          return res;
        })
        .then(function (responseData) {
          // console.log(responseData)
          
          let tabledata = "";
          let daydata = "";
          let nightdata = "";

          responseData.chaughadiya.day.map((element) => {
            daydata += `
                  <tr>
                      <td>${element.time}</td>
                      <td>${element.muhurta}</td>
                  </tr>
                  `
          });
          responseData.chaughadiya.night.map((element) => {
            nightdata += `
                  <tr>
                      <td>${element.time}</td>
                      <td>${element.muhurta}</td>
                  </tr>
                  `
          });
          
          tabledata = 
          `<div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9);" padding-left:40px">
              <div class="small-container">
                  <div class="row" style="flex-wrap:none;">      
                      <div class="col-2">
                          <div class="title" style = "margin:0 10px;">
                              <h4><b> Day </b> </h4>
                          </div>
                                      <table>
                                          <tr>
                                              <th>Time</th>
                                              <th>Muhurta</th>
                                         </tr>
                                          ${nightdata}
                                      </table>
                                 </div>
                                  <div class="col-2">
                                      <div class="title" style="margin:0 10px;">
                                          <h4><b> Night </b> </h4>
                                      </div>
                                      <table>
                                          <tr>
                                              <th>Time</th>
                                              <th>Muhurta</th>
                                          </tr>
                                          ${daydata}
                                     </table>
                                 </div>
                             </div>
                          </div>
                      </div>`
          // console.log(tabledata)
          document.getElementById("table_body").innerHTML = tabledata;
        })
        .catch(function (error) {
          console.log(error);
        })  
    })
    .catch(function (error) {
      console.log(error);
    })
  })