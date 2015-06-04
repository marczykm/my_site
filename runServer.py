import SimpleHTTPServer,BaseHTTPServer;

BaseHTTPServer.HTTPServer(("", 80), SimpleHTTPServer.SimpleHTTPRequestHandler).serve_forever()
