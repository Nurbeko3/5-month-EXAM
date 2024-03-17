// header anim js start
const headerNav = document.querySelector(".header__nav");
const headerBtn = document.querySelector(".header__btn");

headerBtn.addEventListener("click", function () {
  headerNav.classList.toggle("active");
});
// header anim js end


let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")



let tBody = document.querySelector(".tbody")
let tHead = document.querySelector(".thead")




// login js start
const loginPadge = document.querySelector(".login-padge");
const loginBtn = document.querySelector(".login__btn");
const logoutBtn = document.querySelector(".logout-btn");
const loginEmail = document.querySelector(".login__email");
const loginPassword = document.querySelector(".login__password");

loginBtn.addEventListener("click", function () {
  const login = "nurbek_saxophonist@gmail.com";
  const pass = "Nurbek1215225";
  if(loginEmail.value == login && loginPassword.value == pass){
    loginPadge.classList.add("hidden");
    window.localStorage.setItem('_recaptcha',"QbJkIQvv51356gUIbv907954486123%^:1guvj")
  }else{
    alert('login parol xato')
  }
});
logoutBtn.addEventListener("click", function () {
  loginPadge.classList.remove("hidden");
});
if(window.localStorage.getItem("_recaptcha")){
  loginPadge.classList.add("hidden");

}
// login js end

function logout(){
  window.localStorage.removeItem('_recaptcha')
}

let addBtn = document.querySelector(".new-student-btn");


let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents() {
  const tbody = document.querySelector(".tbody");
  tbody.innerHTML = ""; 
  students.forEach(student => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="../images/table/user-img.png" alt="student-img"></td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.enrollNumber}</td>
      <td>${student.admissionDate}</td>
      <td>
      <button class="update-student" onclick="updateStudent('${student.email}')">
      <img src="./images/icons/pen-icon.svg" alt="pen-icon.svg">
    </button>
    <button class="delete-student" onclick="deleteStudent('${student.email}')">
      <img src="./images/icons/trash-icon.svg" alt="trash-icon.svg">
    </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addStudent(student) {
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents(); 
}

function deleteStudent(email) {
  students = students.filter(student => student.email !== email);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents(); 
}
function updateStudent(email){
  elModalWrapper.classList.add("open-modal");

  elModal.innerHTML = `
    <form class="add-form">
      <label>
        <div class="img-div">
          <img class="render-img" src="../images/sidebar/user-img.jpeg" alt="" width="100%" height="100%"/>
        </div>
        <input class="visually-hidden get-img" type="file"/>
      </label>
      <div class="form2-div">
        <label class="label-of-form">
          <span class="">Enter your name</span>
          <input class="label-input" required type="text" placeholder="Enter your name" name="name"/>
        </label>
        <label class="label-of-form">
          <span class="">Enter your email</span>
          <input class="label-input" required type="email" placeholder="Enter your email adress" name="email"/>
        </label>
        <label class="label-of-form">
          <span class="">Enter your phone number</span>
          <input class="label-input" required type="text" placeholder="Enter your number" name="phone"/>
        </label>
        <label class="label-of-form">
        <span class="">Enter your phone enroll number</span>
        <input class="label-input" required type="text" placeholder="Enter your number" name="enrollNumber"/>
      </label>
        <label class="label-of-form">
          <span class="">Enter data admission</span>
          <input class="label-input" type="text" placeholder="Enter data admission" name="admissionDate"/>
        </label>
        <button type="submit" class="modal-btn">Добавить</button>
      </div>
    </form>
  `;

  const addForm = document.querySelector('.add-form');

  addForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(addForm);

    const newStudent = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      enrollNumber: formData.get('enrollNumber'),
      admissionDate: formData.get('admissionDate'),
      img: document.querySelector('.render-img').src,
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    elModalWrapper.classList.remove("open-modal");

  });
  
  
students = students.filter(student => student.email !== email);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents(); 
}





addBtn.addEventListener("click", function() {
  elModalWrapper.classList.add("open-modal");
  elModal.innerHTML = `
    <form class="add-form">
      <!-- Inputlar va tugmalar uchun HTML kodlari -->
    </form>
  `;
});

function storeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function retrieveData(key) {
  return JSON.parse(localStorage.getItem(key));
}

window.addEventListener("DOMContentLoaded", function() {
  students = retrieveData("students") || [];
  renderStudents();
});

addBtn.addEventListener("click", function() {
  elModalWrapper.classList.add("open-modal");

  elModal.innerHTML = `
    <form class="add-form">
      <label>
        <div class="img-div">
          <img class="render-img" src="../images/sidebar/user-img.jpeg" alt="" width="100%" height="100%"/>
        </div>
        <input class="visually-hidden get-img" type="file"/>
      </label>
      <div class="form2-div">
        <label class="label-of-form">
          <span class="">Enter your name</span>
          <input class="label-input" required type="text" placeholder="Enter your name" name="name"/>
        </label>
        <label class="label-of-form">
          <span class="">Enter your email</span>
          <input class="label-input" required type="email" placeholder="Enter your email adress" name="email"/>
        </label>
        <label class="label-of-form">
          <span class="">Enter your phone number</span>
          <input class="label-input" required type="text" placeholder="Enter your number" name="phone"/>
        </label>
        <label class="label-of-form">
        <span class="">Enter your phone enroll number</span>
        <input class="label-input" required type="text" placeholder="Enter your number" name="enrollNumber"/>
      </label>
        <label class="label-of-form">
          <span class="">Enter data admission</span>
          <input class="label-input" type="text" placeholder="Enter data admission" name="admissionDate"/>
        </label>
        <button type="submit" class="modal-btn">Добавить</button>
      </div>
    </form>
  `;

  const addForm = document.querySelector('.add-form');

  addForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(addForm);

    const newStudent = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      enrollNumber: formData.get('enrollNumber'),
      admissionDate: formData.get('admissionDate'),
      img: document.querySelector('.render-img').src,
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    elModalWrapper.classList.remove("open-modal");

  });
});


// Search start 
let elSearchInput = document.querySelector(".header__search")

function searchStudents(searchTerm) {
  const filteredStudents = students.filter(student => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.phone.includes(searchTerm) ||
           student.enrollNumber.includes(searchTerm) ||
           student.admissionDate.includes(searchTerm);
  });

  return filteredStudents;
}

elSearchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.trim(); 
  const filteredStudents = searchStudents(searchTerm);
  renderFilteredStudents(filteredStudents); 
});

function renderFilteredStudents(filteredStudents) {
  const tbody = document.querySelector(".tbody");
  tbody.innerHTML = ""; 
  filteredStudents.forEach(student => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="../images/table/user-img.png" alt="student-img"></td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.enrollNumber}</td>
      <td>${student.admissionDate}</td>
      <td>
        <button class="update-student" onclick="updateStudent('${student.email}')">
          <img src="./images/icons/pen-icon.svg" alt="pen-icon.svg">
        </button>
        <button class="delete-student" onclick="deleteStudent('${student.email}')">
          <img src="./images/icons/trash-icon.svg" alt="trash-icon.svg">
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}





// Search end



elModalWrapper.addEventListener("click", function(evt){
  if(evt.target.id == "modal-wrapper"){
      elModalWrapper.classList.remove("open-modal")
  }
})




