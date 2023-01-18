<h1>AWS image upload to S3+ CDN + RDS+ Docker +ELB</h1>
<h2>DEMO</h2>

![後端練習 — Mozilla Firefox 2023-01-15 19-29-15 (4)](https://user-images.githubusercontent.com/111422800/212543571-34ac1fc9-1dd0-40cd-a468-0037ee0621a7.gif)


 <br>
<h2>Detail</h2>
  <p> WEBsite : https://workchat.hyggenini.com.</p>
  <p> My Blog :</p>
      <ul>
        <li><a href="https://hyggenini.com/aws-%e5%9c%96%e7%89%87%e4%b8%8a%e5%82%b3s3cdn%e5%bf%ab%e5%8f%96rds%e8%b3%87%e6%96%99%e5%ba%ab/">AWS</a></li>
        <li><a href="https://hyggenini.com/%e6%9c%ac%e5%9c%b0%e5%b0%88%e6%a1%88%e9%80%8f%e9%81%8edocker%e5%9c%a8ec2%e9%81%8b%e8%a1%8c/">Docker</a></li>
        <li><a href="https://hyggenini.com/linux-ubuntunginx%e5%8f%8d%e5%90%91%e4%bb%a3%e7%90%86/">Nginx reverse proxy</a></li>
        <li><a href="https://hyggenini.com/%e5%8f%96%e5%be%97-ssl-%e6%86%91%e8%ad%89%e7%94%a8-https-%e7%9a%84%e6%94%af%e6%8f%b4%e7%b6%b2%e7%ab%99/">SSL Certificate For HTTPS </a></li>
        <li><a href="https://hyggenini.com/ec2-load-balancer-%e7%9a%84%e8%b2%a0%e8%bc%89%e5%b9%b3%e8%a1%a1%e6%9e%b6%e6%a7%8b/">EC2 Load Balancer</a></li>
      </ul>
    <h2>Process</h2>
    <ul>
      <li>AWS</li>
        <p>This practice is that when the user clicks the submit button, the image will be uploaded to S3 first from the server side. S3 will then distribute the image to servers around the world. Next, RDS will also receive the image file name and message directly from the server side. The return part is that the server will fetch the message and image file name from RDS, and then use the image file name to find data on CDN. After finding the matching data, the image and message will be sent back to the client together.</p>
      <li>Docker</li>
        <p> First, install Docker. Next, create a Dockerfile and dockerignore in your local project. Using VSCODE, find the Dockerfile and right-click on it. You will find an option called "Build Image". After clicking it, you can find the built image in your Docker. Assign a port to the image and run it locally. Afterwards, we will push the local image to Docker Hub. After pushing, open our EC2 and pull the image from Docker Hub on EC2. After running the image, our project can now run on Docker.</p>
        <li>SSL</li>
          <p>Obtain an SSL certificate using the AWS Certificate Manager and bind it to your domain. By setting the domain to use HTTPS, it ensures the security of the website.</p>
        <li>AMI</li>
          <p>Create an EC2 instance. First, select the operating system and configuration you want to use, then create the AMI. Next, use the newly created AMI to launch an EC2 instance on AWS.</p>
         <li>EC2 Load Balancer</li>
           <p>Use Amazon Elastic Load Balancer (ELB) to distribute traffic. First, create an ELB and bind it to EC2 instances. Next, ELB will distribute traffic evenly to all the bound EC2 instances, thus improving the availability and elasticity of the website.<a href="https://github.com/smallgirl6/AWS-Docker-practice/blob/main/ELB.md">   EC2 Load Balancer Result</p>
    </ul>
    <h2>Architecture diagram</h2>
     <ul>
      <li>AWS</li>
 <br>
 
![image](https://user-images.githubusercontent.com/111422800/213063395-67c98fe4-c6cf-4757-9ac8-48de51f9ae71.png)
 
 <br>
 
 ![image](https://user-images.githubusercontent.com/111422800/213063429-553d8352-6d55-4e5e-888f-7cf25f6857f7.png)

 <br>
      <li>Docker</li>
 <br>
      
![image](https://user-images.githubusercontent.com/111422800/212542020-54190e56-04cd-4d5b-9548-2aa1de0c238e.png) 

<br>
    </ul>
 
  <br>
      <li>EC2 Load Balancer</li>
 <br>
      
![image](https://user-images.githubusercontent.com/111422800/213080958-efa45bb4-d2e3-4754-a1f8-e2c05bac8f0a.png) 

<br>
    </ul>
      


