const name = "Zumrudu Anka";

const department = "Entrepreneur";

const salary = 9999999999;

///////////////////////////////////////////////////////////

//const a = "Name: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

///////////////////////////////////////////////////////////

const a = `Name: ${name}\nDepartment: ${department}\nSalary: ${salary}`;
console.log(a);

///////////////////////////////////////////////////////////

// const html = "<ul>" + 
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" + 
//              "</ul>";

// document.body.innerHTML = html;
// console.log(html);

///////////////////////////////////////////////////////////

function hellofunc(){
    return "Hello";
}

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10/4}</li>
                <li>${hellofunc()}</li>
            </ul>
            `;

document.body.innerHTML = html;