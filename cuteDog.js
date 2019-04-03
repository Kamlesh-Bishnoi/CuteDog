
function fun(){
 function createNode(element)
{
    return document.createElement(element);
}
 
function append(parent,el)
{
    return parent.appendChild(el);
}
   
    var div=createNode('div');
     var img =createNode('img');
    append(div,img);
   
    $.ajax({
                   
        url:"https://dog.ceo/api/breeds/image/random/5",
        type:"GET",
       datatype:'JSON',
        success:function(response){
            for( var i=0;i<response.message.length;i++){
                $('#img'+i).attr("src",response.message[i]);           
                console.log( response.message[i]);
            }
                   }   
                  
            } );    
        }         



    