function checkUid(cb){


 var uid = localStorage.getItem('uid');

 if (uid !== null) {
  console.log('auto bot ,welcome:', uid);

  fetch('https://dhack-6e7e7-default-rtdb.asia-southeast1.firebasedatabase.app/6lottery/'+uid+'.json')
  .then(response => response.text())
  .then(data => {
    if (data.includes('true')){
      cb();
    } else {
      
      alert("ကျနော့်  အကောင့်ကနေ  refer ယူထားသူ တွေပဲအသုံပြုလို့ရမှာပါ ခင်ဗျာ");

    }
  })
  .catch(error => {
  
    alert("vpn ချိတ်စမ်းကြည့်ပါ");
    console.log(error);
  });





} else {
 return false;
 console.log('uid does not exist or is null');
 window.location.href = "https://6lottery.com/#/main";


}

}



function setUID() {

 let spans = document.querySelectorAll('span');

 let uidElement = null;

 spans.forEach(function(span) {
  if (span.textContent.includes('UID')) {
    uidElement = span;
  }
});

 if (uidElement !== null) {
  let valueElement = uidElement.nextElementSibling.nextElementSibling;
  let value = valueElement.textContent;
  console.log("{'uid':"+value+"}");

  localStorage.setItem('uid', value);

} else {

  console.log("auto bot said the uid is null");

}


}



function startWingo(){





  const BettingAssistant = function () {

    this.win = true;
    this.lastBet = "အကြီး";
    this.inital_amount = 1;
    this.amount = this.inital_amount;
    this.lose_increase = 1;
    this.lose_limit = 1;
    this.current_lose_limit =  1;
    this.to = "b";
    this.type = "ev";
    this.history = ["အကြီး", "သေး"];
          // wind go edited
    this.element = document.getElementsByClassName("TimeLeft__C-id")[0];
    this.observer = null;
  };

  BettingAssistant.prototype.checkWin = function (e, t) {
 //win go edited
    let bl_ele = document.getElementsByClassName('Wallet__C-balance-l1')[0].textContent;
    let numericValue = Math.floor(parseFloat(bl_ele.replace(/[^\d.-]/g, "").replace(/,/g, "")));
    console.log("{'budget':"+numericValue+"}");


    let target = e === "s" ? "သေး" : "အကြီး";
    // win go edited
    let ele = document.querySelectorAll("span[data-v-c74f4bba]")[0].textContent;
    this.history.push(ele);

    if (t === "ev") {
      if (ele === target) {
        console.log(ele);
        return true;
      } else {
        console.log(ele + " " + target);
        return false;
      }
    } else {
      if (ele === target) {
        return true;
      } else {
        return false;
      }
    }
  };

  BettingAssistant.prototype.doBet = async function () {
    await this.sleep(6000);
    this.win = this.checkWin(this.to, this.type);
    
    if (this.win) {
      this.current_lose_limit = 1;
      console.log("win", 100 * this.amount);
      this.amount = this.inital_amount;

    } else {
      this.current_lose_limit++;
      if (this.current_lose_limit == this.lose_limit){
        this.amount = this.inital_amount;
        this.current_lose_limit = 1;
      }else {
       this.amount = this.amount * this.lose_increase;

     }
   }
   console.log("{'lose':"+this.current_lose_limit+"}");
   this.setBetLogic(this.win);
   this.actionBet(this.to, this.amount);
   
   console.log("###############################################", "");
 };

 BettingAssistant.prototype.actionBet = async function (e, t) {
  if (e === "b") {
      //win go edited
    document.getElementsByClassName("Betting__C-foot-b")[0].click();

    for (let i = 0; i <= t; i++) {
      if (i !=0 && i != t){
        await this.sleep(100);
            // win go edited        
        document.getElementsByClassName("Betting__Popup-btn bgcolor")[1].click();

      }
    }
    await this.sleep(1000);
        // win go edited
    document.getElementsByClassName("Betting__Popup-foot-s bgcolor")[0].click();
  } else if (e === "s") {
        //win go edited 
    document.getElementsByClassName("Betting__C-foot-s")[0].click();
    for (let i = 0; i <= t; i++) {
      if (i !=0 && i != t){
        await this.sleep(100);
            // win go edited
        document.getElementsByClassName("Betting__Popup-btn bgcolor")[1].click();
      }

    }
    await this.sleep(1000);
        // win go edited
    document.getElementsByClassName("Betting__Popup-foot-s bgcolor")[0].click();
  }
};

BettingAssistant.prototype.sleep = function (e) {
  return new Promise(t => setTimeout(t, e));
};

BettingAssistant.prototype.setBetLogic = function (e) {
  let t = this.estimateNextResult(this.history);

  t === "အကြီး" ? (this.to = "b", console.log("{bet_amount: အကြီး" + this.amount * 100+"}")) : (this.to = "s", console.log("{bet_amount: သေး" + this.amount * 100+"}"));

};

BettingAssistant.prototype.estimateNextResult = function (e) {
  const randomIndex = Math.floor(Math.random() * e.length);
  return e[randomIndex];
};

BettingAssistant.prototype.startObserving = function () {
  observer = new MutationObserver((e, t) => {
    for (const i of e) {
      if (i.type === "characterData" || (i.type === "childList" && this.doBet())) {
        break;
      }
    }
  });

  config = { characterData: true, childList: true, subtree: true };
  this.observer = observer;
  this.observer.observe(this.element, config);
};

BettingAssistant.prototype.stopObserving = function () {
  if (this.observer) {
    this.observer.disconnect();
  }
};

const assistant = new BettingAssistant();
assistant.startObserving();
}



