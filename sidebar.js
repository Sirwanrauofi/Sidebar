
// ********************************************************    Mini project (** toggle Sidebar **) by Naser Raoofi   **********************************
const sidebar=document.querySelector('.sidebar');

function toggleSidebar(action){sidebar.classList[action]('show-sidebar')}
// toggle sidebar visibility 

document.querySelector('.sidebar-toggle').addEventListener('click',()=>toggleSidebar('toggle'));

// Hide sidebar

document.querySelector('.close-btn').addEventListener('click',()=>toggleSidebar('remove'));
