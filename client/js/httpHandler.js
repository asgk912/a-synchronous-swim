(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////


  //create a random swim request
  const randomSwimRequest =() => {
    //ajax call
    $.ajax({
      type: 'GET',
      //reference serverURL
      url: serverUrl,
      dataType: 'text',
      // cache: false,
      // contentType: false,
      // processData: false,
      success: (command) => {
        // setTimeout(randomSwimRequest, 500);
        //console.log("data", command);
        SwimTeam.move(command);

      }
    });
  };

  randomSwimRequest();

  const backgroundImageRequest =() => {
    //ajax call
    $.ajax({
      type: 'GET',
      //reference serverURL
      url: serverUrl,
      dataType: 'html',
      // cache: false,
      // contentType: false,
      // processData: false,
      success: (data) => {
        // setTimeout(backgroundImageRequest, 1500);
        //console.log("data", command);
        // SwimTeam.move(command);

      }
    });
  };

  backgroundImageRequest();



  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
