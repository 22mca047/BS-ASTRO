document.getElementById("myForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const api1 = "astro_details"; //basic
    const api2 = "planets/extended"; //kundli
    const api3a = "kp_planets"; //kp1
    const api3b ="kp_house_cusps"; //kp2
    const api4 = "sarvashtak"; //ashtakvarga
    const api5a = "horo_chart_image/:D1"; //moon chart
    const api5b = "horo_chart_image/:chalit"; //chalit chart
    const api5c = "horo_chart_image/:SUN"; //SUN chart
    const api6a ="major_vdasha"; // Vimshottari dasha
    const api6b ="major_yogini_dasha"; // Yogini dasha
    
    const userId = "625157";
    const apiKey = "ed404cb643e1adff2c107a2ec245c9f0";

    var dob = document.getElementById("dob_time");
    var selectedDate = new Date(dob.value);

    const data = {
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        location: document.getElementById("location").value,
        day: selectedDate.getDate(),
        month: selectedDate.getMonth() + 1, // Add 1 because months are zero-based
        year: selectedDate.getFullYear(),
        hour: selectedDate.getHours(),
        min: selectedDate.getMinutes(),
        lat: document.getElementById("lat").value,
        lon: document.getElementById("lon").value,
        tzone: document.getElementById("tzone").value
    };

    const auth = "Basic " + btoa(userId + ":" + apiKey);

    // 1st api - basic(astro_details)
    fetch("https://json.astrologyapi.com/v1/" + api1, {
        method: "POST",
        headers: {
            Authorization: auth,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(function (response) {
            debugger
            if (!response.ok) {
                throw new Error("API request failed. Status: " + response.status);
            }
            const res = response.json();
            // console.log(res)
            return res;
        })
        .then(function (responseData) {
            // console.log(responseData)

            localStorage.setItem("api1", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";

            localStorage.setItem("mdata", JSON.stringify(data));
            window.location.href = "d_free_kundali.html";


        })
        .catch(function (error) {
            console.log(error);
        })



    // 2nd api - kundli(planets/extended)
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
            // console.log(res)
            return res;
        })
        .then(function (responseData) {
            // console.log(responseData)

            localStorage.setItem("api2", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })



    // 3a api - kp (kp_planets)
    fetch("https://json.astrologyapi.com/v1/" + api3a, {
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

            localStorage.setItem("api3a", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })


    // 3b api - kp (kp_house_cusps)
    fetch("https://json.astrologyapi.com/v1/" + api3b, {
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

            localStorage.setItem("api3b", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })


    // 4th api - ashtakvarga (sarvashtak)
    fetch("https://json.astrologyapi.com/v1/" + api4, {
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

            localStorage.setItem("api4", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })

     // 5a api - sun chart (horo_chart/:sun)
     fetch("https://json.astrologyapi.com/v1/" + api5a, {
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

            localStorage.setItem("api5a", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })

     // 5b api - moon chart (horo_chart/:moon)
     fetch("https://json.astrologyapi.com/v1/" + api5b, {
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

            localStorage.setItem("api5b", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })

     // 5c api - chalit chart (horo_chart/:chalit)
     fetch("https://json.astrologyapi.com/v1/" + api5c, {
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

            localStorage.setItem("api5c", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })

    // 6a api - vimshottari dasha (major_vdasha)
    fetch("https://json.astrologyapi.com/v1/" + api6a, {
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

            localStorage.setItem("api6a", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })

    // 6b api - yogini dasha (major_yogini_vdasha)
    fetch("https://json.astrologyapi.com/v1/" + api6b, {
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

            localStorage.setItem("api6b", JSON.stringify(responseData));
            window.location.href = "d_free_kundali.html";
        })
        .catch(function (error) {
            console.log(error);
        })
})