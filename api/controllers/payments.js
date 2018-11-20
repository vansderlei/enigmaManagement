module.exports = function(app){
    app.get('/payments', function (req, res) {
        console.log('Requisition received');
        res.send('Get Payments page')
    });

    app.post('/payments/pay', function(req, res){
        let paymentData = req.body;
        console.log(paymentData);
        res.send('Payment received')
    })
}