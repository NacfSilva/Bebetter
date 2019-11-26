var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var continue1 = document.getElementById("Continue");
var i = 0;
var j =0;

continue1.onclick = function(){
  if (j == 0){
    j++
    var hide1 = document.getElementById("question");
    var hide2 = document.getElementById("input-response");
    var hide3 = document.getElementById("instrution");

    clear.classList.remove("hidden");
    submit.classList.remove("hidden");
    hide1.classList.remove("hidden");
    hide2.classList.remove("hidden");

    hide3.classList.add("hidden");

  }
};
submit.onclick = function() {
  i++;
  if (j != 0) {
  if (i == 1) {
    var name = document.getElementById("name").value;
    var question = document.createElement("LABEL");
    question.id = "question1";
    var response = document.createElement("INPUT");
    response.id = "response1";
    var sentense = document.createElement("P");
    sentense.id = "sentense";
    document.getElementById("outputName").innerText = name;
    name = name.replace(" my ", " your ");
    name = name.replace(" my", " your");
    name = name.replace("my ", "your ");
    question.innerText = "Why do you want " + name + "?";
    question.classList.add("col-12");
    question.classList.add("float-left");

    response.classList.add("col-12");
    response.classList.add("col-md-8");
    response.classList.add("float-left");
    response.setAttribute("type", "text");

    sentense.classList.add("text-color2");
    sentense.classList.add("col-12");
    sentense.classList.add("col-md-4");
    sentense.classList.add("float-left");
    sentense.innerText = "Because I____.";

    document.getElementById("why1").appendChild(question);
    document.getElementById("ah1").appendChild(sentense);
    document.getElementById("ah1").appendChild(response);
    document.getElementById("name").remove();
  }
  if (i == 2) {
    var sentense1 = document.createElement("P");
    sentense1.id = "sentense1";
    var name1 = document.getElementById("response1").value;
    name1.id = "name1";
    var question1 = document.createElement("LABEL");
    question1.id = "question2";
    var response1 = document.createElement("INPUT");
    response1.id = "response2";
    document.getElementById("sentense").innerText = "Because I " + name1 + ".";
    name1 = name1.replace(" my ", " your ");
    name1 = name1.replace(" my", " your");
    name1 = name1.replace("my ", "your ");
    question1.innerText = "Alright, that's a start. So, why do you " + name1 + "?";
    question1.classList.add("col-12");
    question1.classList.add("float-left");

    response1.classList.add("col-12");
    response1.classList.add("col-md-8");
    response1.classList.add("float-left");
    response1.setAttribute("type", "text");

    sentense1.classList.add("text-color2");
    sentense1.classList.add("col-12");
    sentense1.classList.add("col-md-4");
    sentense1.classList.add("float-left");
    sentense1.innerText = "The reason why is because I____.";

    
    document.getElementById("why2").appendChild(question1);
    document.getElementById("ah2").appendChild(sentense1);

    document.getElementById("ah2").appendChild(response1);
    document.getElementById("response1").remove();
  }
  if (i == 3) {
    var sentense2 = document.createElement("P");
    sentense2.id = "sentense2";
    var name2 = document.getElementById("response2").value;
    name2.id = "name2";
    var question2 = document.createElement("LABEL");
    question2.id = "question3";
    var response2 = document.createElement("INPUT");
    response2.id = "response3";
    document.getElementById("sentense1").innerText = "The reason why is because I " + name2 + ".";
    name2 = name2.replace(" my ", " your ");
    name2 = name2.replace("my ", "your ");
    name2 = name2.replace(" my", " your");
    question2.innerText = "Okay than,that's important, but not enough.The reason I'm questing you is because I would like to understand you more, to realise what you pretend in your life. You told me that you " + name2 + ". Why is that?";
    question2.classList.add("col-12");
    question2.classList.add("float-left");

    response2.classList.add("col-12");
    response2.classList.add("col-md-8");
    response2.classList.add("float-left");
    response2.setAttribute("type", "text");

    sentense2.classList.add("text-color2");
    sentense2.classList.add("col-12");
    sentense2.classList.add("col-md-4");
    sentense2.classList.add("float-left");
    sentense2.innerText = "I appreciate your kindness, and I think it's important to understand the reason about this conversation. The real reason why I really want this in my life is____.";

    
    document.getElementById("why3").appendChild(question2);
    document.getElementById("ah3").appendChild(sentense2);
    document.getElementById("ah3").appendChild(response2);
    document.getElementById("response2").remove();
  }
  if (i == 4) {
    var sentense3 = document.createElement("P");
    sentense3.id = "sentense3";
    var name3 = document.getElementById("response3").value;
    name3.id = "name3";
    var question3 = document.createElement("LABEL");
    question3.id = "question4";
    var response3 = document.createElement("INPUT");
    response3.id = "response4";
    document.getElementById("sentense2").innerText = "I appreciate your kindness, and I think it's important to understand the reason about this conversation. The real reason why I really want this in my life is " + name3 + ".";
    name3 = name3.replace(" my ", " your ");
    name3 = name3.replace("my ", "your ");
    name3 = name3.replace(" my", " your");
    question3.innerText = "Very well. However, there must be more. Dont be scared about expressing your feelings. Okey...So, why do you " + name3 + "?";
    question3.classList.add("col-12");
    question3.classList.add("float-left");

    response3.classList.add("col-12");
    response3.classList.add("col-md-8");
    response3.classList.add("float-left");
    response3.setAttribute("type", "text");

    sentense3.classList.add("text-color2");
    sentense3.classList.add("col-12");
    sentense3.classList.add("col-md-4");
    sentense3.classList.add("float-left");
    sentense3.innerText = "Well, It's not easy to put forward my feelings, It's hard! However, I must do it to realise the person i need to be in my life. The reason why is because I____.";

    
    document.getElementById("why4").appendChild(question3);
    document.getElementById("ah4").appendChild(sentense3);
    document.getElementById("ah4").appendChild(response3);
    document.getElementById("response3").remove();
  }
  if (i == 5) {
    var sentense4 = document.createElement("P");
    sentense4.id = "sentense4";
    var name4 = document.getElementById("response4").value;
    name4.id = "name4";
    var question4 = document.createElement("LABEL");
    question4.id = "question5";
    var response4 = document.createElement("INPUT");
    response4.id = "response5";
    document.getElementById("sentense3").innerText = "Well, It's not easy to put forward my feelings, It's hard! However, I must do it to realise the person i need to be in my life. The reason why is because I " + name4 + ".";
    name4 = name4.replace(" my ", " your ");
    name4 = name4.replace(" my", " your");
    name4 = name4.replace("my ", "your ");
    question4.innerText = "Why?";
    question4.classList.add("col-12");
    question4.classList.add("float-left");

    response4.classList.add("col-12");
    response4.classList.add("col-md-8");
    response4.classList.add("float-left");
    response4.setAttribute("type", "text");

    sentense4.classList.add("text-color2");
    sentense4.classList.add("col-12");
    sentense4.classList.add("col-md-4");
    sentense4.classList.add("float-left");
    sentense4.innerText = "I____.";

    
    document.getElementById("why5").appendChild(question4);
    document.getElementById("ah5").appendChild(sentense4);
    document.getElementById("ah5").appendChild(response4);
    document.getElementById("response4").remove();
  }
  if (i == 6) {
    var sentense5 = document.createElement("P");
    sentense5.id = "sentense5";
    var name5 = document.getElementById("response5").value;
    name5.id = "name5";
    var question5 = document.createElement("LABEL");
    question5.id = "question6";
    var response5 = document.createElement("INPUT");
    response5.id = "response6";
    name5 = name5.replace(" my ", " your ");
    name5 = name5.replace("my ", "your ");
    name5 = name5.replace(" my", " your");
    question5.innerText = "That's it? You can do better!";
    question5.classList.add("col-12");
    question5.classList.add("float-left");

    response5.classList.add("col-12");
    response5.classList.add("col-md-8");
    response5.classList.add("float-left");
    response5.setAttribute("type", "text");

    sentense5.classList.add("text-color2");
    sentense5.classList.add("col-12");
    sentense5.classList.add("col-md-4");
    sentense5.classList.add("float-left");
    sentense5.innerText = "No, That's not it. I_____.";

    document.getElementById("sentense4").innerText = "I " + name5 + ".";
    document.getElementById("why6").appendChild(question5);
    document.getElementById("ah6").appendChild(sentense5);
    document.getElementById("ah6").appendChild(response5);
    document.getElementById("response5").remove();
  }
  if (i == 7) {
    var sentense6 = document.createElement("P");
    sentense6.id = "sentense6";
    var name6 = document.getElementById("response6").value;
    name6.id = "name6";
    var question6 = document.createElement("LABEL");
    question6.id = "question7";
    var response6 = document.createElement("INPUT");
    response6.id = "response7";
    document.getElementById("sentense5").innerText = "No, That's not it. I " + name6 + ".";
    name6 = name6.replace(" my ", " your ");
    name6 = name6.replace(" my", " your");
    name6 = name6.replace("my ", "your ");
    question6.innerText = "Alright, We are almost done. Last but not least... why do you " + name6 + "?";
    question6.classList.add("col-12");
    question6.classList.add("float-left");

    response6.classList.add("col-12");
    response6.classList.add("col-md-8");
    response6.classList.add("float-left");
    response6.setAttribute("type", "text");

    sentense6.classList.add("text-color2");
    sentense6.classList.add("col-12");
    sentense6.classList.add("col-md-4");
    sentense6.classList.add("float-left");
    sentense6.innerText = "Because I____.";

   
    document.getElementById("why7").appendChild(question6);
    document.getElementById("ah7").appendChild(sentense6);
    document.getElementById("ah7").appendChild(response6);
    document.getElementById("response6").remove();
  }
  if (i == 8) {
    var name7 = document.getElementById("response7").value;
    name7.id = "name7";
    document.getElementById("sentense6").innerText = "Because I " + name7 + ".";

    name7 = name7.replace(" my ", " your ");
    name7 = name7.replace("my ", "your ");
    name7 = name7.replace(" my", " your");
    document.getElementById("final").innerText = "Let me tell you something, " + name7 + ", is your purpose in life! If you want it so badly, do it! Don't let people to underestimate you don't let people decide your future. You are the one who knows better! Do it! Without fear. Do it before it's too Late. Thank you for this conversation!";
    document.getElementById("final").classList.add("text-grey");
    document.getElementById("final").classList.add("d-flex");
    document.getElementById("final").classList.add("justify-content-center");
    document.getElementById("response7").remove();
  }
  if (i > 8) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-12");
    name.classList.add("col-md-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question7").remove();
    document.getElementById("question6").remove();
    document.getElementById("question5").remove();
    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense6").remove();
    document.getElementById("sentense5").remove();
    document.getElementById("sentense4").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    document.getElementById("final").remove();
    i = 0;
  }
}
};

