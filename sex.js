const json_req = {"user_rate":{"score":"5"}}
const headers = {
    "Content-Type": "application/json",
    "X-CSRF-Token": "1neewJ0NR8fdyeQznbAe-8WM2ccSpA-SwqkdaDvp-HWTpxFznGU-zr7qw1TSl9zf5Mg1KQzEbrAPuJRnfPkg6Q",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": placeholder
}
const animeid = "/api/v2/user_rates/196485430"
const url = `https://shikimori.one${animeid}`
const authPage = 'https://shikimori.one/oauth/authorize?client_id=mj3g5xSUeUU0Z12fktYigCLmabbSRByLChmW5CFK6oI&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=user_rates'

function sendAuthRequest(AUTH_CODE) {
    let bodyParams = new URLSearchParams({
        "grant_type": "authorization_code",
        "client_id": "mj3g5xSUeUU0Z12fktYigCLmabbSRByLChmW5CFK6oI",
        "client_secret": "FQBsoX31i4N-OYz4JS6O7aSS5DSfd_LAjaJ47BJrg3g",
        "code": AUTH_CODE,
        "redirect_uri": "http://localhost"
    });

    fetch("https://shikimori.one/oauth/token",
        {
            method: "POST",
            headers: { "User-Agent": "DropdownList",
            　　　　　　"Content-Type": "application/x-www-form-urlencoded"
             },
            body: bodyParams.toString()
        }
    ).then(res => {
        console.log(re.status)
        return res.json()
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.error("OAuth Error:", err);
    })
}

function sendRatingRequest() {
    fetch(
        url, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(json_req),
        credentials: "include"
        }
    )}