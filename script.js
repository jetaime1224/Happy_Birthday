```css
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
height:100vh;
background:linear-gradient(135deg,#ff758c,#ff7eb3);
overflow:hidden;
color:white;
text-align:center;
}

/* Floating hearts */
.heart{
position:absolute;
color:rgba(255,255,255,0.6);
font-size:20px;
animation:float 8s linear infinite;
}

@keyframes float{
0%{transform:translateY(100vh);opacity:0}
100%{transform:translateY(-10vh);opacity:1}
}

/* Heading */
h1{
margin-top:40px;
font-size:3rem;
}

/* Cake */
.cake{
margin:60px auto;
width:200px;
cursor:pointer;
position:relative;
}

.layer{
height:60px;
background:#fff;
border-radius:10px;
margin-bottom:5px;
}

.layer:nth-child(2){background:#ffccd5;}
.layer:nth-child(3){background:#ffb3c1;}

.candle{
width:10px;
height:40px;
background:#fff;
margin:auto;
position:relative;
border-radius:5px;
}

.flame{
width:12px;
height:18px;
background:gold;
border-radius:50%;
position:absolute;
top:-18px;
left:-1px;
animation:flicker 0.3s infinite alternate;
}

@keyframes flicker{
from{transform:scale(1)}
to{transform:scale(1.3)}
}

/* Buttons */
.buttons{margin-top:30px;}

button{
padding:12px 25px;
margin:10px;
border:none;
border-radius:30px;
background:white;
color:#ff4d6d;
font-weight:600;
cursor:pointer;
transition:.3s;
}

button:hover{
transform:scale(1.1);
box-shadow:0 0 20px rgba(255,255,255,.8);
}

.music{
position:absolute;
top:20px;
right:20px;
}

/* Love Page */
.love-page{
display:flex;
justify-content:center;
align-items:center;
}

.letter-box{
background:white;
color:#333;
padding:40px;
border-radius:20px;
width:400px;
}
```
