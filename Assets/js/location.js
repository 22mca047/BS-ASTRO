 //male- Get Latitude & Longitude using geo-location
    $(document).ready(function () {
        var autocomplete;

        autocomplete = new google.maps.places.Autocomplete((document.getElementById('location')),
            {
                types: ['geocode'],
            });

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var near_place = autocomplete.getPlace();
        });
    });

        //female - Get Latitude & Longitude using geo-location
        $(document).ready(function () {
        var autocomplete;

        autocomplete = new google.maps.places.Autocomplete((document.getElementById('flocation')),
            {
                types: ['geocode'],
            });

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var near_place = autocomplete.getPlace();
        });
    });

    // male location
    function lat_lon() {
        // Create a geocoder object
        const geocoder = new google.maps.Geocoder();

        // Define the address you want to geocode
        const address = (document.getElementById("location").value);
        // console.log(address);
        
        // Perform geocoding
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK') {
                // Get the latitude and longitude coordinates
                const location = results[0].geometry.location;
                const latitude = location.lat();
                const longitude = location.lng();

                // console.log('male Latitude:', latitude);
                // console.log('male Longitude:', longitude);

                const lan_send = document.getElementById("lat");
                lan_send.value = latitude;

                const lon_send = document.getElementById("lon");
                lon_send.value = longitude;
            }
            // else
            // {
            //     console.error('Geocode was not successful for the following reason:', status);
            // }
        });
    }

    // female location
    function f_lat_lon() {
        // Create a geocoder object
        const geocoder = new google.maps.Geocoder();

        // Define the address you want to geocode
        const address = (document.getElementById("flocation").value);
        // console.log(address);
        
        // Perform geocoding
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK') {
                // Get the latitude and longitude coordinates
                const location = results[0].geometry.location;
                const latitude = location.lat();
                const longitude = location.lng();

                // console.log('female Latitude:', latitude);
                // console.log('female Longitude:', longitude);

                const lan_send = document.getElementById("flat");
                lan_send.value = latitude;

                const lon_send = document.getElementById("flon");
                lon_send.value = longitude;
            }
            // else
            // {
            //     console.error('Geocode was not successful for the following reason:', status);
            // }
        });
    }