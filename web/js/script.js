            $(document).ready(function() {
                $("#webcam").scriptcam({
                    width: 320,
                    height: 240,
                    showMicrophoneErrors:false,
                    onError:onError,
                    cornerRadius:20,
                    disableHardwareAcceleration:1,
                    cornerColor:'e3e5e2',
                    onWebcamReady:onWebcamReady,
                    uploadImage:'upload.gif',
                    onPictureAsBase64:base64_tofield_and_image
                });
            });
			
            function base64_tofield() {
                $('#formfield').val($.scriptcam.getFrameAsBase64());
            };
            function base64_toimage() {
                $('#image').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
            };
            function base64_tofield_and_image(b64) {
                $('#formfield').val(b64);
                $('#image').attr("src","data:image/png;base64,"+b64);
            };
            function changeCamera() {
                $.scriptcam.changeCamera($('#cameraNames').val());
            }
            function onError(errorId,errorMsg) {
                $( "#btn1" ).attr( "disabled", true );
                $( "#btn2" ).attr( "disabled", true );
                alert(errorMsg);
            }          
            function onWebcamReady(cameraNames,camera,microphoneNames,microphone,volume) {
                $.each(cameraNames, function(index, text) {
                    $('#cameraNames').append( $('<option></option>').val(index).html(text) )
                });
                $('#cameraNames').val(camera);
            }

            function chat(){
              new Ajax.Request('/SnapChat/chat', {
              method: 'post',
              parameters:'message='+$('#message').value + "by="+$('head title').text(),
              });

            }
            
            function updateChat(){
                new Ajax.PeriodicalUpdater('chatArea', '/SnapChat/chat?time='+Math.random()*99999,{
                    method: 'get'
                });
            };
            
            $(document).ready(function() {
                
                $('#showHideBtn').click(function() {
                    $('#showHide').toggle("slide");
                });
                $('#send').click(function(){
                    chat();
                    alert('abc');
                });
                
            });
            
           
