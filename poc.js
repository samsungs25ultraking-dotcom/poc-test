function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
}

const csrfToken = getCookie("CSRF_TOKEN");
const urlParts = document.location.pathname.split("/");
const brandName = urlParts[2];
const prId = urlParts[3];

const params = new URLSearchParams({
    action: "portalInvitation",
    email: "mutharason.s+newuserinviteking20@zohotest.com",
    isportaladmin: "true",
    prid: prId,
    cmcsrfparam: csrfToken
});

fetch(`/social/${brandName}/${prId}/multiuserinvite.do`, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
    },
    body: params.toString(),
    credentials: "same-origin"
});