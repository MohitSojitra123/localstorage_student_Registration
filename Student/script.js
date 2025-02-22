let reg_user=document.getElementById("reg_user");
let reg_email=document.getElementById("reg_email");
let reg_pass=document.getElementById("reg_pass");
let reg_btn=document.getElementById("reg_btn");

function showPopup(message) {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: -300px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        font-size: 16px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transition: right 0.5s ease-in-out;
        overflow: hidden;
    `;
    
    const timeline = document.createElement("div");
    timeline.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        background: #00ff00;
        width: 100%;
    `;
    popup.appendChild(timeline);
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.right = "20px";
        timeline.style.transition = "width 3s linear";
        timeline.style.width = "0%";
    }, 100);

    setTimeout(() => {
        popup.style.transform = "scale(0)";
        popup.style.transition = "transform 0.5s ease-in-out";
        setTimeout(() => {
            popup.remove();
        }, 500);
        window.location.href="login.html";
    }, 3000);
}

function showPopup1(message, bgColor, timelineColor) {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: -300px;
        background: ${bgColor};
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        font-size: 16px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transition: right 0.5s ease-in-out;
        overflow: hidden;
    `;
    
    const timeline = document.createElement("div");
    timeline.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        background: ${timelineColor};
        width: 100%;
    `;
    popup.appendChild(timeline);
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.right = "20px";
        timeline.style.transition = "width 3s linear";
        timeline.style.width = "0%";
    }, 100);

    setTimeout(() => {
        popup.style.transform = "scale(0)";
        popup.style.transition = "transform 0.5s ease-in-out";
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 3000);
}


let all_reg=[];

reg_btn.addEventListener("click",function(e){
    e.preventDefault();

    let reg_user1=reg_user.value;
    let reg_email1=reg_email.value;
    let reg_pass1=reg_pass.value;
    
    if(reg_user1 && reg_email1 && reg_pass1){
        
        let data=JSON.parse(localStorage.getItem("all_user")) || [];

        data.push({reg_user1,reg_email1,reg_pass1});   

        localStorage.setItem("all_user",JSON.stringify(data)); 

        showPopup("Registration is Successfully Complete");

    }else{
    //    showPopup("Please Enter Valide Detail...");
        showPopup1("Please enter valid detail","rgba(0, 0, 0, 0.8);", "#ff0000");
    }    
})



















































// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer base {
//   :root {
//     --background: 240 10% 3.9%;
//     --foreground: 0 0% 98%;
//     --card: 240 10% 3.9%;
//     --card-foreground: 0 0% 98%;
//     --popover: 240 10% 3.9%;
//     --popover-foreground: 0 0% 98%;
//     --primary: 0 0% 98%;
//     --primary-foreground: 240 5.9% 10%;
//     --secondary: 240 3.7% 15.9%;
//     --secondary-foreground: 0 0% 98%;
//     --muted: 240 3.7% 15.9%;
//     --muted-foreground: 240 5% 64.9%;
//     --accent: 240 3.7% 15.9%;
//     --accent-foreground: 0 0% 98%;
//     --destructive: 0 62.8% 30.6%;
//     --destructive-foreground: 0 0% 98%;
//     --border: 240 3.7% 15.9%;
//     --input: 240 3.7% 15.9%;
//     --ring: 240 4.9% 83.9%;
//     --radius: 0.75rem;
//   }
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Inter', sans-serif;
// }

// @layer base {
//   * {
//     @apply border-border selection:bg-white/10 selection:text-white;
//   }
  
//   body {
//     @apply bg-background text-foreground antialiased;
//     min-height: 100vh;
//     background: linear-gradient(45deg, #0a0a0a, #1a1a1a);
//     color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     overflow: hidden;
//   }

//   /* Enhanced background animation with multiple layers */
//   body::before {
//     content: '';
//     position: fixed;
//     width: 200%;
//     height: 200%;
//     background: linear-gradient(
//       45deg,
//       rgba(45, 45, 255, 0.03),
//       rgba(120, 0, 255, 0.03),
//       rgba(200, 0, 255, 0.03)
//     );
//     animation: backgroundFlow 25s linear infinite;
//     z-index: -1;
//   }

//   /* New floating particles effect */
//   body::after {
//     content: '';
//     position: fixed;
//     inset: 0;
//     background: 
//       radial-gradient(2px 2px at 40px 60px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 20px 50px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 30px 100px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 40px 60px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 110px 90px, #fff, rgba(0,0,0,0)),
//       radial-gradient(2px 2px at 190px 150px, #fff, rgba(0,0,0,0));
//     background-size: 200px 200px;
//     animation: sparkle 5s linear infinite;
//     opacity: 0.15;
//     z-index: -1;
//   }
// }

// @keyframes backgroundFlow {
//   0% {
//     transform: translateX(-50%) translateY(-50%) rotate(0deg);
//   }
//   100% {
//     transform: translateX(-50%) translateY(-50%) rotate(360deg);
//   }
// }

// @keyframes sparkle {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(-200px);
//   }
// }

// /* New aurora effect */
// .aurora {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -2;
//   mix-blend-mode: soft-light;
// }

// .aurora::before {
//   content: '';
//   position: absolute;
//   width: 40vw;
//   height: 40vh;
//   background: radial-gradient(
//     circle at center,
//     rgba(45, 45, 255, 0.1),
//     transparent 70%
//   );
//   animation: auroraMove 15s ease infinite;
// }

// .aurora::after {
//   content: '';
//   position: absolute;
//   width: 40vw;
//   height: 40vh;
//   background: radial-gradient(
//     circle at center,
//     rgba(120, 0, 255, 0.1),
//     transparent 70%
//   );
//   animation: auroraMove 12s ease infinite reverse;
// }

// @keyframes auroraMove {
//   0% {
//     transform: translate(-50%, -50%) rotate(0deg);
//   }
//   50% {
//     transform: translate(50%, 50%) rotate(180deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotate(360deg);
//   }
// }

// /* Atmospheric fog effect */
// .fog {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   z-index: -1;
// }

// .fog::before {
//   content: '';
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     to bottom right,
//     transparent,
//     rgba(0, 0, 0, 0.5)
//   );
//   filter: blur(8px);
//   animation: fogDrift 20s ease infinite alternate;
// }

// @keyframes fogDrift {
//   0% {
//     transform: scale(1) translateX(-10%) rotate(0deg);
//   }
//   100% {
//     transform: scale(1.5) translateX(10%) rotate(10deg);
//   }
// }


  