const isAuthorized = (user, func) => {
  return user.role && user.role[func]
}

module.exports = isAuthorized
