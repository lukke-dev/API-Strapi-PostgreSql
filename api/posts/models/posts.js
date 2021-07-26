/* eslint-disable no-unused-vars */
'use strict';

const axios = require('axios');

module.exports = {

  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/60f811bdfe5aad22307046b7');
    },

    async afterUpdate(result, params, data) {
      axios.post('https://api.netlify.com/build_hooks/60f811bdfe5aad22307046b7');
    }
  }

};
