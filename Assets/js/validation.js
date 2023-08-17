$(function () {
    
    $('#myForm').validate({
      rules: {
        
        // user's form (login-signup-forgot)
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true,
        },
        dob: {
          required: true
        },
        pass: {
          required: true,
          minlength: 6,
        },
        cpass: {
          required: true,
          minlength: 6,
        },
        mno: {
          required: true,
          length: 10,
        },

        // others
       
        gender:
        {
          required: true
        },
        dob_time: {
          required: true,
        },
        location: {
            required: true,
            minlength:3
        },

      // Female form
      fname:
        {
          required: true,
          minlength: 3
        },
      fgender:
        {
          required: true
        },
      fdob_time: {
            required: true,
          },
      flocation: {
          required: true,
          minlength:3
        },
    },

    // messages
      messages: {

        // user's form (login-signup-forgot)
        name: {
          required: "Please enter name.",
          minlength: "Minimum length of name is 3."
        },

        email: {
          required: "Please enter email id.",
          email: "Please enter valid email address <br>Must contain <b>@ & .</b>"
        },

        dob: {
          required: "Please enter DOB."
        },

        pass: {
          required: "Please enter Password.",
          minlength: "Password has at least <b>6</b> character's."
        },
        
        cpass: {
          required: "Please enter Password.",
          minlength: "Password has at least <b>6</b> character's."
        },

        mno: {
          required: "Please enter mobile number.",
        },
        
        //male messages
        gender: {
          required: "Please select gender."
        },
        dob_time: {
          required: "Please enter date and time.",
        },
        location: {
            required: "Please enter city.",
            // minlength: "Minimum length is 3."
        },

        // female messages
        fname: {
          required: "Please enter name.",
          minlength: "Minimum length of name is 3."
        },
        fgender: {
          required: "Please select gender."
        },
        fdob_time: {
            required: "Please enter date and time.",
          },
        flocation: {
              required: "Please enter city.",
              // minlength: "Minimum length is 3."
            },
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    });
  });