const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)


module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Paid $28.99 for one course',
            source: req.body.id
        })
        console.log(charge)
    })
}




