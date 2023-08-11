const currentDate = document.querySelector(".current__date");
const days = document.querySelector(".days");
const icons = document.querySelectorAll(".icons span");

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// getting new date, current year and month

let date = new Date(),
curYear = date.getFullYear(),
curMonth = date.getMonth();

function renderCalendar() {
    let firstDayofMonth = new Date(curYear, curMonth, 1).getDay(), // in this way we find the first day of current month
    lastDateofMonth = new Date(curYear, curMonth + 1, 0).getDate(),// in this way we find the last day of current month
    lastDayofMonth = new Date(curYear, curMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(curYear, curMonth, 0).getDate();
    
    liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth + 1 - i}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isDay = i === date.getDate() && curMonth === new Date().getMonth()
                    && curYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isDay}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

   currentDate.innerHTML = `${month[curMonth]} ${curYear}`;
   days.innerHTML = liTag;
}

renderCalendar()

icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        curMonth = icon.id === "prev" ? curMonth - 1 : curMonth + 1;
        if (curMonth < 0 || curMonth > 11) {
            date = new Date(curYear, curMonth);
            curYear = date.getFullYear();
            curMonth = date.getMonth();
        } 

        renderCalendar();
    })
})
