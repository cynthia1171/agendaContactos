var idContacto = 0;
$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

function saveContact(){
  var name = $('#name').val();
  var telefono = $('#telefono').val();

  

  $('#contactos').append('<div class="col m12 contact_' + idContacto +'">'+
                          '<div class="container">'+
                            '<div class="card horizontal margenAlto">'+
                              '<div class="card-stacked">'+
                                '<div class="card-content">'+
                                  '<h3>' + name + '</h3>' +
                                  '<p>' + telefono + '</p>' +
                                  '<button type="submit" class="waves-effect waves-light btn right btn-top"><i class="material-icons btn-eliminar">delete</i></button>' +
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>'+  
                        '</div>'
  );
  $('.btn-eliminar').click(function () {
    alert('contact_' + idContacto);
  });

  var name = $('#name').val('');
  var telefono = $('#telefono').val('');
  $('#modal1').modal('close');
  idContacto++;  
}




