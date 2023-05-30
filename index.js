const cards = [
  {
    icon: "./img.png",
    title: "Spring boot",
    text: `Takes an opinionated view of building 
                Spring applications and gets you up and 
                running as quickly as possible.`,
  },
  {
    icon: "./img.png",
    title: "Spring Framework",
    text: `Provides core support for dependency injection, 
                transaction management, web apps, data access, 
                messaging, and more.`,
  },
  {
    icon: "./img.png",
    title: "Spring Data",
    text: `Provides a consistent approach to data access – 
                relational, non-relational, map-reduce, 
                and beyond.`,
  },
  {
    icon: "./img.png",
    title: "Spring Cloud",
    text: `Provides a set of tools for common patterns in distributed systems. 
                Useful for building and deploying microservices.`,
  },
  {
    icon: "./img.png",
    title: "Spring Cloud Data Flow",
    text: `Provides an orchestration service for composable
                 data microservice applications on modern runtimes.`,
  },
  {
    icon: "./img.png",
    title: "Spring Security",
    text: `Protects your application with comprehensive and 
                extensible authentication and authorization support.`,
  },
];

const headerItems = [
  {
    title: "Why Spring",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Learn",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Projects",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Academy",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Support",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
  {
    title: "Community",
    inner: [
      "Overview",
      "Microservices",
      "Reactive",
      "Event Driven",
      "Cloud",
      "Web Applications",
      "Serverless",
      "Batch",
    ],
  },
];

window.onload = onLoad;

let filterCards = cards;

function onLoad() {
  loadData();
  loadHeaderData();
}

let dropdownId = 0;

function dropDownClick() {
  const dropdown = this.nextSibling;
  if (this.parentElement.id !== dropdownId) {
    let prevEl = document.getElementsByClassName("open")[0];
    prevEl?.classList.remove("open");
    dropdownId = this.parentElement.id;
    dropdown.classList.add("open");
  } else {
    dropdownId = 0;
    dropdown.classList.remove("open");
  }
}

let timeout;

function searchCards(e) {
  const wrapper = document.getElementsByClassName("items-wrapper")[0];
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    filterCards = cards.filter(
      (c) =>
        c.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        c.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    wrapper.innerHTML = "";
    loadData();
  }, 300);
}

function loadData() {
  const wrapper = document.getElementsByClassName("items-wrapper")[0];
  if (filterCards.length !== 0) {
    filterCards.forEach((card) => {
      let cardWrapper = document.createElement("div");
      cardWrapper.classList.add("item");
      let img = cardWrapper.appendChild(document.createElement("img"));
      img.alt = "icon";
      img.src = card.icon;
      let cardContent = cardWrapper.appendChild(document.createElement("div"));
      let title = cardContent.appendChild(document.createElement("h3"));
      let textTitle = document.createTextNode(card.title);
      title.appendChild(textTitle);
      let text = cardContent.appendChild(document.createElement("p"));
      let textText = document.createTextNode(card.text);
      text.appendChild(textText);
      wrapper.appendChild(cardWrapper);
    });
  } else {
    let noTitle = wrapper.appendChild(document.createElement("h2"));
    let noTitleText = document.createTextNode("No results...");
    noTitle.appendChild(noTitleText);
  }
}

function loadHeaderData() {
  const sidebar = document.getElementsByClassName("content-header")[0];
  headerItems.forEach((item, i) => {
    let wrapperText = sidebar.appendChild(document.createElement("div"));
    wrapperText.classList.add("wrapper-text");
    wrapperText.setAttribute("id", i);
    let headerText = wrapperText.appendChild(document.createElement("p"));
    headerText.classList.add("headertext");
    headerText.onclick = dropDownClick;
    let title = document.createTextNode(item.title);
    headerText.appendChild(title);

    let dropdown = wrapperText.appendChild(document.createElement("div"));
    dropdown.classList.add("dropdown");
    item.inner.forEach((drop) => {
      let dropItem = dropdown.appendChild(document.createElement("p"));
      let dropText = document.createTextNode(drop);
      dropItem.appendChild(dropText);
    });
  });
}

function openSidebar() {
  const sidebar = document.getElementsByClassName("content-header")[0];
  sidebar.classList.remove("none");
}

function closeSidebar() {
  const sidebar = document.getElementsByClassName("content-header")[0];
  sidebar.classList.add("none");
}
