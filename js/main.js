 // Get references to the sections
 const addVideoSection = document.getElementById('AddVideo');
 const deleteVideoSection = document.getElementById('DeleteVideo');
 const addUsersSection = document.getElementById('AddUsers');
 const deleteUsersSection = document.getElementById('DeleteUser');

 const SubjectsSection = document.getElementById('Subjects');
 const TeachersSection = document.getElementById('Teachers');


 

 // Get references to the navigation links
 const addVideoLink = document.getElementById('nav-link-add-video');
 const deleteVideoLink = document.getElementById('nav-link-delete-video');
 const addUsersLink = document.getElementById('nav-link-add-users');
 const deleteUsersLink = document.getElementById('nav-link-delete-users');
 const SubjectsLink = document.getElementById('nav-link-Subject');
 const TeachersLink = document.getElementById('nav-link-Teachers');


 // Function to show a specific section and hide others
 function showSection(section) {
     addVideoSection.style.display = 'none';
     deleteVideoSection.style.display = 'none';
     addUsersSection.style.display = 'none';
     deleteUsersSection.style.display = 'none';


     section.style.display = 'block';
 }


 function GradesshowSection(section) {
    SubjectsSection.style.display='none';
     TeachersSection.style.display='none';

    section.style.display = 'block';
}



 // Add event listeners to the navigation links
 addVideoLink.addEventListener('click', function () {
     showSection(addVideoSection);
 });

 deleteVideoLink.addEventListener('click', function () {
     showSection(deleteVideoSection);
 });

 addUsersLink.addEventListener('click', function () {
     showSection(addUsersSection);
 });

 deleteUsersLink.addEventListener('click', function () {
     showSection(deleteUsersSection);
 });

 // Show the default section when the page loads
 showSection(addVideoSection);
 



 SubjectsLink.addEventListener('click',function(){
    GradesshowSection(SubjectsSection);
  });
 
  TeachersLink.addEventListener('click',function(){
     GradesshowSection(TeachersSection);
   });
 
