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
      {
        name: "이가윤",
        photo: "../static/img/people/이가윤.png",
        bio: "열공하자 와기대학생",
        link_1: "https://github.com/riveryunny",
      },
      {
        name: "이예림",
        photo: "../static/img/people/이예림.png",
        bio: "냉철한 이성주의적 성향과 왕성한 호기심을 가진 만능 재주꾼",
        link_1: "https://github.com/dPflaYL",
      },
      {
        name: "김비주",
        photo: "../static/img/people/김비주.png",
        bio: "안녕하세요! 집순이입니다!",
        link_1: "https://github.com/Bi-Joo",
      },
      {
        name: "이서연",
        photo: "../static/img/people/이서연.png",
        bio: "내가 바로 그 와기입니다",
        link_1: "https://github.com/dltjdusy/leeseoyeon",
      },
      {
        name: "남유리",
        photo: "../static/img/people/남유리.png",
        bio: "와:와기가 되어  기:기쁘네요",
        link_1: "https://github.com/Namyuri06",
      },
      {
        name: "김나은",
        photo: "../static/img/people/김나은.png",
        bio: "와기 잘 부탁합니다!",
        link_1: "https://github.com/aelisryeo",
      },
      {
        name: "안다현",
        photo: "../static/img/people/안다현.png",
        bio: "고고!! 와기wagi",
        link_1: "https://github.com/andada-creator",
      },
      {
        name: "윤세진",
        photo: "../static/img/people/윤세진.jpg",
        bio: "와기자기한 대학생활🫶",
        link_1: "github.com/yellowsejin",
      },
      {
        name: "최은솔",
        photo: "../static/img/people/최은솔.png",
        bio: "0과 1사이에서 길을 찾는 중입니다",
        link_1: "https://github.com/eunsolee/git_practice",
      },
      {
        name: "김민경",
        photo: "../static/img/people/김민경.jpg",
        bio: "코드헌터",
        link_1: "https://github.com/myganglody",
      },
      {
        name: "이시연",
        photo: "../static/img/people/이시연.png",
        bio: "열공!! ദ്ദി´･_･`)",
        link_1: "https://github.com/seee-yonn",
      },
      {
        name: "최연정",
        photo: "../static/img/people/최연정.png",
        bio: "내가 와기!! 아자자 ٩(˵˃̶ω˂̶˵)◞",
        link_1: "https://github.com/choi390",
      },
      {
        name: "조주현",
        photo: "../static/img/people/조주현.jpg",
        bio: "와기!! 3기!! 화이팅 하시기!!",
        link_1: "https://github.com/gus317",
      },
      {
        name: "장민교",
        photo: "../static/img/people/장민교.png",
        bio: "좋은 와기 위대한 와기",
        link_1: "https://github.com/mingyo603/git_practice",
      },
      {
        name: "이원지",
        photo: "../static/img/people/이원지.png",
        bio: "아자아자 화이팅",
        link_1: "https://github.com/wonji127?tab=repositories",
      },
      {
        name: "이지현",
        photo: "../static/img/people/이지현.png",
        bio: "너 내 와기 동료가 돼라",
        link_1: "https://github.com/Jihyun-0923",
      },
      {
        name: "송정민",
        photo: "../static/img/people/송정민.png",
        bio: "Wagi 짱!",
        link_1: "https://github.com/minibpr",
      },
      {
        name: "이윤서",
        photo: "../static/img/people/이윤서.png",
        bio: "오늘도 와기롭게 살기ᐠ( ᐢ ᵕ ᐢ )ᐟ",
        link_1: "https://github.com/ofjrv",
      },
      
    ];

    //모바일일때 js
    if (window.matchMedia('(max-width: 450px)').matches){
      const container = document.querySelector('.center');
      let visibleBubbles = 2;

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
        let visibleBubbles = 2;

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