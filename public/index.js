fetch('http://localhost:3000/names')
    .then(response => response.json())
    .then((data) => {
            console.log(data)
        let table = document.getElementById("names")
        for (let name of data) {
            let newTr = document.createElement("tr")
            let tdId = document.createElement('td')
                tdId.innerText = name['_id']
            let tdName = document.createElement('td')
                tdName.innerText = name['name']
            newTr.appendChild(tdId)
            newTr.appendChild(tdName)
            table.appendChild(newTr)


        }
        }
    );
