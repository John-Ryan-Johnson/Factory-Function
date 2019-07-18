const whereToDisplayContactsInDom = document.querySelector("#contactList")

createContact = (name, title, email) =>   ({
    name, title, email
    })



const displayContact = contact => {
  const contactHtmlRepresentation = `
    <section class="contact">
        <h1>
            ${contact.name}
        </h1>
        <h2>
            ${contact.title}
        </h2>            
        <div>
            ${contact.email}
        </div>
    </section>
`

  whereToDisplayContactsInDom.innerHTML += contactHtmlRepresentation
}

const mark = createContact(
  "Mark Brownlee",
  "Head Leaf Gut",
  "mark@mark.com"
)
const john = createContact(
  "John Johnson",
  "Crazy Eyes",
  "john@john.com"
)
const kalei = createContact(
  "Kalei Johnson",
  "My Beloved",
  "kalei@kalei.com"
 )

const devon = createContact(
  "Devon Johnson",
  "Music Man",
  "devon@devon.com"
)
const dylan = createContact(
  "Dylan Johnson",
  "Big Head",
  "dylan@dylan.com"
)
 


displayContact(mark)
displayContact(john)
displayContact(kalei)
displayContact(devon)
displayContact(dylan)
  