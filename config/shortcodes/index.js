const version = () => `${String(Date.now())}`;
const year = () => `${new Date().getFullYear()}`;

module.exports = {
  version,
  year,
};