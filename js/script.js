// Business Logic
class AddressBook {
  constructor() {
    this.contacts = [];
    this.currentId = 0;
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  }

  addContact(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  }

  findContact(id) {
    if (this.contacts[id] !== undefined) {
      return this.contacts[id];
    }

    return false;
  }

  deleteContact(id) {
    if (this.contacts[id] === undefined) {
      return false;
    }

    delete this.contacts[id];
    return true;
  }
}

class Contact {
  constructor(firstName, lastName, phoneNumber, email) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.phoneNumber = phoneNumber);
    this.email = email;
  }

  getFullname() {
    const fullname = this.firstName + " " + this.lastName;
    return fullname.toUpperCase();
  }
  getDetails() {
    const details = this.firstName + " " + this.lastName + " " + this.phoneNumber + " " + this.email;
    return details;
  }
}
// this.contact.forEach((element,index) =>{

// });

// User interface
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    // Instantiate and create a new contact
    let addressBook = new AddressBook();
    let contact = new Contact(firstName, lastName, phoneNumber, email);

    // Add contact to addressbook
    addressBook.addContact(contact);

    // Get the user full name
    let userFullName = addressBook.findContact(contact.id).getFullname();
    let userDetails = addressBook.findContact(contact.id).getDetails();

    // Append the entry to the HTML page
    let li = document.createElement("li");
    li.textContent = userFullName;
    // document.getElementById("displayContact").prepend(li);

    let p = document.createElement("p");
    p.textContent = userDetails;
    // document.getElementById("display").prepend(p);

    // Clear the form
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";

    addressBook.contacts.forEach((element) => {
        let output = `
        <div class="card mt-3 mb-5" style="width: 18rem;">
        <div class="card-body">
        <h6 class="card-title">${element.getFullname()}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">${phoneNumber}</h6>
        <p class="card-text">${email}</p>
        </div>
    </div>
          
                    `

        $("#output2").append(output);
    });
  });
});

// document.addEventListener("(DOMContentLoaded", () => {
//     document.getElementById("display").addEventListener("submit", (e) => {
//         e.preventDefault();
//         document.getElementById("#display").prepend();
//     })
// })
{/* <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${element.Id}" aria-expanded="false" aria-controls="collapse${element.Id}d">
                                    ${element.getFullname()}
                                </button>
                            </h2>
                            <div id="collapse${element.Id}" class="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    ${element.getDetails()}
                                </div>
                            </div>
                        </div> */}

                        
                        // <div class="card" style ="width : 18rem">
                        // <h6>This song details includes</h6>
                        // <ul> 
                        // <li> Name : ${firstName}</li> 
                        // <li> Song : ${lastName}</li> 
                        // <li> Release date : ${phoneNumber}</li> 
                        // </ul>
                        // </div>
