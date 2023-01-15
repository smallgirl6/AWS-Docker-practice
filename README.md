<h1>AWS image upload to S3+ CDN + RDS+DOcker</h1>
<h2>DEMO</h2>

 ![後端練習 — Mozilla Firefox 2023-01-15 19-29-15 (1)](https://user-images.githubusercontent.com/111422800/212541032-0d7f749e-009f-443c-9f62-5d51635543c7.gif)
 
 <br>
<h2>Detail</h2>
  <p> WEBsite : http://50.19.56.20:5005/.</p>
  <p> My Blog :</p>
      <ul>
        <li><a href="https://hyggenini.com/aws-%e5%9c%96%e7%89%87%e4%b8%8a%e5%82%b3s3cdn%e5%bf%ab%e5%8f%96rds%e8%b3%87%e6%96%99%e5%ba%ab/">AWS</a></li>
        <li><a href="https://hyggenini.com/%e6%9c%ac%e5%9c%b0%e5%b0%88%e6%a1%88%e9%80%8f%e9%81%8edocker%e5%9c%a8ec2%e9%81%8b%e8%a1%8c/">Docker</a></li>
      </ul>
    <h2>Process</h2>
    <ul>
      <li>AWS</li>
        <p>This practice is that when the user clicks the submit button, the image will be uploaded to S3 first from the server side. S3 will then distribute the image to servers around the world. Next, RDS will also receive the image file name and message directly from the server side. The return part is that the server will fetch the message and image file name from RDS, and then use the image file name to find data on CDN. After finding the matching data, the image and message will be sent back to the client together.</p>
      <li>Docker</li>
        <p> First, install Docker. Next, create a Dockerfile and dockerignore in your local project. Using VSCODE, find the Dockerfile and right-click on it. You will find an option called "Build Image". After clicking it, you can find the built image in your Docker. Assign a port to the image and run it locally. Afterwards, we will push the local image to Docker Hub. After pushing, open our EC2 and pull the image from Docker Hub on EC2. After running the image, our project can now run on Docker.</p>
    </ul>
    <h2>Architecture diagram</h2>
     <ul>
      <li>AWS</li>
 <br>
      
![image](https://user-images.githubusercontent.com/111422800/212542005-b4331ece-93d1-4694-b687-2f17248d96ae.png)
 
 <br>
      <li>Docker</li>
 <br>
      
![image](https://user-images.githubusercontent.com/111422800/212542020-54190e56-04cd-4d5b-9548-2aa1de0c238e.png) 

<br>
    </ul>
      


