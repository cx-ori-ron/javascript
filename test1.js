function getCookieValByName(name) {
  const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

alert(getCookieValByName("logged_in"));
alert(getCookieValByName("JSESSIONID"));
alert(getCookieValByName("user_session"));
