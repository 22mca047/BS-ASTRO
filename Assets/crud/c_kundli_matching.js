document.getElementById("myForm").addEventListener("submit", async (event) => {
event.preventDefault(); // Prevent form submission

  const api = "match_astro_details";
  const userId = "625157";
  const apiKey = "ed404cb643e1adff2c107a2ec245c9f0";
  
  var dob_time = document.getElementById("dob_time");
  var male = new Date(dob_time.value);

  var fdob_time = document.getElementById("fdob_time");
  var female = new Date(fdob_time.value);

  const now = new Date()
  const data = {
    m_day: male.getDate(),
    m_month: male.getMonth() + 1, // Add 1 because months are zero-based
    m_year: male.getFullYear(),
    m_hour: male.getHours(),
    m_min: male.getMinutes(),
    m_lat: document.getElementById("lat").value,
    m_lon: document.getElementById("lon").value,
    m_tzone: now.getTimezoneOffset() / 60,

    f_day: male.getDate(),
    f_month: male.getMonth() + 1, // Add 1 because months are zero-based
    f_year: male.getFullYear(),
    f_hour: male.getHours(),
    f_min: male.getMinutes(),
    f_lat: document.getElementById("flat").value,
    f_lon: document.getElementById("flon").value,
    f_tzone: now.getTimezoneOffset() / 60
  };

  const auth = "Basic " + btoa(userId + ":" + apiKey);
  // console.log(data)

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
      return res;
    })
    .then(function (responseData) {
      // console.log(responseData)
      fetch("http://localhost:8080/r_kundli_matching", {
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
          return res;
        })
        .then(function (responseData) {
          // console.log(responseData)
          
          let tabledata =       
      ` <div class="review" style="background:radial-gradient(#cfcfcf,#A9A9A9);" padding-left:40px">
          <div class="small-container">
            
            <div class="row" style="flex-wrap:none;">      
                  <div class="col-2">
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Male </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Ascendant</th>
                          <td>${responseData.male_astro_details.ascendant}</td>
                        </tr>  
                        <tr>
                          <th>Varna</th>
                          <td>${responseData.male_astro_details.Varna}</td>
                        </tr>
                        <tr>
                          <th>Vashya</th>
                          <td>${responseData.male_astro_details.Vashya}</td>
                        </tr>
                        <tr>  
                          <th>Yoni</th>
                          <td>${responseData.male_astro_details.Yoni}</td>
                        </tr>
                        <tr>
                          <th>Gan</th>
                          <td>${responseData.male_astro_details.Gan}</td>
                        </tr>
                        <tr>                            
                          <th>Nadi</th>
                          <td>${responseData.male_astro_details.Nadi}</td>
                        </tr>
                        <tr>
                          <th>SignLord</th>
                          <td>${responseData.male_astro_details.SignLord}</td>
                        </tr>  
                        <tr>
                          <th>sign</th>
                          <td>${responseData.male_astro_details.sign}</td>
                        </tr>
                        <tr>
                          <th>Naksahtra</th>
                          <td>${responseData.male_astro_details.Naksahtra}</td>
                        </tr>
                        <tr>  
                          <th>NaksahtraLord</th>
                          <td>${responseData.male_astro_details.NaksahtraLord}</td>
                        </tr>
                        <tr>
                          <th>Charan</th>
                          <td>${responseData.male_astro_details.Charan}</td>
                        </tr>
                        <tr>                            
                          <th>Yog</th>
                          <td>${responseData.male_astro_details.Yog}</td>
                        </tr>
                        <tr>
                          <th>Karan</th>
                          <td>${responseData.male_astro_details.Karan}</td>
                        </tr>  
                        <tr>
                          <th>Tithi</th>
                          <td>${responseData.male_astro_details.Tithi}</td>
                        </tr>
                        <tr>
                          <th>Yunja</th>
                          <td>${responseData.male_astro_details.yunja}</td>
                        </tr>
                        <tr>  
                          <th>Tatva</th>
                          <td>${responseData.male_astro_details.tatva}</td>
                        </tr>
                        <tr>
                          <th>Name Alphabet</th>
                          <td>${responseData.male_astro_details.name_alphabet}</td>
                        </tr>
                        <tr>                            
                          <th>Paya</th>
                          <td>${responseData.male_astro_details.paya}</td>
                        </tr>                          
                    </table>
                </div>
                
                <div class="col-2">
                    <div class="title" style = "margin:0 10px;">
                        <h4><b> Female </b> </h4>
                    </div>
                    <table>
                        <tr>
                          <th>Ascendant</th>
                          <td>${responseData.female_astro_details.ascendant}</td>
                        </tr>  
                        <tr>
                          <th>Varna</th>
                          <td>${responseData.female_astro_details.Varna}</td>
                        </tr>
                        <tr>
                          <th>Vashya</th>
                          <td>${responseData.female_astro_details.Vashya}</td>
                        </tr>
                        <tr>  
                          <th>Yoni</th>
                          <td>${responseData.female_astro_details.Yoni}</td>
                        </tr>
                        <tr>
                          <th>Gan</th>
                          <td>${responseData.female_astro_details.Gan}</td>
                        </tr>
                        <tr>                            
                          <th>Nadi</th>
                          <td>${responseData.female_astro_details.Nadi}</td>
                        </tr>
                        <tr>
                          <th>SignLord</th>
                          <td>${responseData.female_astro_details.SignLord}</td>
                        </tr>  
                        <tr>
                          <th>Sign</th>
                          <td>${responseData.female_astro_details.sign}</td>
                        </tr>
                        <tr>
                          <th>Naksahtra</th>
                          <td>${responseData.female_astro_details.Naksahtra}</td>
                        </tr>
                        <tr>  
                          <th>Naksahtra Lord</th>
                          <td>${responseData.female_astro_details.NaksahtraLord}</td>
                        </tr>
                        <tr>
                          <th>Charan</th>
                          <td>${responseData.female_astro_details.Charan}</td>
                        </tr>
                        <tr>                            
                          <th>Yog</th>
                          <td>${responseData.female_astro_details.Yog}</td>
                        </tr>
                        <tr>
                          <th>Karan</th>
                          <td>${responseData.female_astro_details.Karan}</td>
                        </tr>  
                        <tr>
                          <th>Tithi</th>
                          <td>${responseData.female_astro_details.Tithi}</td>
                        </tr>
                        <tr>
                          <th>Yunja</th>
                          <td>${responseData.female_astro_details.yunja}</td>
                        </tr>
                        <tr>  
                          <th>Tatva</th>
                          <td>${responseData.female_astro_details.tatva}</td>
                        </tr>
                        <tr>
                          <th>Name Alphabet</th>
                          <td>${responseData.female_astro_details.name_alphabet}</td>
                        </tr>
                        <tr>                            
                          <th>Paya</th>
                          <td>${responseData.female_astro_details.paya}</td>
                        </tr>                          
                    </table>
                </div>
              </div>`
              document.getElementById("table_body").innerHTML = tabledata;
        })

        
        //match_ashtakoot_points
        let tabledata2 = ""
        const api2 = "match_ashtakoot_points";

                fetch("https://json.astrologyapi.com/v1/" + api2, {
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
                    return res;
                  })

                  .then(function (responseData) {
                  //   console.log(responseData)
                  // })
                   
                  let tabledata2 =       
      ` <div class="review" padding-left:40px">
          <div class="small-container">
              <div class="title">
                  <h3><b> Match Ashtakoot Points</b> </h3>
              </div>   
              
              <div class="row"> 
                    <table style="width:98%;">
                        <tr>
                          <th>Attribute</th>
                          <th>Male</th>
                          <th>Female</th>
                          <th>Received</th>
                          <th>Out of</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>Varna</td>
                          <td>${responseData.varna.male_koot_attribute}</td>
                          <td>${responseData.varna.female_koot_attribute}</td>
                          <td>${responseData.varna.received_points}</td>
                          <td>${responseData.varna.total_points}</td>
                          <td>${responseData.varna.description}</td>
                        </tr>
                        <tr>
                          <td>Vashya</td>
                          <td>${responseData.vashya.male_koot_attribute}</td>
                          <td>${responseData.vashya.female_koot_attribute}</td>
                          <td>${responseData.vashya.received_points}</td>
                          <td>${responseData.vashya.total_points}</td>
                          <td>${responseData.vashya.description}</td>
                        </tr>
                        <tr>
                          <td>Tara</td>
                          <td>${responseData.tara.male_koot_attribute}</td>
                          <td>${responseData.tara.female_koot_attribute}</td>
                          <td>${responseData.tara.received_points}</td>
                          <td>${responseData.tara.total_points}</td>
                          <td>${responseData.tara.description}</td>
                        </tr>
                        <tr>
                          <td>Yoni</td>
                          <td>${responseData.yoni.male_koot_attribute}</td>
                          <td>${responseData.yoni.female_koot_attribute}</td>
                          <td>${responseData.yoni.received_points}</td>
                          <td>${responseData.yoni.total_points}</td>
                          <td>${responseData.yoni.description}</td>
                        </tr>
                        <tr>
                          <td>Maitri</td>
                          <td>${responseData.maitri.male_koot_attribute}</td>
                          <td>${responseData.maitri.female_koot_attribute}</td>
                          <td>${responseData.maitri.received_points}</td>
                          <td>${responseData.maitri.total_points}</td>
                          <td>${responseData.maitri.description}</td>
                        </tr>
                        <tr>
                          <td>Gan</td>
                          <td>${responseData.gan.male_koot_attribute}</td>
                          <td>${responseData.gan.female_koot_attribute}</td>
                          <td>${responseData.gan.received_points}</td>
                          <td>${responseData.gan.total_points}</td>
                          <td>${responseData.gan.description}</td>
                        </tr>
                        <tr>
                          <td>Bhakut</td>
                          <td>${responseData.bhakut.male_koot_attribute}</td>
                          <td>${responseData.bhakut.female_koot_attribute}</td>
                          <td>${responseData.bhakut.received_points}</td>
                          <td>${responseData.bhakut.total_points}</td>
                          <td>${responseData.bhakut.description}</td>
                        </tr>
                        <tr>
                          <td>Nadi</td>
                          <td>${responseData.nadi.male_koot_attribute}</td>
                          <td>${responseData.nadi.female_koot_attribute}</td>
                          <td>${responseData.nadi.received_points}</td>
                          <td>${responseData.nadi.total_points}</td>
                          <td>${responseData.nadi.description}</td>
                        </tr>
                        <tr style="font-weight:bold"> 
                          <td>Total</td>
                          <td>-</td>
                          <td>-</td>
                          <td>${responseData.total.received_points}</td>
                          <td>${responseData.total.total_points}</td>
                          <td>Minimum Required : ${responseData.total.minimum_required}</td>
                           </tr>
                    </table>
                </div>

                <div class="title">
                  <h3><b> Conclusion</b> </h3>
                </div> 
                  <div class="row"> 
                    <table style="width:98%;">
                      <tr>
                        <td style="width:100px"><b>Status  :</b></td>
                        <td>${responseData.conclusion.status}</td>
                      </tr>
                      <tr>
                        <td style="width:100px"><b>Report  :</b></td>
                        <td>${responseData.conclusion.report}</td>
                      </tr>
                    </table>
              </div>`
              document.getElementById("table_body2").innerHTML = tabledata2;
                
        })
        .catch(function (error) {
          console.log(error);
        })     
      })
    .catch(function (error) {
      console.log(error);
    })
  });