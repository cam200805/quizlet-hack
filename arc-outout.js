if (getCookie("qb_optout") == "optout" && confirm("Are you sure you want to opt-out of arc?")){
  setCookie("qb_optout", "qb_optout")
} else {
  eraseCookie("qb_optout")
}
