class User {

  setUserInfo(info) {
    this.userInfo = info
  }

  getUserInfo() {
    return this.userInfo;
  }

}

export default new User();