import request from "superagent"

export function firstapi () {
    return request
         .get('http://localhost:3000/api/v1/data/')
         .then(response => response.body)
}
