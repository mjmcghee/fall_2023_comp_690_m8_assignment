// Create variables
let emp
let empList = []
const $ = id => document.getElementById(id)

// Count Rows
const rowCounter = (empCount) => {
    rowCount = table.rows.length - 1
    empCount.textContent = `(${rowCount})`
}

// DELETE EMPLOYEE
const deleteBtn = (row) => {
    if (confirm('Are you sure you want to delete this employee?') == true) {
        let i = row.parentNode.parentNode.rowIndex
        document.getElementById('empTable').deleteRow(i)
        rowCounter(empCount)
    } else {
        // nothing
    }
}

// RESET THE FORM
const resetForm = () => {
    $('addForm').reset()
    $('id').focus()
}

// creating cells
for (let c = 0; c < 5; c++) {
    // create <tr> element
    const currentRow = document.createElement("tr")
    // create <td> element
    const currentText = document.createTextNode("tr")

}

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let table = $('empTable')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $('empCount')

// ADD EMPLOYEE ARRAY
const intEmp = () => {
    // COLLECT VALUES FROM FORM ELEMENTS
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = $('id').value
    let name = $('name').value
    let empExt = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1)
    row.className = 'selectedRow'

    // Create button
    const btn = document.createElement('button')
    btn.className = 'button'
    btn.id = 'button'
    btn.setAttribute("onclick", "deleteBtn(this)")
    btn.textContent = 'X'
    }

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // COLLECT VALUES FROM FORM ELEMENTS
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = $('id').value
    let name = $('name').value
    let empExt = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1)
    row.className = 'selectedRow'

    // Create button
    const btn = document.createElement('button')
    btn.className = 'button'
    btn.id = 'button'
    btn.setAttribute("onclick", "deleteBtn(this)")
    btn.textContent = 'X'

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    c1Value = document.createTextNode(empID)
    c2Value = document.createTextNode(name)
    c3Value = document.createTextNode(empExt)
    c4Value = document.createTextNode(email)
    c5Value = document.createTextNode(dept)
    c6Value = btn
    c1.appendChild(c1Value)
    c2.appendChild(c2Value)
    c3.appendChild(c3Value)
    c4.appendChild(c4Value)
    c5.appendChild(c5Value)
    c6.appendChild(c6Value)

    table.appendChild(row)
    
    resetForm()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    rowCounter(empCount)
})

// CREATE AN ARRAY OF EMPLOYEES
let empArr = [
    [80000001,'Marcus',1001,"marcus@evilcorp.com","Executive"],
    [80000002,'Stacy',1002,"stacy@evilcorp.com","Administrative"],
    [80000003,'Larry',1003,"larry@evilcorp.com","Quality Insurance"],
    [80000004,'Sarah',1004,"sarah@evilcorp.com","Marketing"],
    [80000005,'Miyako',1005,"miyako@evilcorp.com","Sales"],
    [80000006,'Shin',1006,"shin@evilcorp.com","Engineering"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
// load initial employee list

// const initialEmp = () => {
//     if (empList.length === 0) {
//         emp = localStorage.getItem('empInfo') || ''
//         for (let key of empArr) {
//             // console.log(key)
//             for (let value of key) {
//                 localStorage.empList = JSON.stringify(value)
//             }
//         }
//         let storage = JSON.parse(localStorage.empList)
//         console.log(storage)
//     }
// }

// const storageObject = () => {
//     if (empList.length === 0) {
//         storage = localStorage.getItem('employee') || ''
//         if (storage.length > 0) {
//             empList = JSON.parse(localStorage.getItem('employee'))
//             console.log(empList)
//         }
//     }
//     if (empList.length > 0) {
//         empList.sort()
//         list = empList.join('\n')
//         console.log(list)

        // DISPLAY TASKS STRING
        // $('task_list').value = list
    // }
// }
// initialEmp()

const storageList = () => {
    // console.log(empArr)
    for (const i of empArr) {
        // console.log(i)
        for (const x of i) {
        console.log(x)
        }
    }
    // empList.push(empArr)
}
// storageList()

// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = $('id').value
    let name = $('name').value
    let empExt = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [empID, name, empExt, email, dept]
    for (let i of newEmp) {
        console.log(i)
    }

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};