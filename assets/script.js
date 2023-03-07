function updateTime() {
    var time = dayjs().format('MMM D, YYYY, h:mm:ss a')
    $('#current-time-date').text(time);
}
setInterval(updateTime, 1000);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})