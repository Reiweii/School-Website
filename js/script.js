function showPage(pageId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove("active"));

    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add("active");
    }
}

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle("show");
    }
}



const menuLinks = document.querySelectorAll(".hamburger-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("hamburgerMenu1");
        if (menu) {
            menu.classList.remove("show");
        }
    });
});



function toggleLearnMore() {
    const more = document.getElementById("morePrograms");
    const list = document.getElementById("programList"); 
    const btn = document.getElementById("learnMoreBtn");

    if (!more || !list || !btn) return;

    if (more.style.display === "block") {
        more.style.display = "none";
        list.style.display = "block";
        btn.textContent = "Learn More";
    } else {
        more.style.display = "block";
        list.style.display = "none";
        btn.textContent = "Back";
    }
}



function calculateTotal() {

    const totalElement = document.getElementById("totalFee");
    if (!totalElement) return;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let total = 0;

    checkboxes.forEach(box => {
        if (box.checked) {
            total += parseInt(box.value) || 0;
        }
    });

    totalElement.textContent = total.toLocaleString();
}



const feeCheckboxes = document.querySelectorAll('input[type="checkbox"]');

feeCheckboxes.forEach(box => {
    box.addEventListener('change', calculateTotal);
});



window.addEventListener('load', calculateTotal);


function submitEnrollment(event) {
    event.preventDefault();

    const form = event.target;
    const childName = form.childName.value;
    const birthDate = form.birthDate.value;
    const gender = form.gender.value;
    const parentName = form.parentName.value;
    const contactNumber = form.contactNumber.value;
    const email = form.email.value;
    const address = form.address.value;
    const totalFee = document.getElementById("totalFee").textContent;

    const content =
`-----STUDENT ENROLLMENT FORM-----
Child Name: ${childName}
Date of Birth: ${birthDate}
Gender: ${gender}

Parent Name: ${parentName}
Contact Number: ${contactNumber}
Email: ${email}
Address: ${address}

Total Fee: ₱${totalFee}
----------------------------------------------`;

    const blob = new Blob([content], {type: "text/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Enrollment_Form.txt";
    link.click();

    alert("Enrollment submitted successfully! We will contact you soon.");
}