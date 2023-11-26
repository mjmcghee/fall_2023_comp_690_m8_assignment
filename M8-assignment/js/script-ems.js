// Create variables
const $ = id => document.getElementById(id)

// Count Rows
const rowCounter = (empCount) => {
    let rowCount = table.rows.length - 1
    empCount.innerHTML = `(${rowCount})`
}

// RESET THE FORM
const resetForm = () => {
    $('addForm').reset()
    $('id').focus()
}

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let table = $('empTable')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = $('empCount')

const clearTable = () => {
    console.log("Clearing table")
    let table = document.getElementById("empTable").getElementsByTagName("tbody")[0]
    table.innerHTML = ""
}

// LOAD EMPLOYEE LIST
const buildTable = (arr) => {
    clearTable()
    let tbody = document.getElementById("empTable").getElementsByTagName("tbody")[0]
    let row
    let data
    for (let i of arr) {
        row  = document.createElement('tr')
        for (let x of i) {
            data = document.createElement('td')
            data.innerHTML += x
            row.appendChild(data)
        }
        row.className = 'selectedRow'
        // Create button
        const btn = document.createElement('button')
        btn.className = 'button'
        btn.id = 'button'
        btn.setAttribute("onclick", "deleteBtn(this)")
        btn.textContent = 'X'
        row.appendChild(btn)
        tbody.appendChild(row)
    }
    rowCounter(empCount)
    localStorage.setItem('empList', JSON.stringify(empArr))
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

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmp = [empID,name,empExt,email,dept]

    empArr.push(newEmp)

    buildTable(empArr)

    resetForm()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    rowCounter(empCount)
})

// DELETE EMPLOYEE
const deleteBtn = (row) => {
    if (confirm('Are you sure you want to delete this employee?') == true) {
        let i = row.parentNode.rowIndex
        let deleteRow = empArr.splice(i-1,1)
        console.log(deleteRow)
        buildTable(empArr)
        rowCounter(empCount)
    } else {
        // nothing
    }
}

// CREATE AN ARRAY OF EMPLOYEES
let empArr = [
    [80000001,'Marcus',1001,"marcus@evilcorp.com","Executive"],
    [80000002,'Stacy',1002,"stacy@evilcorp.com","Administrative"],
    [80000003,'Larry',1003,"larry@evilcorp.com","Quality Insurance"],
    [80000004,'Sarah',1004,"sarah@evilcorp.com","Marketing"],
    [80000005,'Miyako',1005,"miyako@evilcorp.com","Sales"],
    [80000006,'Shin',1006,"shin@evilcorp.com","Engineering"]
]

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

const savedEmps = () => {
    // if (localStorage.empList === null) {
    if (localStorage.getItem('empList') === null) {
        localStorage.setItem('empList', JSON.stringify(empArr))
    } else {
        empArr.length = 0
        empArr = JSON.parse(localStorage.getItem('empList'))
    }
}

savedEmps()
buildTable(empArr)

// BUILD THE EMPLOYEES GRID
// I did this above

// function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

// };