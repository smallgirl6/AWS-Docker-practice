fetch("/api/display",{
}).then(function(response){
        return response.json();//將資料用JSON的格式詮釋成:物件和陣列的組合
}).then(function(result){ 
    if (result["ok"] ==true){
        for (let i = 0; i <result["json_data"].data.length; i++) {
            let div = document.createElement("div");
            div.className = "upload-content";
            
            let textDiv = document.createElement("div");
            textDiv.className = "displayed-text";
            textDiv.textContent= result["json_data"].data[i].message;
            div.appendChild(textDiv);
            
            let picDiv = document.createElement("div");
            picDiv.className = "displayed-pic";
            div.appendChild(picDiv);
            
            let img = document.createElement("img");
            img.className = "displayed-pic-img";
            img.src = "https://d3ft4i20lr80h7.cloudfront.net/" + result["json_data"].data[i].pic;
            picDiv.appendChild(img);
            
            let hr = document.createElement("hr");
            hr.className = "hr1";
            div.appendChild(hr);

            let content= document.querySelector('.content')
            content.appendChild(div);
            }
    }
    if (result["error"] ==true){
        location.reload();   
    }
});

//上傳照片&留言的function
function uploaddata(){
    const userimage= document.querySelector('#uploader-user-pic').files[0];  
    const usermessage = document.getElementById('text-content-input').value; 
    const errormessage= document.querySelector('.error')
    if ((userimage !=null) && (usermessage.length!=0)){
        let formData = new FormData();  //創建了一個新的 FormData 對象(表單數據)
        formData.append('usermessage', usermessage);
        formData.append('userimage', userimage); 
        fetch("/api/image-uploade",{
            method:"POST",
            body:formData,
        }).then(function(response){
                return response.json();//將資料用JSON的格式詮釋成:物件和陣列的組合
        }).then(function(result){ 
            if (result["ok"] ==true){
                document.querySelector('#uploader-user-pic').value = "";
                document.querySelector('#text-content-input').value = "";
                location.reload();
            }
            if (result["error"] ==true){
                errormessage.textContent="圖片上傳失敗"
                document.querySelector('#uploader-user-pic').value = "";
                location.reload();     
            }
        });
    }
    else{
        errormessage.textContent="請輸入訊息以及選擇要上傳圖片"
    }
};
