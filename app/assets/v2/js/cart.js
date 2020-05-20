let grantHeaders = [ 'Grant', 'Amount', 'Type', 'Total CLR Match Amount' ];
let grantData = [];

Vue.component('grants-cart', {
  delimiters: [ '[[', ']]' ],

  data: function() {
    return {
      grantHeaders,
      grantData,
      currencies: [ 'ETH', 'DAI', 'USDC' ] // TODO update with Gitcoin's list of tokens
    };
  },

  computed: {
    donationTotals() {
      const totals = {};

      this.grantData.forEach(grant => {
        const token = grant.grant_donation_currency;

        if (!totals[token]) {
          // First time seeing this token, set the field and initial value
          totals[token] = grant.grant_donation_amount;
        } else {
          // We've seen this token, so just update the total
          totals[token] += grant.grant_donation_amount;
        }
      });
      return totals;
    },

    donationTotalsString() {
      const totals = this.donationTotals;
      let string = '';

      if (!totals) {
        return undefined;
      }

      Object.keys(totals).forEach(key => {
        if (string === '') {
          string += `${totals[key]} ${key}`;
        } else {
          string += `+ ${totals[key]} ${key}`;
        }
      });
      return string;
    },

    donationsToGitcoin() {
      const totals = {};

      this.grantData.forEach(grant => {
        const token = grant.grant_donation_currency;

        if (!totals[token]) {
          // First time seeing this token, set the field and initial value
          totals[token] = grant.grant_donation_amount * 0.05;
        } else {
          // We've seen this token, so just update the total
          totals[token] += (grant.grant_donation_amount * 0.05);
        }
      });
      return totals;
    },

    donationsToGitcoinString() {
      const totals = this.donationsToGitcoin;
      let string = '';

      if (!totals) {
        return undefined;
      }

      Object.keys(totals).forEach(key => {
        if (string === '') {
          string += `${totals[key]} ${key}`;
        } else {
          string += `+ ${totals[key]} ${key}`;
        }
      });
      return string;
    }
  },

  mounted() {
    // Read array of grants in cart from localStorage
    this.grantData = JSON.parse(window.localStorage.getItem('grants_cart'));
  },
  created() {
    //
  },
  beforeMount() {
    //
  },
  beforeDestroy() {
    //
  }
});

if (document.getElementById('gc-grants-cart')) {

  var app = new Vue({
    delimiters: [ '[[', ']]' ],
    el: '#gc-grants-cart',
    data: {
      grantHeaders,
      grantData
    },
    mounted() {
      //
    },
    created() {
      //
    },
    beforeMount() {
      //
    },
    beforeDestroy() {
      //
    }
  });
}