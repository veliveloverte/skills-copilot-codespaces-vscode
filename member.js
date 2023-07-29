function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  member.style.display = "block";
  skills.style.display = "none";
  memberBtn.style.borderBottom = "solid 2px #fff";
  skillsBtn.style.borderBottom = "solid 2px #000";
}