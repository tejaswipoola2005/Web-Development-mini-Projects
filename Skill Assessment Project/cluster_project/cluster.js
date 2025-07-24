const form = document.getElementById("userForm");
const profile = document.getElementById("profile");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const mail = document.getElementById("mail").value;
  const department = document.getElementById("department").value;
  const projectLinks = document.getElementById("projectLinks").value;
  const description = document.getElementById("description").value;
  const profileImage = document.getElementById("profileImage").files[0];


  document.getElementById("displayUsername").innerText = username;
  document.getElementById("displayMail").innerText = mail;
  document.getElementById("displayDepartment").innerText = department;
  document.getElementById("displayProjects").innerText = projectLinks;
  document.getElementById("displayDescription").innerText = description;

  if (profileImage) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("displayImage").src = e.target.result;
    };
    reader.readAsDataURL(profileImage);
  }


  form.classList.add("hidden");
  profile.classList.remove("hidden");
});

function resetForm() {
  form.reset();
  form.classList.remove("hidden");
  profile.classList.add("hidden");
}
