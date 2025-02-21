window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 0);
  }, 100); 
};

document.addEventListener('DOMContentLoaded', function() {
  const peopleData = [
      {
        name: "손정민",
        photo: "../static/img/people/손정민.png",
        bio: "와기다 와기 ٩(•̤̀ᵕ•̤́๑)૭✧",
        link_1: "https://github.com/esperanza-Q",
        link_2: "https://suruna1026.tistory.com/",
      },
      {
        name: "유예은",
        photo: "../static/img/people/유예은.png",
        bio: "WAGI의 와기 ( ╹◡╹ )",
        link_1: "https://github.com/Yeeun102",
        link_2: "https://yecococoding.tistory.com/",
      },
      {
        name: "김다인",
        photo: "../static/img/people/김다인.png",
        bio: "컴공여신 잇츠미",
        link_1: "https://github.com/daaaaaaain",
      },
      {
        name: "백수진",
        photo: "../static/img/people/백수진.png",
        bio: "나=와기, 와기=나",
        link_1: "https://github.com/slwnt31",
      },
      {
        name: "노혜린",
        photo: "../static/img/people/노혜린.png",
        bio: "와기는 코딩을 찢어",
        link_1: "https://github.com/lynn0325",
      },
      {
        name: "고은희",
        photo: "../static/img/people/고은희.png",
        bio: "와기야 왜 자꾸 칭얼거려",
        link_1: "https://github.com/qumaux24",
      },
      {
        name: "권수정",
        photo: "../static/img/people/권수정.png",
        bio: "와기레츠고옹",
        link_1: "https://github.com/sujeongkwon",
      },
      {
        name: "이정원",
        photo: "../static/img/people/이정원.png",
        bio: "제가 와기 당첨이라니⋰˚♡",
        link_1: "https://github.com/bella292",
      },
      {
        name: "조하늘",
        photo: "../static/img/people/조하늘.png",
        bio: "와기가되 ◟( ˘ ³˘)◞ ♡",
        link_1: "https://github.com/gkdl0113",
      },
      
      
    ];

    //모바일일때 js
    if (window.matchMedia('(max-width: 450px)').matches){
      const container = document.querySelector('.center');
      let visibleBubbles = 5;

      function createBubble(person, isLeft) {
      const bubble = document.createElement('div');
      bubble.classList.add(isLeft ? 'L_bubble' : 'R_bubble');
  
      bubble.style.animation = 'bubbleFadeIn 0.7s forwards';
  
      const photo = document.createElement('div');
      photo.classList.add(isLeft ? 'L_photo' : 'R_photo');
      const img = document.createElement('img');
      img.src = person.photo;
      img.alt = person.name;
      img.style.maxHeight = "95px";
      img.style.maxWidth = "95px";
      photo.appendChild(img);
  
      const name = document.createElement('div');
      name.classList.add(isLeft ? 'L_name' : 'R_name');
      name.innerHTML = `<h2>${person.name}</h2>`;
  
      const rink = document.createElement('div');
      rink.classList.add(isLeft ? 'L_link' : 'R_link');
      //링크가 2개일때랑 1개일때 구분해서 생성하는 코드
      if (person.link_2) {
        rink.innerHTML = `
                <a href="${person.link_1}" style = "margin-left : 5px;"><img src ="../static/img/github_mini.svg" /></a>
                <a href="${person.link_2}"  style = "margin-right : 5px;"><img src ="../static/img/home_mini.svg" /></a>
      `;
      } 
      else {
        rink.innerHTML = `
          <a href="${person.link_1}"  style = " margin-left: 5px; float : "right;"
          ><img src ="../static/img/github_mini.svg" /></a>`;
      }
    

      const text = document.createElement('div');
      text.classList.add(isLeft ? 'L_text' : 'R_text');
      text.innerHTML = `<p>"${person.bio}"</p>`;
  
      bubble.appendChild(photo);
      bubble.appendChild(name);
      bubble.appendChild(rink);
      bubble.appendChild(text);
  
      container.appendChild(bubble);
      }
  
      for (let i = 0; i < 2 && i < peopleData.length; i++) {
        const person = peopleData[i];
        createBubble(person, i % 2 === 0);    
      }

    
      var Y = 100;
  
      window.addEventListener('scroll', function () {
        var winY = window.scrollY;
        if (winY > Y*1.2) {
          const person = peopleData[visibleBubbles];
          createBubble(person, visibleBubbles % 2 === 0);
          visibleBubbles++;
        Y = Y + 100;
        }
      });

    }

    //pc 일때 js
    else  {
        const container = document.querySelector('.center');
        let visibleBubbles = 5;

        function createBubble(person, isLeft) {
        const bubble = document.createElement('div');
        bubble.classList.add(isLeft ? 'L_bubble' : 'R_bubble');
    
        bubble.style.animation = 'bubbleFadeIn 0.7s forwards';
    
        const photo = document.createElement('div');
        photo.classList.add(isLeft ? 'L_photo' : 'R_photo');
        const img = document.createElement('img');
        img.src = person.photo;
        img.alt = person.name;
        img.style.maxHeight = "95px";
        img.style.maxWidth = "95px";
        photo.appendChild(img);
    
        const name = document.createElement('div');
        name.classList.add(isLeft ? 'L_name' : 'R_name');
        name.innerHTML = `<h2>${person.name}</h2>`;
    
        const rink = document.createElement('div');
        rink.classList.add(isLeft ? 'L_rink' : 'R_rink');
        //링크가 2개일때랑 1개일때 구분해서 생성하는 코드 
        if (person.link_2) {
          rink.innerHTML = `
                  <a href="${person.link_1}" style = "margin-left : 5px;"><img src ="../static/img/github.svg" /></a>
                  <a href="${person.link_2}"><img src ="../static/img/home.svg" /></a>
        `;
        } 
        else {
          rink.innerHTML = `
            <a href="${person.link_1}"  style = "margin-left : 5px;"><img src ="../static/img/github.svg" /></a>`;
        }
      

        const text = document.createElement('div');
        text.classList.add(isLeft ? 'L_text' : 'R_text');
        text.innerHTML = `<p>"${person.bio}"</p>`;
    
        bubble.appendChild(photo);
        bubble.appendChild(name);
        bubble.appendChild(rink);
        bubble.appendChild(text);
    
        container.appendChild(bubble);
      }
    
      for (let i = 0; i < 2 && i < peopleData.length; i++) {
        const person = peopleData[i];
        createBubble(person, i % 2 === 0);    
      }

      
      var Y = 100;
    
      window.addEventListener('scroll', function () {
        var winY = window.scrollY;
        if (winY > Y*1.5) {
          const person = peopleData[visibleBubbles];
          createBubble(person, visibleBubbles % 2 === 0);
          visibleBubbles++;
          Y = Y + 140;
        }
      });

    }




  });