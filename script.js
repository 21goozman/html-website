document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const service = this.service.value;
  const date = this.date.value;
  const time = this.time.value;

  const msg = `🎉 Hey ${name}, your ${service} session is booked for ${date} at ${time}. We'll see you then! 💅`;
  
  document.getElementById("confirmationMsg").textContent = msg;
  document.getElementById("confirmationMsg").style.color = "#ff1493";

  this.reset();
});
