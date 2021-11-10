function doSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("username_block").innerHTML = "username: " + username;
    document.getElementById("password_block").innerHTML = "password: " + password;
    setDataToLS(username, password);
};
function setDataToLS(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}