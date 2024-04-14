const ulContainer = document.querySelector('ul');
const itemNavigationBar = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
const itemNavigationOrder = [
  { 'Section 1': 'header' },
  { 'Section 2': 'section-1' },
  { 'Section 3': 'section-2' },
  { 'Section 4': 'section-3' }
];

//Create each item in navigation bar
for (let i = 0; i < itemNavigationBar.length; i++) {
  let li = document.createElement('li');
  li.setAttribute('class', 'navbar-item');
  li.style.zIndex = 1000;
  li.innerHTML = itemNavigationBar[i];
  ulContainer.appendChild(li);
}

// Declare function when clicking on each item in navigation bar
function onClickItem(event) {
  event.preventDefault();
  let section, content, location;
  let getNavbarItemActive = ulContainer.querySelectorAll('.navbar-item-active');

  //Delete class 'navbar-item-active' when user click new item on navigation bar
  if (getNavbarItemActive.length > 0) {
    getNavbarItemActive[0].classList = "navbar-item";   
  }

  //Applying this class into new item when clicking on navigation bar
  if (itemNavigationBar.includes(event.target.textContent) > -1) {
    event.target.classList.add('navbar-item-active');
  }


  // Click item in order to move to correspond section with smooth scroll behavior
  let key = event.target.textContent;
  for (let i = 0; i < itemNavigationOrder.length; i++) {
    let item = itemNavigationOrder[i];
    let value = item[key];
    if (value) {
      section = document.getElementById(value);
      //content = section.getAttribute('data-content');
      location = section.getBoundingClientRect();

      window.scrollTo({
        top: location.y,
        left: location.x,
        behavior: 'smooth'
      });
    }
  }

}
// Click on each particular on item
const navBarItem = document.querySelectorAll('.navbar-item');

navBarItem.forEach(function(navBar) {
  navBar.addEventListener('click',  onClickItem)
});


//Click in order to back the top
const toTop = document.querySelector('#to-the-top');
toTop.addEventListener('click', function (i) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})
