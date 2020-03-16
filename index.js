var QRCode = require('qrcode')
var http = require('http')

function testQrCode(req, res){

	res.writeHead(200, {'Content-Type':'text/html'})
	var produto = "https://www.linkedin.com/in/emerson-d-737a68150/"


	QRCode.toDataURL(produto, function (err, url) {	
		if(err) console.log('error:' + err)
		res.end("<!DOCTYPE html/><html><head><title>Demo-qrcode</title></head><body><img src='" + url + "'/></body></html>")
		})
}

http.createServer(testQrCode).listen(3000)
console.log('Servidor online porta 3000')
