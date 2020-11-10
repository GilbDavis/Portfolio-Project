export default function netlifyFormSendEmail() {

  let form = document.querySelector("#EmailSection form");
  let successParagraph = document.querySelector('#sendMessage');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    fetch(form.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(res => {
        if (res) {
          successParagraph.textContent += "Thank you for your message. It has been sent."
        }
      })
  });
}