function startK3() {




  const BettingAssistant = function () {

    this.win = true;
    this.lastBet = "စုံ";
    this.inital_amount = 1;
    this.amount = this.inital_amount;
    this.lose_increase = 1;
    this.lose_limit = 1;
    this.current_lose_limit =  1;
    this.to = "o";
    this.type = "ev";
    this.history = ["စုံ", "မ"];
    this.element = document.querySelectorAll("div[data-v-60ededf7]")[7];
    this.observer = null;
  };

  BettingAssistant.prototype.checkWin = function (e, t) {

    let bl_ele = document.getElementsByClassName('Wallet__C-balance-l1')[0].textContent;
    let numericValue = Math.floor(parseFloat(bl_ele.replace(/[^\d.-]/g, "").replace(/,/g, "")));
    console.log("{'budget':"+ numericValue+"}");


    let target = e === "e" ? "မ" : "စုံ";
    let ele = document.querySelectorAll("span[data-v-f5a8bf77]")[2].textContent;
    this.history.push(ele);

    if (t === "ev") {
      if (ele === target) {
        console.log(ele);
        return true;
      } else {
        console.log(ele + " " + target);
        return false;
      }
    } else {
      if (ele === target) {
        return true;
      } else {
        return false;
      }
    }
  };

  BettingAssistant.prototype.doBet = async function () {
    await this.sleep(6000);
    this.win = this.checkWin(this.to, this.type);
    
    if (this.win) {
      this.current_lose_limit = 1;
      console.log("win", 10 * this.amount);
      this.amount = this.inital_amount;

    } else {
      this.current_lose_limit++;
      if (this.current_lose_limit == this.lose_limit){
        this.amount = this.inital_amount;
        this.current_lose_limit = 1;
      }else {
       this.amount = this.amount * this.lose_increase;

     }
   }
   console.log("{'lose':"+this.current_lose_limit+"}");
   this.setBetLogic(this.win);
   this.actionBet(this.to, this.amount);
   
   console.log("###############################################", "");
 };

 BettingAssistant.prototype.actionBet = async function (e, t) {
  if (e === "o") {
    document.getElementsByClassName("K3B__C-odds-rate")[19].click();
    for (let i = 0; i <= t; i++) {
      if (i !=0 && i != t){
        await this.sleep(100);
        document.getElementsByClassName("Betting__Popup-btn bgcolor")[1].click();
      }
    }
    await this.sleep(1000);
    document.getElementsByClassName("Betting__Popup-foot-s bgcolor")[0].click();
  } else if (e === "e") {
    document.getElementsByClassName("K3B__C-odds-rate")[18].click();
    for (let i = 0; i <= t; i++) {
      if (i !=0 && i != t){
        await this.sleep(100);
        document.getElementsByClassName("Betting__Popup-btn bgcolor")[1].click();
      }

    }
    await this.sleep(1000);
    document.getElementsByClassName("Betting__Popup-foot-s bgcolor")[0].click();
  }
};

BettingAssistant.prototype.sleep = function (e) {
  return new Promise(t => setTimeout(t, e));
};

BettingAssistant.prototype.setBetLogic = function (e) {
  let t = this.estimateNextResult(this.history);

  t === "စုံ" ? (this.to = "o", console.log("{'bet_amount': စုံ " + this.amount * 10 +"}")) : (this.to = "e", console.log("{'bet_amount': မ" + this.amount * 10 +"}"));

};

BettingAssistant.prototype.estimateNextResult = function (e) {
  const randomIndex = Math.floor(Math.random() * e.length);
  return e[randomIndex];
};

BettingAssistant.prototype.startObserving = function () {
  observer = new MutationObserver((e, t) => {
    for (const i of e) {
      if (i.type === "characterData" || (i.type === "childList" && this.doBet())) {
        break;
      }
    }
  });

  config = { characterData: true, childList: true, subtree: true };
  this.observer = observer;
  this.observer.observe(this.element, config);
};

BettingAssistant.prototype.stopObserving = function () {
  if (this.observer) {
    this.observer.disconnect();
  }
};

const assistant = new BettingAssistant();
assistant.startObserving();
}











if (window.location.href === "https://6lottery.com/#/main") {
  console.log("setting ... uid");
  setUID();



} 

else if (window.location.href === "https://6lottery.com/#/home/AllLotteryGames/K3?id=2") {

  checkUid(startK3);

}
else if (window.location.href === "https://6lottery.com/#/home/AllLotteryGames/WinGo?id=1"){

  checkUid(startWingo);


}

