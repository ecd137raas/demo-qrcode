var QRCode = require('qrcode')
var http = require('http')

function testQrCode(req, res){

	res.writeHead(200, {'Content-Type':'text/html'})
	var produto = "https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=155S2CD8J60XM&keywords=livros+mais+vendidos&qid=1584317428&sprefix=livros%2Caps%2C301&sr=8-1"


	QRCode.toDataURL(produto, function (err, url) {	
		if(err) console.log('error:' + err)
		res.end("<!DOCTYPE html/><html><head><title>Demo-qrcode</title></head><body><img src='" + url + "'/></body></html>")
		})
}

http.createServer(testQrCode).listen(3000)
console.log('Servidor online porta 3000')
