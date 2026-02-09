const slider = document.getElementById("slider");
const wrapper = document.getElementById("slideWrapper");
const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const appDock = document.getElementById("appDock");

let isDown=false, startX, sliderX=0;

slider.addEventListener("touchstart", startSlide);
slider.addEventListener("mousedown", startSlide);
document.addEventListener("touchmove", slideMove);
document.addEventListener("mousemove", slideMove);
document.addEventListener("touchend", endSlide);
document.addEventListener("mouseup", endSlide);

function startSlide(e){isDown=true; startX=e.touches?e.touches[0].clientX:e.clientX;}
function slideMove(e){if(!isDown) return; let x=e.touches?e.touches[0].clientX:e.clientX; let move=x-startX; if(move<0) move=0; if(move>wrapper.offsetWidth-slider.offsetWidth) move=wrapper.offsetWidth-slider.offsetWidth; slider.style.left=move+'px'; sliderX=move;}
function endSlide(){isDown=false; if(sliderX>=wrapper.offsetWidth-slider.offsetWidth-5){ lockScreen.style.opacity='0'; setTimeout(()=>{lockScreen.style.display='none'; mainContent.style.display='flex'; appDock.style.display='flex';},300);}else slider.style.left='0px';}

function openApp(app){
    const container=document.getElementById('appContainer');
    const content=document.getElementById('appContent');
    content.innerHTML='';

    if(app==='link'){
        window.location.href="https://www.canva.com/design/DAG6eInDEBM/fwws1axd3v_XoM99jJ5cmg/watch?utm_content=DAG6eInDEBM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7194e40100";
        return;
    }
    else if(app==='gallery'){
        content.innerHTML=`<h2>Gallery App</h2><iframe src="gallery.html" style="width:100%; height:80vh; border:none; border-radius:15px;" id="galleryFrame"></iframe>`;
    }
    else if(app==='messages'){
        content.innerHTML=`
            <h2 style="text-align:center;">Messages</h2>
            <div id="chatContainer"></div>
            <div style="display:flex; margin-top:10px;">
                <input id="messageInput" type="text" placeholder="iMessage" />
                <button id="sendBtn">Send</button>
            </div>
        `;
        const chatContainer=document.getElementById('chatContainer');
        const allMessages = [
           {type:'received', text:'Happy birthday budi 🎂'},
  {type:'sent', text:'i am fine , and how about you ,small digital wish from mero taraf'},
  {type:'received', text:'remembered the day last time i used to wish like this'},
  {type:'sent', text:'mero sweet budi reply ne deu na'},
  {type:'received', text:'i just wanted to say'},
  {type:'sent', text:'mero budi kasto funny caring ani lovelable character xa  😂'},
  {type:'received', text:'I miss you budi lot more'},
  {type:'sent', text:'I literally coded whole creativity to wish you'},
  {type:'received', text:'happy birthday!'},
  {type:'sent', text:'kassamm seeyy mere pyarr ke liye sab khuch❤️'},
  {type:'received', text:'arko juni ma ne khojdai aauxu'},
  {type:'sent', text:'after everything you did for me 😄'},
  {type:'received', text:'you changed me  ❤️'},
  {type:'sent', text:'only malai baba materail banauna matraii baki xa  🥰'},
  {type:'received', text:'Can\'t wait to see you'},
  {type:'sent', text:'voli bihena buelai vetxu kiss khanxu'},
  {type:'received', text:'your smile is brighter than my future'},
  {type:'sent', text:'ajha birthday ko din malai chocolate kindineeyy tyaaa 😊'},
  {type:'received', text:'tmi katii caring xau'},
  {type:'sent', text:'Always, for you 💙'},
  {type:'received', text:'if you are reading this then it means i sucessfully deployed my code .'},
  {type:'sent', text:'you are my love of my life😘'},
  {type:'received', text:'i love chatting with you 😄'},
  {type:'sent', text:'oohh budi tmro lagi ma 100 message lekhdai xu❤️'},
  {type:'received', text:'hehe k lekham k lekham vayo'},
  {type:'sent', text:'edi moon ramro vako vaye tmi super ramroo 🥰'},
  {type:'received', text:'jhaile ko jastai tmi one year younger hunxau hehe💙'},
  {type:'sent', text:'both same age vayexi hehe kk garne hola 😄'},
  {type:'received', text:'yo year ma budi ra ma kk garnu parxa hai ta😳'},
  {type:'sent', text:'tya aru sanga maskine haina hai ma jelous hunxu 😏'},
  {type:'received', text:'ma ne dheraii possive xu ne 😄'},
  {type:'sent', text:'aba estaii kta choose garyou hai hehe ❤️'},
  {type:'received', text:'malai ta tmi kyaa manparxa bulushh 🥰'},
  {type:'sent', text:'Miss you!'},
  {type:'received', text:'Miss you more 😘'},
  {type:'sent', text:'kaile vetne kaile vetne vako xaina?'},
  {type:'received', text:'yo year eso eso nagarne😄'},
  {type:'sent', text:'ma ta kyaa hai hai control garna sakidna kya ❤️'},
  {type:'received', text:'you are my life jasma sweet guliooo add gareko jasto.'},
  {type:'sent', text:'tmi aayexi mero life change vako ho by the way😄'},
  {type:'received', text:'i always keep thinking no matter how you think about me'},
  {type:'sent', text:'no matter what happens you birthday gif will keep loving everytime 🥰'},
  {type:'received', text:'You’re my sunchine 🌞'},
  {type:'sent', text:'And you’re my rainbow 🌈'},
  {type:'received', text:'Feeling vagyaamaniii to have you.'},
  {type:'sent', text:'I feel so much proud in your success💙'},
  {type:'received', text:'tya malai game khelyo vanera gali nagarne maya garera food laydine'},
  {type:'sent', text:'Thanks for everything you gave me love care gifts etc hehe unlimited puppy ❤️'},
  {type:'received', text:'malai hai tmi kyaaa manparxa kya'},
  {type:'sent', text:'edi earth blast hunxa vanyo vane ma tmi sanga ek din vayene life bitauxu happy happy 😄'},
  {type:'received', text:'lets do everything sangaii'},
  {type:'sent', text:'sangai khane 🥰'},
  {type:'received', text:'sangaii happy hune'},
  {type:'sent', text:'sangaii dhani hune 💙'},
  {type:'received', text:'sasngaii travel garne'},
  {type:'sent', text:'sangaii khushi😄'},
  {type:'received', text:'sangaii dukhii!'},
  {type:'sent', text:'meo bue i love u soooooooooooo much😘'},
  {type:'received', text:'happy birthday budi ❤️'},
  {type:'sent', text:'happy birthday merooo lovely wifeeeyy 🥰'},
  {type:'received', text:'i have each and every memories with you'},
  {type:'sent', text:'padhna jhyou lagyo hola hai😄'},
  {type:'received', text:'you no angryy nahhh.'},
  {type:'sent', text:'i want to tell you secret😄'},
  {type:'received', text:'if you want to be happy with me just smile everytime'},
  {type:'sent', text:'just try even if you dont like  💙'},
  {type:'received', text:'thats a secret.'},
  {type:'sent', text:'birthday gift nai ma ho hai 😄'},
  {type:'received', text:'ki aru chaixa ra ? ❤️'},
  {type:'sent', text:'meo budi love u jii 🥰'},
  {type:'received', text:'nindra lagyo hola aba ta i think'},
  {type:'sent', text:'budi suna na tmi malai kati ko maya garxauuu ? 😘'},
  {type:'received', text:'from meeting first time to meeting everyday'},
  {type:'sent', text:'from to ☀️'},
  {type:'received', text:'evening! ❤️'},
  {type:'sent', text:'i know you are more smart than me!'},
  {type:'received', text:'your insticts is wayy too good🥰'},
  {type:'sent', text:'you know my behaviours very well 💙'},
  {type:'received', text:'even i get surprised of it😄'},
  {type:'sent', text:'You’re so cute 😘'},
  {type:'received', text:'bakayaruuuuu 😳'},
  {type:'sent', text:'i cant wait to see you😘'},
  {type:'received', text:'birthday ma ta mast mooj garne hola hai hehe sifu putting 😄'},
  {type:'sent', text:'You\'re my favorite food❤️'},
  {type:'received', text:'mine forever🥰'},
  {type:'sent', text:'forever'},
  {type:'received', text:'ever😘'},
  {type:'sent', text:'ever!'},
  {type:'received', text:'and! 😄'},
  {type:'sent', text:'ever ❤️'},
  {type:'received', text:'Love you budi  🥰'},
  {type:'sent', text:'Always thinking of you 😘'},
  {type:'received', text:'Always thinking of you ❤️'},
  {type:'sent', text:'You make me so happy 😊'},
  {type:'received', text:'You make me happier 🥰'},
  {type:'sent', text:'You’re my sunshine 🌞'},
  {type:'received', text:'And you’re my rainbow 🌈'},
  {type:'sent', text:'Feeling lucky ❤️'},
  {type:'received', text:'mero budi meo matraii aru kasai ko haina hai 😄'},
];
        allMessages.forEach(msg=>{
            const div=document.createElement('div');
            div.classList.add('message', msg.type);
            div.textContent=msg.text;
            chatContainer.appendChild(div);
        });
        chatContainer.scrollTop=chatContainer.scrollHeight;

        const sendBtn=document.getElementById('sendBtn');
        const messageInput=document.getElementById('messageInput');
        sendBtn.onclick=()=>{
            const text=messageInput.value.trim();
            if(text!==''){
                const div=document.createElement('div');
                div.classList.add('message','sent');
                div.textContent=text;
                chatContainer.appendChild(div);
                messageInput.value='';
                chatContainer.scrollTop=chatContainer.scrollHeight;
            }
        };
    }
   else if(app==='facebook'){
    content.innerHTML=`
        <h2 style="text-align:center;">Facebook Feed</h2>
        <div id="fbContainer" style="overflow-y:auto; max-height:75vh; padding:10px; background:rgba(255,255,255,0.05); border-radius:15px;">
            <div class="fbPost" style="background:rgba(255,255,255,0.1); padding:10px; border-radius:15px; margin-bottom:20px;">
                <h3 style="margin:5px 0;">Arpeet Nemkul</h3>
                <p style="margin:5px 0;">best girl ever meet!</p>
                <img src="photo1 (7).JPG" style="width:100%; border-radius:12px; margin:10px 0;" />
                
                <div style="display:flex; margin-top:10px;">
                    <input type="text" id="fbInput" placeholder="Write a comment..." style="flex:1; padding:8px; border-radius:12px; border:none; outline:none;" />
                    <button id="fbSendBtn" style="margin-left:8px; padding:8px 12px; border:none; border-radius:12px; background:#0a84ff; color:white; cursor:pointer;">Post</button>
                </div>
            </div>
        </div>
    `;

    const fbContainer = document.getElementById('fbContainer');
    const fbInput = document.getElementById('fbInput');
    const fbSendBtn = document.getElementById('fbSendBtn');

    fbSendBtn.onclick = () => {
        const text = fbInput.value.trim();
        if(text !== ''){
            const div = document.createElement('div');
            div.style.marginBottom='5px';
            div.innerHTML = `<strong>You:</strong> ${text}`;
            fbContainer.querySelector('.comments').appendChild(div);
            fbInput.value='';
            fbContainer.scrollTop = fbContainer.scrollHeight;
        }
    };
}
    else if(app==='call'){ content.innerHTML='<h2>Phone App</h2><p>Call interface placeholder</p>'; }
    else if(app==='messaging'){ content.innerHTML='<h2>Messaging App</h2><p>Messaging placeholder</p>'; }
    else if(app==='camera'){ content.innerHTML='<h2>Camera App</h2><p>Camera placeholder</p>'; }

    container.style.display='block';
}

function closeApp(){
    document.getElementById('appContainer').style.display='none';
}
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

playBtn.onclick = () => music.play();
pauseBtn.onclick = () => music.pause();
