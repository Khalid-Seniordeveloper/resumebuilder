
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
  
  
    // Access form values directly within the event handler
    const fullname = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const linked = document.querySelector('#linked').value;
    const contact = document.querySelector('#contact').value;
    const address= document.querySelector('#address').value;
    const area = document.querySelector('#area').value;
    const graduateYear = document.querySelector('#graduate-year').value;
    
    const certificate = document.querySelector('#certificate-name').value;
    
    const degree = document.querySelector('#degree').value;
    const uni = document.querySelector('#uni').value
    
    
    const instDate = document.querySelector('#date-institute').value
    const instName = document.querySelector('#institute-name').value
  
    generatePDF(fullname, email, linked, contact, address, area, graduateYear, degree, uni, certificate, instDate, instName );
  });
  
  function generatePDF(fullname, email, linked, contact, address, area, graduateYear, degree, uni, certificate, instDate, instName) {
    var doc = new jsPDF();
    const content = document.createElement('div');
  
    content.innerHTML = `
      <div class="name-container">
        <h1>${fullname}</h1>
        <h2>${certificate}</h2>
      </div>
  
      <div id="sub-container">
        <div id="sub-one">
          <h1>PERSONAL INFORMATION</h1>
          <ul>
            <li>NAME: ${fullname}</li>
            <li>EMAIL: ${email}</li>
            </ul>
  
          <p>${area}</p>
        </div>
        <div id="sec-one">
          <h1>Education</h1>
          <ul>
            <li class="none">Graduation year: ${graduateYear}</li>
            <li>Degree Name: ${degree}</li>
            <li>University name: ${uni}</li>
          </ul>
  
          <h1>Certification:</h1>
          <ul>
            <li class="none">Date institute: ${instDate}</li>
            <li>Certificate name: ${certificate}</li>
            <li>Institute name: ${instName}</li>
          </ul>
        </div>
      </div>
    `;
  
    html2pdf()
      .from(content)
      .save('myresume.pdf');
  }