clear.onclick = function() {
  if(j!=0){
  if (i == 0) {
    return;
  }
  if (i == 1) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question1").remove();
    document.getElementById("response1").remove();

    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 2) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question2").remove();
    document.getElementById("response2").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 3) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("response3").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 4) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("response4").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 5) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question5").remove();
    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("response5").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense4").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 6) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question6").remove();
    document.getElementById("question5").remove();
    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("response6").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense5").remove();
    document.getElementById("sentense4").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i == 7) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question7").remove();
    document.getElementById("question6").remove();
    document.getElementById("question5").remove();
    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("response7").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense6").remove();
    document.getElementById("sentense5").remove();
    document.getElementById("sentense4").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    i = 0;
  }
  if (i >= 8) {
    var name = document.createElement("INPUT");
    name.id = "name";
    name.classList.add("col-8");
    name.classList.add("float-left");
    name.setAttribute("type", "text");
    document.getElementById("input-response").appendChild(name);
    document.getElementById("outputName").innerText = "____";

    document.getElementById("question7").remove();
    document.getElementById("question6").remove();
    document.getElementById("question5").remove();
    document.getElementById("question4").remove();
    document.getElementById("question3").remove();
    document.getElementById("question2").remove();
    document.getElementById("question1").remove();
    document.getElementById("sentense6").remove();
    document.getElementById("sentense5").remove();
    document.getElementById("sentense4").remove();
    document.getElementById("sentense3").remove();
    document.getElementById("sentense2").remove();
    document.getElementById("sentense1").remove();
    document.getElementById("sentense").remove();
    document.getElementById("final").remove();
    i = 0;
  }
}
};