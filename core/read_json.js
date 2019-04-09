const s = document.createElement('script');
s.type = 'text/javascript';
s.src = 'jquery.js';
document.body.appendChild(s);
$(document).ready(function(){
   $.getJSON('config.json',function(result){
      var Group_name='<tr>';});
 $.each(result["Group_name"],function(i,item){
        Group_name += '<td>' + item[i] + '</td>' +'<td>' + '<input id="Group_name" type="checkbox">';
    });
    Group_name += '</tr>';
$('#chats_chosen').after(Group_name);
});
