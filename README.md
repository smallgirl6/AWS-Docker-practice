
    <h1>AWS image upload to S3+ CDN + RDS+DOcker</h1>
    <h2>DEMO</h2>
    ![後端練習 — Mozilla Firefox 2023-01-15 19-29-15 (1)](https://user-images.githubusercontent.com/111422800/212541032-0d7f749e-009f-443c-9f62-5d51635543c7.gif)
     <h2>Detail</h2>
    <p> WEBsite : http://50.19.56.20:5005/.</p>
    <p> My Blog : http://50.19.56.20:5005/.</p>
      <ul>
        <li>AWS:https://hyggenini.com/aws-%e5%9c%96%e7%89%87%e4%b8%8a%e5%82%b3s3cdn%e5%bf%ab%e5%8f%96rds%e8%b3%87%e6%96%99%e5%ba%ab/</li>
        <li>Docker:https://hyggenini.com/%e6%9c%ac%e5%9c%b0%e5%b0%88%e6%a1%88%e9%80%8f%e9%81%8edocker%e5%9c%a8ec2%e9%81%8b%e8%a1%8c/</li>
      </ul>
    <h2>Process</h2>
    <ul>
      <li>AWS</li>
        <p>這次的練習是使用者按下提出按鈕後，圖片會從伺服器端先上傳到S3，S3在分散給全球各地的伺服器，接下來RDS也會得到存在S3內的圖片檔案名以及直接從伺服器端傳來的訊息。
回傳部分則是，伺服器端會抓取RDS的訊息以及圖片檔案名，再透過圖片檔案名去CDN找資料，找到匹配資料後再將圖片和訊息一起傳回客戶端。</p>
      <li>Docker</li>
        <p> 先安裝doceker，接下來在本地專案做一份Dockerfile及dockerignore，用VSCODE找到Dockerfile並按右鍵，會發現有個buile image選項，點選後可以在我們的Docke找到做好的image，為image指定端口後在本地運行，接下來，我們將向 Docker Hub 推送本地image，推上去後打開我們的EC2，在EC2上拉取剛剛我們Docker Hub 上的imag運行image後，我們的專案就可以在Docker運作了。</p>
    </ul>

