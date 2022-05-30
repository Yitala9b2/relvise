let zoom = document.querySelectorAll('.item-service');
for (let index = 0; index < zoom.length; index++) {
    zoom[index].addEventListener("mouseover", function(){
        zoom[index].style.backgroundColor="#0D5C63";
        zoom[index].style.color="#FFFFFF";
        if (index==0) {
            document.getElementById('file1').src = 'img/first_icons/icon4.svg';
            
        }
        else if  (index==1) {
            document.getElementById('file2').src = 'img/first_icons/icon5.svg';
            
        }
        else if  (index==2) {
            document.getElementById('file3').src = 'img/first_icons/icon6.svg';
            
        }}),
    zoom[index].addEventListener("mouseleave", function(){
            zoom[index].style.backgroundColor="white";
            zoom[index].style.color="black";
            if (index==0) {
                document.getElementById('file1').src = 'img/first_icons/icon1.svg';
                
            }
            else if  (index==1) {
                document.getElementById('file2').src = 'img/first_icons/icon2.svg';
                
            }
            else if  (index==2) {
                document.getElementById('file3').src = 'img/first_icons/icon3.svg';
                
            }
        })
    
}  

