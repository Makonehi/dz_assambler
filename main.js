fetch("https://reqres.in/api/users")
    .then((res) =>{
        console.log(res)
        return res.json()
    })
    .then((body) => {
        console.log(body)
        console.log("Пункт 1")
        for (let item of body.data) {
            console.log(item.last_name);
        }
        console.log("Пункт 2")
        for (let item of body.data) {
            if (item.last_name.startsWith("W")) {
                for (let propety in item) {
                    console.log(item[propety]);
                }
            }
        }

        let userNames = body.data.map(user => user.first_name).join(', ');
        console.log("Наша база содержит данные следующих пользователей:" + userNames);


    })