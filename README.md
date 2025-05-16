# 🧾 Employee Manager - Angular App

## 🧪 Test Account

* **Email:** `marwan@example.com`
* **Mobile:** `01066245937`
* **Password:** `Marwan@123`

---

## ✅ Project Requirements

### 🔐 1. Login Page

* Fields: Email or Mobile Number, Password
* Validation:

  * Required fields
  * Email format
  * Egyptian mobile number only
* Button: "Login"
* Redirects to Home Page upon successful login

---

### 🏠 2. Home Page

Displays a list of employees including:

* Name
* Email
* Image URL
* Salary

### 🔁 CRUD Operations:

* **Create**: Add new employee with form validation
* **Read**: View employee list
* **Update**: Edit employee details with pre-filled form
* **Delete**: Remove employee from list

### 🔎 Search:

* Filter employees by name or email

---

### 💾 Data Storage:

* Employee data stored using Angular service with **local storage simulation**

---

### 🖌️ Styling & Tech Stack:

* Angular `^19`
* Bootstrap
* Responsive layout using Bootstrap Grid & Utilities
* Angular Forms (Reactive)
* Angular Routing

---

:

🎁 Bonus Features
❌ 1. Not Found Page
404 Page for invalid routes

📄 2. Employee Interface
Used TypeScript interface to define employee data type

⏳ 3. Loading Component
Spinner shown while data is loading

🛡️ 4. Route Guard
Prevents access to protected routes without login

📦 5. Lazy Loading
Applied lazy loading for Login and Home components

🧱 6. Angular Material
Used Material components:

Inputs

Buttons

Snackbar

Dialogs

Tables & Cards

✅ 7. Advanced Validation
Password Validation:

Min 8 chars, uppercase, lowercase, number, special character

Mobile Number Validation:

Egyptian phone format only: ^01[0-2,5]{1}[0-9]{8}$

📱 8. Login via Mobile Number
User can login using either email or Egyptian mobile number


---

## 🛠️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/employee-manager.git

# 2. Navigate into the project folder
cd employee-manager

# 3. Install dependencies
npm install

# 4. Run the app
ng serve
```

