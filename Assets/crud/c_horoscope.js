document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form submission
  
    const api = "western_horoscope";
    const userId = "625159";
    const apiKey = "c133f95560be8084f93becf0fbdef71a";
  
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
  
    // console.log(data);
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
        const res = response.json()
        // console.log(res)
        return res;
      })
      .then(function (responseData) {
        // console.log(responseData);
        fetch("http://localhost:8080/r_horoscope", {
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
            // console.log(responseData);            
            let planetdata="";
            let tabledata = "";
            let housedata = "";
            let aspectsdata = "";
  
            responseData.aspects.map((element) => {  
              aspectsdata += `<tr>
                                <td>${element.aspecting_planet}</td>
                                <td>${element.aspected_planet}</td>
                                <td>${element.aspecting_planet_id}</td>
                                <td>${element.aspected_planet_id}</td>
                                <td>${element.type}</td>
                                <td>${element.orb}</td>
                                <td>${element.diff}</td>
                             </tr>`
                          });
             
            responseData.houses.map((element) => {  
              housedata += `<tr>
                              <td>${element.house}</td>
                              <td>${element.sign}</td>
                              <td>${element.degree}</td>
                           </tr>`
                          });
  
          responseData.planets.map((element) => {  
          planetdata += `<tr>
                          <td>${element.name}</td>
                          <td>${element.full_degree}</td>
                          <td>${element.norm_degree}</td>
                          <td>${element.speed}</td>
                          <td>${element.is_retro}</td>
                          <td>${element.sign}</td>
                          <td>${element.house}</td>
                        </tr>`
                      });
  
            tabledata = `<div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9);">
                    <div class="small-container">
                      <h2 class="title"style="margin:0 15px;">Horoscope Details</h2>
                      <div class="row">
                        <div class="col-2">
                          <div class="title" style="margin:0 10px;">
                            <h4><b> House  </b> </h4>
                          </div>
                          <table>
                            <tr>
                              <th>House</th>
                              <th>Sign</th>
                              <th>Degree</th>
                            </tr>
                            ${housedata}
                          </table>
                        </div>
                        
                        <div class="col-2">
                          <div class="title" style="margin:0 10px; margin-top: -65px;">
                            <h4><b> Lilith </b> </h4>
                          </div>
                          <table style="width: -webkit-fill-available;">
                            <tr>
                              <th>Name</th>
                              <td>${responseData.lilith.name}</td>
                            </tr>
                            <tr>
                              <th>Full Degree</th>
                              <td>${responseData.lilith.full_degree}</td>
                            </tr>
                            <tr>
                              <th>Normal Degree</th>
                              <td>${responseData.lilith.norm_degree}</td>
                            </tr>
                            <tr>
                              <th>Speed</th>
                              <td>${responseData.lilith.speed}</td>
                            </tr>
                            <tr>
                              <th>Is Retro ?</th>
                              <td>${responseData.lilith.is_retro}</td>
                            </tr>
                            <tr>
                              <th>Sign id</th>
                              <td>${responseData.lilith.sign_id}</td>
                            </tr>
                            <tr>
                              <th>Sign</th>
                              <td>${responseData.lilith.sign}</td>
                            </tr>
                            <tr>
                              <th>House</th>
                              <td>${responseData.lilith.house}</td>
                            </tr>
                          </table>
                          <table style="width: -webkit-fill-available;">
                            <tr>
                              <th>Ascendant</th>
                              <td>${responseData.ascendant}</td>
                            </tr>
                            <tr>
                              <th>Midheaven</th>
                              <td>${responseData.midheaven}</td>
                            </tr>
                            <tr>
                              <th>Vertex</th>
                              <td>${responseData.vertex}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9); margin-bottom: -1.7%;">
                    <div class="small-container">
                      <div class="title"style="margin:0 15px; ">
                        <h4><b> Planets </b> </h4>
                      </div>
                      <table style="width: -webkit-fill-available;">
                        <tr>
                          <th>Name</th>
                          <th>Normal Degree</th>
                          <th>Full Degree</th>
                          <th>Speed</th>
                          <th>Is Retro ?</th>
                          <th>Sign</th>
                          <th>House</th>
                        </tr>
                        ${planetdata}
                      </table>
                    </div>
                  </div>
                  <div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9); margin-bottom: -1.7%; padding-bottom:2%">
                    <div class="small-container">
                      <div class="title"style="margin:0 15px; ">
                        <h4><b> Aspects </b> </h4>
                      </div>
                      <table style="width: -webkit-fill-available;">
                        <tr>
                          <th>Aspecting Planet</th>
                          <th>Aspected Planet</th>
                          <th>Aspecting Planet Id</th>
                          <th>Aspected Planet Id</th>
                          <th>Type</th>
                          <th>Orbit</th>
                          <th>Diff</th>
                        </tr>
                        ${aspectsdata}
                      </table>
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
    });