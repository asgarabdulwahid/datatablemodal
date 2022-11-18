$(document).ready( function () {
    $('#datatable').DataTable();
    } );

const students=  [
    {id:1, name:'Abdulwahid Asgar', age:'22', section:'F', contact:'09123456789'},
    {id:2, name:'Erica Mae Brosas', age:'21', section:'E', contact:'09123456789'},
    {id:3, name:'Rafael Palma', age:'23', section:'F', contact:'09123456789'},
    {id:4, name:'Stephen Torres', age:'21', section:'B', contact:'09123456789'},
    {id:5, name:'Alyssa Ashley Mae Adal', age:'23', section:'C', contact:'09123456789'},
    {id:6, name:'Marcus Zobel', age:'24', section:'D', contact:'09123456789'},
    {id:7, name:'Mark Jerry Asarez', age:'25', section:'D', contact:'09123456789'},
    {id:8, name:'Ester Grace C. Lipke', age:'21', section:'B', contact:'09123456789'},
    {id:9, name:'Ma. Eula Faith Jalandoni', age:'25', section:'B', contact:'09123456789'},
    {id:10, name:'Kurt Santiguel', age:'21', section:'A', contact:'09123456789'},
    {id:11, name:'Ronel Banda', age:'20', section:'A', contact:'09123456789'},
    {id:12, name:'John Patrick Solis', age:'19', section:'G', contact:'09123456789'},
    {id:13, name:'Kenneth Cairme', age:'25', section:'D', contact:'09123456789'},
    {id:14, name:'Joanna Marie', age:'28', section:'A', contact:'09123456789'},
    {id:15, name:'Iris Joyce Oubasan', age:'21', section:'C', contact:'09123456789'},
    {id:16, name:'Reyna Raze', age:'26', section:'F', contact:'09123456789'}
];

function displayStudents() {
  var datatable = `
              <div class="container">
                <table id="datatable" class="table table-striped">
                  <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Section</th>
                    <th>Contact No.</th>
                    <th>Modal View  </th>
                  </thead>
                  <tbody>
                    `;
    for (var student of students) {  
          datatable += "<tr><td>" + student.name + "</td><td>" + student.age + "</td><td>" + student.section + "</td><td>" + student.contact + `</td><td><button class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModalCenter" onclick='log(`+ student.id +`)'>Student Info</button></td></tr>`; 
    }

    datatable += `
            </tbody>
            </table>
            </div>`;
    document.getElementById("studentTable").innerHTML = datatable;

}
displayStudents();

function log(id) {
  let student = students.filter((i) => i.id == id)
      $("#exampleModal").modal();
      assignValueToInput(student);
}

function assignValueToInput(student) {
      document.getElementById('name').value = student[0].name;
      document.getElementById('age').value = student[0].age;
      document.getElementById('section').value = student[0].section;
      document.getElementById('contact').value = student[0].contact;
}

